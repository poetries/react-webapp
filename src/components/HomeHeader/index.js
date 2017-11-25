import './style.less';
import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { SearchBar, Flex,Icon } from 'antd-mobile';
import {Row,Col} from 'antd';
import User from 'react-icons/lib/fa/user';
import {BrowserHistory, Link} from 'react-router-dom';
import SearchInput from '../SearchInput';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    
    render(){
        return (
            <div>
                <Row>
                    <a href='/city'>
                        <Col span={2} className='header-icon'>{this.props.cityName}</Col>
                        <Col span={1} className='header-icon'>
                            <Icon size='xs' type='down' />
                        </Col>
                    </a>
                    <SearchInput />
                    <Col span={2} style={{textAlign:'center'}}><User style={{fontSize:'20px',margin:'10px 0',color:'#fff'}} /></Col>
                </Row>
            </div>
        )
    }
}
