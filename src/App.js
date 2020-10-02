import React, { Component} from "react";
import { Route } from "react-router-dom";
import Navbar from "./Components/UI/Navbar/Navbar";
import "./App.css";
import NewsListings from "./Components/NewsPage/NewsPage"

// const JobListings = React.lazy(() =>
//   import("../../components/JobListings/JobListings")
// );
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Route path="/" exact component={NewsListings} />
          {/* <Route path="/" exact component={JobListings} />
          <Route path="/:id/postdata/" exact component={PostData} /> */}
        
      
      </React.Fragment>
    );
  }
}

export default App;
