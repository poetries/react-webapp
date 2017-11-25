import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { SearchBar,Icon } from 'antd-mobile';
import {Col} from 'antd';
import './style.less'

class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ''
        }
    }
    state = {
        kwd:''
    }
    _ChangeHandle(val) {
        // var val = e.target.value
        this.setState({
            kwd: val
        })
        
    }
    _KeyUpHandle() {
        const keyword = encodeURIComponent(this.state.kwd);
        window.location.href = '/search/all/' + keyword;
    }
    render() {
        return (
            <Col span={19}>
                        <SearchBar
                            value={this.state.kwd}
                            placeholder="Search"
                            onBlur={this._KeyUpHandle.bind(this)}
                            onChange={this._ChangeHandle.bind(this)}
                        />
                    </Col>
        )
    }
    
}

export default SearchInput