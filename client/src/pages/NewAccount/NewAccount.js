import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';

import "./NewAccount.css";

import SplashTop from "../../components/SplashTop"

class NewAccount extends Component {

    render() {
        return (
            <div className="container">

                <div className="box">
                    <SplashTop />
                    <div className="flex-input">
                        <div className="nav">
                            <button onClick={() => this.props.setPageName("Splash")}>home</button>
                            <span className="text-black">new account</span>
                            <button onClick={() => this.props.setPageName("Splash")}>create</button>
                        </div>
                        <div>
                            <span className="text-red">username</span>
                            <input></input>
                        </div>
                        <div>
                            <span className="text-blue">password</span>
                            <input></input>
                        </div>
                        <div>
                            <span className="text-blue">password</span>
                            <input></input>
                        </div>
                    </div>
                </div>

            </div>
        );
    };

};

const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(NewAccount);