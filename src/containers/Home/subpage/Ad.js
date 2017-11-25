import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {getAdData} from '../../../api/home/home.js';
import HomeAd from '../../../components/HomeAd';
import { Spin } from 'antd';

export default class Ad extends Component {
    constructor(props) {
      super(props);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    state = {
        data:[]
    }

    render() {
        return (
            <div>
                {
                    this.state.data.length
                    ? <HomeAd data={this.state.data} /> 
                    : <div className="loading"><Spin tip="Loading..."/></div>
                 }
            </div>
        );
    }
    componentDidMount() {
         getAdData().then(res=>res.json()).then(json=>{
            if (json.length) {
                this.setState({
                    data:json
                })
            }
         })
    }
}

