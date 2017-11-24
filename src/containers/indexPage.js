import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class IndexPage extends Component {
    constructor(props) {
      super(props);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                main-body部分
            </div>
        );
    }
}

export default IndexPage;
