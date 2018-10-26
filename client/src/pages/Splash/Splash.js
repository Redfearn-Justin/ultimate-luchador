import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';

import "./Splash.css";

class Splash extends Component {

    render() {

        return (
            <div className="container">
               <p>hi</p>
               <button onClick={() => this.props.setPageName("NewAccount")}>click me</button>
            </div>
        );
    }

}

const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Splash);