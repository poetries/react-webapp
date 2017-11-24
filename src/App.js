import React from 'react';
import IndexPage from './containers/indexPage'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import LocalStore from './utils/localStore';
import {CITYNAMEC} from './config/localStoreKey';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  state = {
    initDone:false
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        initDone:true
      })
    },2000)
  }
  render() {
    return (
      <div>
          {this.state.initDone ? this.props.children:'正在加载,请稍后...'}
      </div>
    );
  }
}

export default App;
