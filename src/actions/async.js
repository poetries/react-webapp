
export const receiveData = (json) =>{
  return {
    type:"RECEIVE_SUCCESS",
    data: json.data.children.map(item=>item.data)
  }
}

export const async_fetch_data = (title)=>(dispatch, getState) =>{
    dispatch({type:"START_REQUEST"});
    return fetch(`http://www.subreddit.com/r/${title}.json`).then(response=>response.json()).then(json=>dispatch(receiveData(json)))
}
