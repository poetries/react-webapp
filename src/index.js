import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import RouteMap from './routers';
import configureStore from './store/configureStore';

import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';
import './styles/App.css';

const store = configureStore();

ReactDOM.render(<Provider store={store}>
  {RouteMap}
</Provider>, document.getElementById('app'));
