import { setRetryTip } from "../../actions/common";

const initialStateSetter = {
    retryTip:false
}

export default (state = initialStateSetter,action:ActionParams)=>{
    switch(action.type){
        case "TRIGGER":{
            console.log("收到请求！")
            return {
                ...state,
                retryTip:true
            }
        }
    }
    return state;
}