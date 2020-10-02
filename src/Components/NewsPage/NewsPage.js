import React, { Component } from "react";
import { connect } from "react-redux";
import "./NewsPage.css";
import * as actions from "../../store/actions/NewsGet";
class NewsPage extends Component {
  
  componentDidMount() {
    this.props.onGetNews();
  }
  render() {
    let allnews = null;
    console.log(this.props.getstatus)
    if (this.props.getstatus) {
        console.log(this.props.news)
      allnews = this.props.news.map((info) => {
        return (
          <div id="News-details" key={info.author}>
            <div className="News-intern">
              <h6>{info.author}</h6>
        <h4>{info.author}</h4>
              <h5>{info.author}</h5>
              <details>
                <summary>Description :</summary>
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
                Apply Now
              </a>
            </div>
          </div>
        );
      });
    }

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
