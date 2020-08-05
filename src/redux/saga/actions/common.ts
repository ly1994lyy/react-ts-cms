import {createRoutine,promisifyRoutine} from 'redux-saga-routines'
import extendRoutine from '../extendRoutine'
import NAMWE_SPACE from '../../../constants/name-space'

export const setRetryTip = createRoutine(`${NAMWE_SPACE}`)