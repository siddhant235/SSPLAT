import React, { Component } from "react";
import { connect } from "react-redux";
import axios from 'axios'
import "./NewsPage.css";
import * as actions from "../../store/actions/NewsGet";
class NewsPage extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            news:[],
        
           
        }
        
    }
  componentDidMount() {
    // this.props.onGetNews();
    axios.get("http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2ae5d92ef04d41469f239acc1b745e0d")
    .then(response=>{
        const posts=response.data.articles;
        const updatedPosts=posts.map(post=>{
            return{
                ...post,
                
            }
        })
     this.setState({
         news:updatedPosts
     })   
     console.log(response);
  
        
    })
    .catch(error=>{
     this.setState({
         error:true
     })
 })
  }
  render() {
    let allnews = null;
    console.log(this.state.news)
    
        console.log(this.props.news)
      allnews = this.state.news.map((info) => {
        return (
          <div id="News-details">
            <div className="News-intern">
                
              <h6>{info.author}</h6>
        <h4>{info.title}</h4>

        <img src={info.urlToImage} alt="imag" style={{height:"300px",width:"300px",marginLeft:"15rem"}}/>
              <h5>{info.author}</h5>
              <details>
                <summary>Content :</summary>
                <p>
                  {info.description.split("\n").map(function (item, key) {
                    return (
                      <span key={key}>
                        {item}
                        <br />
                      </span>
                    );
                  })}
                </p>
              </details>
              <a className="read" href={info.url} target="_blank">
                Read Now
              </a>
            </div>
          </div>
        );
      });
    

    return <React.Fragment>{allnews}</React.Fragment>;
  }
}
const mapStateToProps = (state) => {
  return {
    getstatus: state.data.getstatus,
    news: state.data.news,
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetNews: () => dispatch(actions.getNews()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
