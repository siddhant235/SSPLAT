import * as actiontypes from '../actions/actionTypes'
import {updateObject} from '../utility'

const initalState={
    news:[],
    loading:false,
    token:null,
    status:'',
    getstatus:'',
}

const getnewsStart=(state,action)=>{
  return updateObject(state,{
    loading:true
  })
}
const getnewsFail=(state,action)=>{
  return updateObject(state,{
    loading:false
  })
}
const getnews=(state,action)=>{
return updateObject(...state,{
    news:action.getdata,
    getstatus:action.getstatus
})
}
const NewsReducer=(state=initalState,action)=>{
  switch(action.type)
  {
      

      case actiontypes.GET_NEWS_SUCCESS:return getnews(state,action);
      case actiontypes.GET_NEWS_FAIL:return getnewsFail(state,action);
      case actiontypes.GET_NEWS_START:return getnewsStart(state,action);
      default:return state
  }
}
export default NewsReducer;