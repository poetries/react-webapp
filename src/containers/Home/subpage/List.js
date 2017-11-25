import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {getListData} from '../../../api/home/home.js';
import './style.css';

export default class List extends Component {
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
                <h2 className='home-list-title'>猜你喜欢</h2>
            </div>
        );
    }
    componentDidMount() {
         this._loadFirstPageData();
    }
    // 获取首屏数据
    _loadFirstPageData() {
        getListData(this.props.cityName,0).then(res=>res.json()).then(json=>{
            console.log(json)
            if (json.length) {
                this.setState({
                    data:json
                })
            }
         })
    }
}

