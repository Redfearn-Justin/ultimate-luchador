import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';

import axios from "axios";

import "./Home.css";

class Splash extends Component {

    render() {
        return (
            <div className="container">
                <div className="box home-box">

                    <div className="nav-bar">
                        <div className="home-button">
                            {/* Buttons here */}
                            <div onClick={() => this.props.setPageName("NewAbility")}>new ability</div>
                            <div onClick={() => this.props.setPageName("Profile")}>profile</div>
                        </div>
                        <span>ultimate<br />luchador</span>
                        <div className="home-button">
                            <div onClick={() => this.props.setPageName("Credits")}>credits</div>
                            <div onClick={() => this.props.setPageName("Splash")}>Log Out</div>
                        </div>
                    </div>

                    <div className="profile-bar">
                        <div className="profile-top">
                            <div className="profile-pic">
                                <div className="profile-picture"></div>
                            </div>
                            <div className="profile-name">
                                <div>playername</div>
                                <div>experience bar</div>
                            </div>
                            <div className="profile-exp">
                                <div>fame</div>
                                <div>lvl 12</div>
                            </div>
                        </div>
                        <div className="profile-ability">
                            <div className="ability-icon">
                                <div><span>hey</span></div>
                            </div>
                            <div className="ability-text">
                                <div>ability name</div>
                                <div>lvl 12</div>
                            </div>
                        </div>
                        <div className="profile-ability">
                            <div className="ability-icon">
                                <div><span>hey</span></div>
                            </div>
                            <div className="ability-text">
                                <div>ability name</div>
                                <div>lvl 12</div>
                            </div>
                        </div>
                        <div className="profile-ability">
                            <div className="ability-icon">
                                <div><span>hey</span></div>
                            </div>
                            <div className="ability-text">
                                <div>ability name</div>
                                <div>lvl 12</div>
                            </div>
                        </div>
                    </div>

                    <div className="fight-bar">
                        <div className="fight-buttons">
                            <div className="fight-button" onClick={() => this.props.setPageName("ChooseOpponent")}>Fight</div>
                            <div className="boss-button">Boss</div>
                        </div>
                        <div className="fight-stats">
                            <div>tickets</div>
                            <div className="stats-tickets">10/10</div>
                            <div className="stats-refresh">refresh</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    };

};

const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Splash);