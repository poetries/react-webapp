import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import LocalStore from './utils/localStore';
import {CITYNAMEC, CITYNAME} from './config/localStoreKey';
import { Spin } from 'antd';
import { bindActionCreators } from 'redux'; // bindActionCreators 这个现在已经不用了
import { connect } from 'react-redux';
import {userInfo_update} from './actions';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  state = {
    initDone:false
  }
  render() {
   
    return (
      <div>
          {
            this.state.initDone ? this.props.children:<div className="loading"><Spin tip="Loading..."/> </div>
          }
      </div>
    );
  }
  componentWillMount(){
    // 获取位置信息
    let cityName = LocalStore.getItem(CITYNAME);
    if (cityName == null) {// == 包含了undefined 、null情况
      cityName = '北京';
    }

    // 调用action creator
    this.props.userInfo_update({
      cityName
    })

    // 更改状态
    this.setState({
      initDone:true
    })
    
  
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  /**
   * ƒ () {
  *  return dispatch(actionCreator.apply(undefined, arguments));
  *}

  * 把传入的actionCreator绑定一个dispatch，这样actionCreator 中就可以使用dispatch来分发action了.
    这种写法在十几项目中很少用了，因为引入的-react-redux应帮我们处理了，如果mapDispatchToProps是一个对象。返回的 Action 会由 Redux 自动发出
   */
  // console.log(bindActionCreators(Actions.userInfo_update,dispatch)())
  // 写法一
  // return {
  //   userInfoActions:bindActionCreators(Actions.userInfo_update,dispatch)
  // }
}

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  {
    // 写法二 导入actions中需要的action即可
    userInfo_update
  }
)(App);
