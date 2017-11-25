import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {getListData} from '../../../api/home/home.js';
import './style.css';
import ListContainer from '../../../components/List';
import LoadMore from '../../../components/LoadMore';
import { Spin } from 'antd';

export default class List extends Component {
    constructor(props) {
      super(props);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    state = {
        data:[], // 存储列表信息
        hasMore:false, // 记录当前状态下还有没有更多的数据可供加载
        isLoadingMore:false, //记录当前状态下，是加载中，还是点击可加载更多
        page:1 //下一页的页码 首页的页码是0
    }

    render() {
        return (
            <div>
                <h2 className='home-list-title'>猜你喜欢</h2>
                {
                    this.state.data.length
                    ?<ListContainer data={this.state.data} />
                    :<div className="loading"><Spin tip="Loading..."/></div>
                }
                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this._loadMoreData.bind(this)} />
                    :''
                }
            </div>
        );
    }
    componentDidMount() {
         this._loadFirstPageData();
    }
    // 获取首屏数据
    _loadFirstPageData() {
        const result = getListData(this.props.cityName,0);
        this._handleResult(result);
    }
    // 加载更多数据
    _loadMoreData(){
       //记录状态
       this.setState({
            isLoadingMore:true
       })
       const result = getListData(this.props.cityName,this.state.page);
       this._handleResult(result);

       // 增加page计数
       this.setState({
           page: this.state.page + 1,
           isLoadingMore:false
       })

    }
    // 数据处理函数
    _handleResult(result) {
        result.then(res=>res.json()).then(json=>{
            const hasMore = json.hasMore;
            const data = json.data;
            
            // 保存数据
            this.setState({
                data:this.state.data.concat(data),// 累加数据，不能data:data覆盖
                hasMore:hasMore
            })
        })
    }
}

