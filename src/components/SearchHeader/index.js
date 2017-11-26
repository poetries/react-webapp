import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'
import {Icon } from 'antd-mobile';
import {Row,Col} from 'antd';
import SearchInput from '../SearchInput'

import './style.less'

class SearchHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="search-header" className="clear-fix">
                <Col span={2}>
                    <span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
                        <Icon size='lg' type='left' />
                    </span>
                </Col>
                <Col span={22} style={{position:'relative',left:'20px'}}>
                    <SearchInput value={this.props.keyword || ''} enterHandle={this.enterHandle.bind(this)}/>
                </Col>
            </div>
        )
    }
    clickHandle() {
        window.history.back()
    }
    enterHandle(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
}

export default SearchHeader