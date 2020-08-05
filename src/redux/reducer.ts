import {combineReducers} from 'redux'
import sagaReducer from './saga/reducers'

const rootReducer = combineReducers({
    ...sagaReducer
})

export default rootReducer;
