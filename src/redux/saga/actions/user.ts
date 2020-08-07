import {createRoutine,promisifyRoutine} from 'redux-saga-routines'
import extendRoutine from '../extendRoutine'
import NAME_SPACE from '../../../constants/name-space'

export const loginAction = extendRoutine(
    createRoutine(`${NAME_SPACE.USER}`),
    [
        {
            type:'LOG_OUT',
            action:'logOut'
        }
    ]
)

export const loginActionPromise = promisifyRoutine(loginAction)
