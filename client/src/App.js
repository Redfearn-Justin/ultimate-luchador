import React, { Component } from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from './redux/actions';

import './App.css';
import './reset.css';

import Splash from "./pages/Splash";
import NewAccount from "./pages/NewAccount";
import Login from "./pages/Login";

class App extends Component {

  renderPage = () => {
    if (this.props.storeData.pageName === "Splash") return <Splash />
    else if (this.props.storeData.pageName === "NewAccount") return <NewAccount />
    else if (this.props.storeData.pageName === "Login") return <Login />
    else return <h1>Page not found</h1>
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