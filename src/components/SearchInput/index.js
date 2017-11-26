import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { SearchBar,Icon } from 'antd-mobile';
import {Col} from 'antd';
import './style.less'
import {withRouter,browserHistory} from 'react-router-dom';

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
        window.location.href = ('/search/all/' + encodeURIComponent(this.state.kwd));
    }
    render() {
        const {history,match,location} = this.props;
        console.log(history,match,location)
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

export default withRouter(SearchInput)