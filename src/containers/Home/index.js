import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from '../../components/HomeHeader';
import Category from '../../components/Category';
import Ad from './subpage/Ad';
import List from './subpage/List';
import { connect } from 'react-redux';

class IndexPage extends Component {
    constructor(props) {
      super(props);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <Header cityName={this.props.userInfo.cityName} />
                <Category />
                <div style={{height:'15px'}}></div>
                <Ad />
                <List cityName={this.props.userInfo.cityName} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        userInfo:state.userInfo
    }
  }
  
export default connect(
    mapStateToProps,{

    }
  )(IndexPage);
  
