import {createStore,applyMiddleware,compose} from 'redux';
import {createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux';
import {BrowserRouter} from 'react-router-dom';
import Thunk from 'redux-thunk';
import rootReducer from '../reduers/';

const middleware = routerMiddleware(BrowserRouter); //监控redux router变化

// 返回功能更强大的高阶组件
const composedCreateStore = compose(
    applyMiddleware(Thunk,middleware,createLogger()),//异步处理
    // 只支持Chrome插件的方式，不引入其他代码
    window.devToolsExtension && window.devToolsExtension()
)(createStore);

const configureStore = (initialState={}) => composedCreateStore(rootReducer,initialState);

export default configureStore;
