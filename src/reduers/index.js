import {combineReducers} from 'redux';
import userInfo from './userInfo';
import async_data from './async';

const rootReducers = {
  userInfo
}

export default combineReducers({
    ...rootReducers
})
