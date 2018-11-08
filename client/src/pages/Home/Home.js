import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';
import ImageUploader from 'react-images-upload';

import axios from "axios";

import "./Home.css";

class Splash extends Component {

    render() {
        return (
            <div className="container">
                <div className="box home-box">

                    <div className="nav-bar">
                        <span>ultimate luchador</span>
                    </div>

                    <div className="profile-bar">

                        {/* PROFILE PICTURE */}
                        <div className="profile-info-bar">
                            <div className="profile-left-icon flex-fix">
                                <div className="profile-picture" style={{ backgroundImage: "url(" + this.props.storeData.profile_pic + ")", backgroundSize: "cover" }}></div>
                            </div>
                            <div className="profile-col">
                                <div className="profile-player-info player-name"><span style={{ marginTop: "10px" }}>{this.props.storeData.char_name}</span></div>
                                <div className="profile-player-info">

                                    <div className="player-level-bar">
                                        <div className="player-exp"></div>
                                        <div className="player-exp-stats">123/456 x</div>
                                        <div className="player-exp-lvl">12</div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="break-line"></div>

                        {/* ABILITIES START */}
                        <div className="profile-ability-bar">
                            <div className="profile-left-icon">
                                <div className="newab-new-pic-bar w100">
                                    <div className="newab-new-pic home-ability-pic" style={{ backgroundColor: this.props.storeData.ab1_color }}>
                                        <img alt="zap" src={this.props.storeData.ab1_icon} />
                                    </div>
                                </div></div>
                            <div className="opponent-stats">
                                <div className="opponent-stats-bar">
                                    <span className="ability-span" style={{ color: this.props.storeData.ab1_color }}>{this.props.storeData.ab1_name}</span>
                                </div>
                                <div className="opponent-stats-bar">
                                    <div>{this.props.storeData.ab1_dlow}-{this.props.storeData.ab1_dhigh}<img alt="icon" src="./images/icon_sword.svg" /></div>
                                    <div>{this.props.storeData.ab1_speed}/5<img alt="icon" src="./images/icon_speed.svg" /></div>
                                    <div>{this.props.storeData.ab1_crit * 100}%<img alt="icon" src="./images/icon_crit.svg" /></div>
                                </div>
                            </div>
                        </div>


                        <div className="break-line"></div>


                        <div className="profile-ability-bar">
                            <div className="profile-left-icon">
                                <div className="newab-new-pic-bar w100">
                                    <div className="newab-new-pic home-ability-pic" style={{ backgroundColor: this.props.storeData.ab2_color }}>
                                        <img alt="zap" src={this.props.storeData.ab2_icon} />
                                    </div>
                                </div></div>
                            <div className="opponent-stats">
                                <div className="opponent-stats-bar"><span className="ability-span" style={{ color: this.props.storeData.ab2_color }}>{this.props.storeData.ab2_name}</span></div>
                                <div className="opponent-stats-bar">
                                    <div>{this.props.storeData.ab2_dlow}-{this.props.storeData.ab2_dhigh}<img alt="icon" src="./images/icon_sword.svg" /></div>
                                    <div>{this.props.storeData.ab2_speed}/5<img alt="icon" src="./images/icon_speed.svg" /></div>
                                    <div>{this.props.storeData.ab2_crit * 100}%<img alt="icon" src="./images/icon_crit.svg" /></div>
                                </div>
                            </div>
                        </div>


                        <div className="break-line"></div>


                        <div className="profile-ability-bar">
                            <div className="profile-left-icon">
                                <div className="newab-new-pic-bar w100">
                                    <div className="newab-new-pic home-ability-pic" style={{ backgroundColor: this.props.storeData.ab3_color }}>
                                        <img alt="zap" src={this.props.storeData.ab3_icon} />
                                    </div>
                                </div></div>
                            <div className="opponent-stats">
                                <div className="opponent-stats-bar"><span className="ability-span" style={{ color: this.props.storeData.ab3_color }}>{this.props.storeData.ab3_name}</span></div>
                                <div className="opponent-stats-bar">
                                    <div>{this.props.storeData.ab3_dlow}-{this.props.storeData.ab3_dhigh}<img alt="icon" src="./images/icon_sword.svg" /></div>
                                    <div>{this.props.storeData.ab3_speed}/5<img alt="icon" src="./images/icon_speed.svg" /></div>
                                    <div>{this.props.storeData.ab3_crit * 100}%<img alt="icon" src="./images/icon_crit.svg" /></div>
                                </div>
                            </div>
                        </div>

                    </div> {/* profile bar end */}


                    <div className="fight-bar">
                        <div className="fight-buttons">
                            <div className="fight-button" onClick={() => this.props.setPageName("ChooseOpponent")}>Fight</div>
                            <div className="boss-button" onClick={() => this.props.setPageName("NewAbility")}>Boss</div>
                            <div className="boss-button boss-red" onClick={() => this.props.setPageName("Profile")}>Profile</div>
                        </div>

                        <div className="fight-stats">

                            <div className="fight-stats-tickets">
                                <div><img alt="icon" src="./images/ticket.svg" /></div>
                                <div>{this.props.storeData.tickets}/{this.props.storeData.tickets_max}</div>
                            </div>
                            <div className="fight-stats-text">
                                <div>
                                    <span>refill: {this.props.storeData.refresh}</span>
                                </div>
                            </div>
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