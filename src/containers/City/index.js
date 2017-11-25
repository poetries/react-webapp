import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import './style.less'
import {userInfo_update} from '../../actions';
import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';
import {CITYNAMEC, CITYNAME} from '../../config/localStoreKey';
import LocalStore from '../../utils/localStore';

 class City extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  _changeCity(newCity){
    if (newCity == null) return;

    // 修改redux
    const userInfo = this.props.userInfo; 
    userInfo.cityName = newCity;
    this.props.userInfo_update(userInfo)

    // 修改localStore
    LocalStore.setItem(CITYNAME, newCity)

    //跳转到首页
  }
  render() {
    return (
      <div>
        <Header title='选择城市' />
        <CurrentCity cityName={this.props.userInfo.cityName} />
        <CityList changeCity={this._changeCity.bind(this)} />
      </div>
    )
  }
  
}

// redux react绑定 =============
const mapStateToProps = (state, ownProps) => {
    return {
        userInfo:state.userInfo
    }
  }
  
export default connect(
    mapStateToProps,{
        userInfo_update
    }
  )(City);
  