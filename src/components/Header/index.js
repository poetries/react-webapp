import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less';
import { Icon } from 'antd-mobile';

export default class NotFindPage extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div id="common-header">
        <span className="back-icon" onClick={()=>window.history.back()}>
             <Icon size='lg' type='left' />
        </span>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}
