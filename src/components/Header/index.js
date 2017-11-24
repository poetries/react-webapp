import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { SearchBar, Flex,Icon } from 'antd-mobile';
import {Row,Col} from 'antd';
import './style.css';
import User from 'react-icons/lib/fa/user';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <div>
                <Row>
                    <Col span={3} style={{textAlign:'center',paddingTop:'10px',color:'#fff'}}>深圳<Icon size='xs' type='down' /></Col>
                    <Col span={18}><SearchBar placeholder="请输入关键字" maxLength={20} /></Col>
                    <Col span={3}><User style={{fontSize:'20px',margin:'13px',color:'#fff'}} /></Col>
                </Row>
            </div>
        )
    }
}