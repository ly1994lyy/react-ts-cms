import {call,put,takeEvery} from 'redux-saga/effects'
import {loginAction} from '../../actions/user'
import {login} from '../../../../http/user'

function* authorize(action:ActionParams<ILogin>){
    try {
        const res = yield call(login,action.payload)
        yield put(loginAction.success(res))
    } catch (error) {
        yield put(loginAction.failure())
    }
}

export default ()=>(function*(){
    yield takeEvery(loginAction.TRIGGER,function*(){

    })
})