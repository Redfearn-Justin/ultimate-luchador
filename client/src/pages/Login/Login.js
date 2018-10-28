import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';

import "./Login.css";

import SplashTop from "../../components/SplashTop"

class Login extends Component {

    render() {

        return (
            <div className="container">

                <div className="box">
                    <SplashTop />
                    <div className="flex-input">

                        <div className="nav">
                            <button onClick={() => this.props.setPageName("Splash")}>home</button>
                            <span className="text-black">log in</span>
                            <button onClick={() => this.props.setPageName("Splash")}>log in</button>
                        </div>
                        <div>
                            <span className="text-red">username</span>
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
    }

}

const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Login);