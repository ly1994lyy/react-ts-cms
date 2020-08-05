import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer'
import rootSaga from './saga/sagas'

//saga中间件
const sagaMiddleware = createSagaMiddleware()

//创建一个增强器函数
const composeEnhancer = (window as any).window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?(window as any).window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:compose;

const store = createStore(rootReducer,composeEnhancer(
    applyMiddleware(
        sagaMiddleware,
    )
))

sagaMiddleware.run(rootSaga)

export default store;