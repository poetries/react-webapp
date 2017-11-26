import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class UserCenter extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div>
        <h1>用户中心,开发中....</h1>
      </div>
    )
  }
}
