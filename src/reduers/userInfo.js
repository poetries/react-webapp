import * as ActionTypes from '../constants/ActionTypes';

// 必须初始化结构。否则redux init的时候出现undefined
// state 可以是基本类型、数组、对象，取决于需求
const userInfo = (state={},action) =>{
    switch (action.type) {
        case ActionTypes.USERINFO_UPDATE:
            return  action.data;
        default:
            return state;
    }
}
export default userInfo;
