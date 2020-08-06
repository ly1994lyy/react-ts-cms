import {call,put,takeEvery} from 'redux-saga/effects'
import {loginAction} from '../../actions/user'

function* authorize(action:ActionParams<ILogin>){
    try {
        const res = setTimeout(()=>{},1000)
        yield put(loginAction.success(res))
    } catch (error) {
        
    }
}

export default ()=>(function*(){
    yield takeEvery(loginAction.TRIGGER,function*(){

    })
})