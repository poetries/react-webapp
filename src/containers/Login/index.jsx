import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import {userInfo_update} from '../../actions';

import Header from '../../components/Header'
import LoginComponent from '../../components/Login'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking: true
        }
    }
    render() {
        return (
            <div>
                <Header title="登录"/>
                {
                    // 等待验证之后，再显示登录信息
                    this.state.checking
                    ? <div>{/* 等待中 */}</div>
                    : <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
                }
            </div>
        )
    }
    componentDidMount() {
        // 判断是否已经登录
        this.doCheck()
    }
    doCheck() {
        const userInfo = this.props.userInfo
        if (userInfo.username) {
            // 已经登录，则跳转到用户主页
            this.goUserPage();
        } else {
            // 未登录，则验证结束
            this.setState({
                checking: false
            })
        }
    }
    // 处理登录之后的事情
    loginHandle(username) {
        // 保存用户名
        let userInfo = this.props.userInfo
        userInfo.username = username
       this.props.userInfo_update(userInfo)

        const params = this.props.match.params
        const router = params.router
        if (router) {
            // 跳转到指定的页面
            // hashHistory.push(router)
            window.location.href = router
        } else {
            // 跳转到用户主页
            this.goUserPage()
        }
    }
    goUserPage() {
        // hashHistory.push('/User')
        window.location.href = '/user'
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}


export default connect(
    mapStateToProps,
    {
        userInfo_update
    }
)(Login)