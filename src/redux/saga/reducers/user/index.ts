import {loginAction} from '../../actions/user'
import { stat } from 'fs'

const initialStateSetter = {
    isLogin:false
}

export default function(state=initialStateSetter,action:ActionParams){
    switch (action.type) {
        case loginAction.SUCCESS:{
            return {
                ...state,
                isLogin:true
            }
        }
        default:
            return state;
    }
}