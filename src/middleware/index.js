import thunk from 'redux-thunk'
import logger from './logger';
import {applyMiddleware} from 'redux'

//   export an invocation of appluMiddlewaye 


export default applyMiddleware(
    thunk,
    logger,
)