import * as ActionTypes from '../constants/ActionTypes';

export const userInfo_update = (data)=>{
    return {
        type:ActionTypes.USERINFO_UPDATE,
        data
    }
}
