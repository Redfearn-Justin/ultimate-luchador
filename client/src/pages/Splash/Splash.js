import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';

import "./Splash.css";

class Splash extends Component {

    render() {

        return (
            <div className="container">

                <div className="box">
                    <p className="title">ULTIMATE<br />LUCHADOR</p>
                    <img className="zap" alt="zap" src="./images/splash_zap.png" />
                    <img className="luch" alt="luchador" src="./images/splash_luch.png" />
                    <div className="button loginButton" onClick={() => this.props.setPageName("Login")}>LOGIN</div>
                    <div className="button newAccountButton" onClick={() => this.props.setPageName("NewAccount")}>NEW ACCOUNT</div>
                </div>

            </div>
        );
    }

}

const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Splash);