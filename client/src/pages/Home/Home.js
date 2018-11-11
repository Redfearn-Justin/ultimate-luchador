import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';

import axios from "axios";

import "./Home.css";

class Splash extends Component {

    state = {
        width: 0
    }

    componentDidMount = () => {
        var passExpNeeded = this.expNeeded();
        var percent = this.widthBar(this.props.storeData.exp, passExpNeeded);

        this.setState({
            width: percent
        });
    }

    widthBar = (a, b) => {
        // var a = 0;
        // var b = 200;
        var sol = Math.floor((a / b) * 100);
        return sol;
    }

    expNeeded = () => {
        const levels = [
            0,
            100,
            200,
            300,
            400,
            500,
            600,
            700,
            800,
            900,
            1000,
            1250,
            1500,
            1750,
            2000,
            2250,
            2500,
            2750,
            3000,
            3500,
            4000,
            5000,
            6000,
            7000,
            8000,
            9000,
            10000,
            11000,
            12000,
            13000,
            14000,
            15000
        ]
        return levels[this.props.storeData.lvl]
    }

    initiateFight = () => {
        if (this.props.storeData.tickets > 0) {
            var minusTicket = this.props.storeData.tickets -= 1;
            
            this.props.useTicket("ChooseOpponent", minusTicket);

            axios.put('/api/useTicket/', {tickets: minusTicket, id: this.props.storeData.id})
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    refreshTickets = () => {
        if (this.props.storeData.refresh > 0) {
            var minusRefresh = this.props.storeData.refresh -= 1;
            var newTickets = this.props.storeData.tickets_max;

            this.props.useRefresh(minusRefresh, newTickets);

            axios.put('/api/useRefresh/', {refresh: minusRefresh, tickets: newTickets, id: this.props.storeData.id})
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

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

                                    <div className="player-level-bar" style={{ textShadow: "1px 1px 3px rgb(49, 59, 175)" }}>
                                        <div className="player-exp" style={{ width: this.state.width + "%" }}></div>
                                        <div className="player-exp-stats">{this.props.storeData.exp}/{this.expNeeded()} exp</div>
                                        <div className="player-exp-lvl">{this.props.storeData.lvl}</div>
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
                                <div className="opponent-stats-bar stat-icons">
                                    <div><span>{this.props.storeData.ab1_dlow}-{this.props.storeData.ab1_dhigh}<img alt="icon" src="./images/icon_sword.svg" /></span></div>
                                    <div><span>{this.props.storeData.ab1_speed}/5<img alt="icon" src="./images/icon_speed.svg" /></span></div>
                                    <div><span>{this.props.storeData.ab1_crit * 100}%<img alt="icon" src="./images/icon_crit.svg" /></span></div>
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
                                <div className="opponent-stats-bar stat-icons">
                                    <div><span>{this.props.storeData.ab2_dlow}-{this.props.storeData.ab2_dhigh}<img alt="icon" src="./images/icon_sword.svg" /></span></div>
                                    <div><span>{this.props.storeData.ab2_speed}/5<img alt="icon" src="./images/icon_speed.svg" /></span></div>
                                    <div><span>{this.props.storeData.ab2_crit * 100}%<img alt="icon" src="./images/icon_crit.svg" /></span></div>
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
                                <div className="opponent-stats-bar stat-icons">
                                    <div><span>{this.props.storeData.ab3_dlow}-{this.props.storeData.ab3_dhigh}<img alt="icon" src="./images/icon_sword.svg" /></span></div>
                                    <div><span>{this.props.storeData.ab3_speed}/5<img alt="icon" src="./images/icon_speed.svg" /></span></div>
                                    <div><span>{this.props.storeData.ab3_crit * 100}%<img alt="icon" src="./images/icon_crit.svg" /></span></div>
                                </div>
                            </div>
                        </div>

                    </div> {/* profile bar end */}


                    <div className="fight-bar">
                        <div className="fight-buttons">
                            <div className="fight-button" onClick={() => this.initiateFight()}>Fight</div>
                            <div className="boss-button" onClick={() => this.props.setPageName("NewAbility")}>Boss</div>
                            <div className="boss-button boss-red" onClick={() => this.props.setPageName("Profile")}>Profile</div>
                        </div>

                        <div className="fight-stats">

                            <div className="fight-stats-tickets">
                                <div><img alt="icon" src="./images/ticket.svg" /></div>
                                <div>{this.props.storeData.tickets}/{this.props.storeData.tickets_max}</div>
                            </div>
                            <div className="fight-stats-text">
                                <div onClick={() => this.refreshTickets()}>
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