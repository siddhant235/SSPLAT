import * as actionTypes from './actionTypes'
import axios from 'axios';
export const getnewstart=()=>{
    return{
        type:actionTypes.GET_NEWS_START,
       
    }
}
export const getnewsFail=(error)=>{
    return{
        type:actionTypes.GET_NEWS_FAIL,
        error:error
    }
}
export const getnewsSuccess=(getdata,getstatus)=>{
    return{
        type:actionTypes.GET_NEWS_SUCCESS,
        getdata:getdata,
        getstatus:getstatus
    }
}

export const getNews=()=>{
    return dispatch=>{
        dispatch(getnewstart());
        axios.get("http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2ae5d92ef04d41469f239acc1b745e0d"
          )
        .then(res=>{
           
            console.log(res.data.articles,res.data.status);
        dispatch(getnewsSuccess(res.data.articles,res.data.status))
            
        })
        .catch(err=>{
            dispatch(getnewsFail(err.message))
            console.log(err.message)
        })
    }
}

