import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';

import "./SplashTop.css"

class SplashTop extends Component {

    render() {

        return (
                <div className="flex-box">
                    <p className="title" onClick={() => this.props.setPageName("Splash")}>ULTIMATE<br />LUCHADOR</p>
                    <img alt="zap" src="./images/splash_combined_big.png" />
                </div>
        );
    }

}

const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(SplashTop);