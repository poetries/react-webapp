import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {getAdData} from '../../../api/home/home.js';

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
                {}
            </div>
        );
    }
    componentDidMount() {
         getAdData().then(res=>res.json()).then(json=>{
            // console.log(json)
            if (json.length) {
                this.setState({
                    data:json
                })
            }
         })
    }
}

