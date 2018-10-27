import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';

import "./SplashTop.css"

class SplashTop extends Component {

    render() {

        return (
            <div className="container">
                <p className="title">ULTIMATE<br />LUCHADOR</p>
                <img className="zap" alt="zap" src="./images/splash_zap.png" />
                <img className="luch" alt="luchador" src="./images/splash_luch.png" />
            </div>
        );
    }

}

const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(SplashTop);