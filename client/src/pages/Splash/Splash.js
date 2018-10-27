import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';

import axios from "axios";

import "./Splash.css";

import SplashTop from "../../components/SplashTop"

class Splash extends Component {

    componentDidMount = () => {
        axios.get('/api/selectone')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="container">

                <div className="box">
                    <SplashTop />
                    <div className="button loginButton" onClick={() => this.props.setPageName("Login")}>LOGIN</div>
                    <div className="button newAccountButton" onClick={() => this.props.setPageName("NewAccount")}>NEW ACCOUNT</div>
                </div>

            </div>
        );
    };

};

const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Splash);