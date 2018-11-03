import React, { Component } from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from './redux/actions';

import './App.css';
import './reset.css';

import Splash from "./pages/Splash";
import NewAccount from "./pages/NewAccount";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ChooseOpponent from "./pages/ChooseOpponent";
import Fight from "./pages/Fight";
import FightResults from "./pages/FightResults";
import LevelUp from "./pages/LevelUp";
import NewAbility from "./pages/NewAbility";
import Credits from "./pages/Credits";

class App extends Component {

  renderPage = () => {
    if (this.props.storeData.pageName === "Splash") return <Splash />
    else if (this.props.storeData.pageName === "NewAccount") return <NewAccount />
    else if (this.props.storeData.pageName === "Login") return <Login />
    else if (this.props.storeData.pageName === "Home") return <Home />
    else if (this.props.storeData.pageName === "ChooseOpponent") return <ChooseOpponent />
    else if (this.props.storeData.pageName === "Fight") return <Fight />
    else if (this.props.storeData.pageName === "FightResults") return <FightResults />
    else if (this.props.storeData.pageName === "LevelUp") return <LevelUp />
    else if (this.props.storeData.pageName === "NewAbility") return <NewAbility />
    else if (this.props.storeData.pageName === "Credits") return <Credits />
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