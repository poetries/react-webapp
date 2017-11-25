import {combineReducers} from 'redux';
import userInfo from './userInfo';

const rootReducers = {
  userInfo
}

export default combineReducers({
    ...rootReducers
})
