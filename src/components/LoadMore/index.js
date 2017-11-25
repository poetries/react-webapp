import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Spin } from 'antd';

import './style.less'

class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    _loadMoreHandle(){
        // 执行传递过来的loadMoreData
        this.props.loadMoreFn()
    }
    render() {
        return (
            <div className="load-more" ref='wrapper'>
               {
                   this.props.isLoadingMore
                   ? <span className="loading"><Spin tip="Loading..."/> </span>
                   : <span onClick={this._loadMoreHandle.bind(this)}>加载更多</span>
               }
            </div>
        )
    }
    componentDidMount(){
        const wrapper = this.refs.wrapper;

        let timeoutId;
        window.addEventListener('scroll',()=>{
            if (this.props.isLoadingMore) return;
            if(timeoutId) clearTimeout(timeoutId);

            timeoutId = setTimeout(()=>{
                // 获取加载更多这个节点距离顶部的距离
                const top = wrapper.getBoundingClientRect().top;
                const windowHeight = window.screen.height;

                if (top && top < windowHeight) {
                    // 当wrapper已经在页面可视范围之内触发
                    this.props.loadMoreFn();
                }
            },50)
        },false)
    }
}

export default LoadMore