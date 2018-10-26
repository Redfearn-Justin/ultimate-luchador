import React, { Component } from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from './redux/actions';

import './App.css';
import './reset.css';

class App extends Component {

  renderPage = () => {
    // if (this.props.storeData.pageName === "home") return <Home />
    // else if (this.props.storeData.pageName === "fight") return <Fight />
    // else return <h1>Page not found</h1>
    return <h2>hello</h2>
  }

  render() {
    return (
      <div className="App">
        {this.renderPage()}
      </div>
    );
  }

}

const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(App);
