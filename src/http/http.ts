import AxiosInstance,{AxiosStatic,AxiosPromise, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import {message} from 'antd'
import {setRetryTip} from '../redux/saga/actions/common'
import store from '../redux'


type requestFn = (url:string,params?:Object,data?:Object | null)=>AxiosPromise;


class Http {
    private axios:AxiosStatic = AxiosInstance;
    private retryDelay:number = 1000;
    //重复次数
    private retry :number = Number(process.env.REACT_APP_RETRY) || 4;
    constructor(){
        const {axios} = this
        axios.defaults.timeout = 10000;
        axios.defaults.baseURL = process.env.REACT_APP_API_URL
        axios.defaults.headers = {
            "Content-Type": 'application/json;charset=UTF-8'
        }
        this.useIntercepRequest()
        this.useIntercepResponse()
    }
    useIntercepResponse(){
        this.axios.interceptors.response.use(
            (res:AxiosResponse)=>{
                if(res.data.errorCode === '101010500'){
                    message.error('服务器错误，请联系管理员！')
                }
                if(res.data.errorCode === '102022001'){
                    message.error('登录过期，请重新登录')
                }
                if(res.data.errorCode!==0){
                    message.error(res.data.errMsg || '服务器异常！')
                    return Promise.reject(res.data.errMsg)
                }
                return Promise.resolve(res.data)
            },
            (error:AxiosError)=>{
                const {config} = error
                let retryCont = config.headers['axios-retry'] || 0
                if(retryCont>=this.retry){
                    store.dispatch(setRetryTip(true))
                    return Promise.reject(error)
                }
                retryCont+=1
                const backoff = new Promise((resolve)=>{
                    setTimeout(()=>{
                        resolve()
                    },this.retryDelay || 1)
                })
                config.headers['axios-retry'] = retryCont
                return backoff.then(()=>{
                    this.axios(config)
                })
            }
        )
    }
    useIntercepRequest(){
        this.axios.interceptors.request.use(
            async (config:AxiosRequestConfig)=>{
                const newConfig = config
                const token =await 'asd.sdw.fdf'
                if(token) newConfig.headers.authtoken = token
                return newConfig
            },
            (error:AxiosError)=>Promise.reject(error)
        )
    }

    

    private fetchData(type:string,url:string,options?:Object,isComplex?:boolean){
        if(isComplex) {
            return this.axios[type](url,null,options)
        }
        return this.axios[type](url,options)
    }

    public get:requestFn = (url:string,params:Object | undefined)=>{
        if(!params) return this.fetchData('get',url)
        const newParams = Object.assign(params,{
            [`dmx${new Date().getTime()}`]:1
        })
        return this.fetchData('get',url,{params:newParams})
    }

    public commonRequest(type:string,url:string,params?:Object,data?:Object | null):AxiosPromise{
        let options:Object = {
            params,
            data,
        }
        if(params && data ===undefined){
            options = {
                data:params
            }
        }
        if(data===null){
            options = {
                params
            }
        }
        return this.fetchData(type,url,options,true)
    }

    public post:requestFn = (url,params,data)=>{
        return this.commonRequest('post',url,params,data)
    }

    public put:requestFn = (url,params,data)=>{
        return this.commonRequest('put',url,params,data)
    }

    public patch:requestFn = (url,params,data)=>{
        return this.commonRequest('patch',url,params,data)
    }

    public delete:requestFn = (url,params,data)=>{
        return this.commonRequest('delete',url,params,data)
    }
}

export default new Http();