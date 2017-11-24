import {combineReducers} from 'redux';
import userInfo from './userInfo';
import async_data from './async';

const rootReducers = {
  userInfo,
  async_data
}

export default combineReducers({
    ...rootReducers
})
