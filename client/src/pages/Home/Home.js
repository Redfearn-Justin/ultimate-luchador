//Imports
//=================================================
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';
import axios from "axios";
import "./Home.css";

//Class
//===============================================
class Splash extends Component {

    state = {
        width: 0
    };

    componentDidMount = () => {
        // Load the player's experience bar
        let passExpNeeded = this.expNeeded();
        let percent = this.widthBar(this.props.storeData.exp, passExpNeeded);

        this.setState({
            width: percent
        });
    };

    cheat = () => {
        // For demo purposes
        if (this.props.storeData.char_name === "gavin") {
            this.props.setPageName("LevelUp");
        };
    };

    widthBar = (a, b) => {
        // Load the player's experience bar's width
        let sol = Math.floor((a / b) * 100);
        return sol;
    };

    expNeeded = () => {
        // EXP needed to level up for each level
        const levels = [
            0,
            100,
            500,
            700,
            900,
            1100,
            1300,
            1500,
            2000,
            2500,
            3000,
            3500,
            4000,
            5000,
            6000,
            7000,
            8000,
            9000,
            10000,
            12000,
            14000,
            16000,
            18000,
            20000,
            25000,
            30000,
            35000,
            40000,
            50000,
            60000,
            70000,
            80000
        ]
        return levels[this.props.storeData.lvl]
    }

    initiateFight = () => {
        // Clicking "fight" initiates a fight if you have tickets
        if (this.props.storeData.tickets > 0) {
            let minusTicket = this.props.storeData.tickets -= 1;

            this.props.useTicket("ChooseOpponent", minusTicket);

            axios.put('/api/useTicket/', { tickets: minusTicket, id: this.props.storeData.id })
                .then(response => {
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };

    refreshTickets = () => {
        // Clicking "refresh" refreshed the player's current ticket count
        if (this.props.storeData.refresh > 0) {
            let minusRefresh = this.props.storeData.refresh -= 1;
            let newTickets = this.props.storeData.tickets_max;

            this.props.useRefresh(minusRefresh, newTickets);

            axios.put('/api/useRefresh/', { refresh: minusRefresh, tickets: newTickets, id: this.props.storeData.id })
                .then(response => {
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };

    render() {
        return (
            <div className="container">
                <div className="box home-box">

                    {/* FLEX ROW */}
                    <div className="nav-bar">
                        <span>ultimate luchador</span>
                    </div>

                    {/* FLEX ROW */}
                    <div className="profile-bar">

                        {/* PROFILE PICTURE */}
                        <div className="profile-info-bar">
                            <div className="profile-left-icon flex-fix">
                                <div className="profile-picture" style={{ backgroundImage: "url(" + this.props.storeData.profile_pic + ")", backgroundSize: "cover", cursor: "pointer" }} onClick={() => this.props.setPageName("Profile")}></div>
                            </div>
                            <div className="profile-col">
                                <div className="profile-player-info player-name"><span style={{ marginTop: "10px" }}>{this.props.storeData.char_name}</span></div>
                                <div className="profile-player-info">

                                    <div className="player-level-bar" style={{ textShadow: "1px 1px 3px rgb(49, 59, 175)" }}>
                                        <div className="player-exp" style={{ width: this.state.width + "%" }}></div>
                                        <div className="player-exp-stats">{this.props.storeData.exp}/{this.expNeeded()}<img alt="icon" src="./images/exp.svg" style={{ height: "15px", position: "relative", top: "2px", marginLeft: "3px" }} /></div>
                                        <div className="player-exp-lvl"><span><img alt="icon" src="./images/lvl.svg" style={{ height: "14px", position: "relative", top: "2px", marginRight: "3px" }} />{this.props.storeData.lvl}</span></div>
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
                                        <img alt="zap" src={this.props.storeData.ab1_icon} style={{ height: "40px" }} />
                                    </div>
                                </div></div>
                            <div className="opponent-stats">
                                <div className="opponent-stats-bar">
                                    <span className="ability-span" style={{ color: this.props.storeData.ab1_color }}>{this.props.storeData.ab1_name}</span>
                                </div>
                                <div className="opponent-stats-bar stat-icons">
                                    <div><span>{this.props.storeData.ab1_dlow}-{this.props.storeData.ab1_dhigh}<img alt="icon" src="./images/icon_sword.svg" style={{ height: "18px", marginLeft: "3px" }} /></span></div>
                                    <div><span>{this.props.storeData.ab1_speed}/5<img alt="icon" src="./images/icon_speed.svg" style={{ height: "18px", marginLeft: "3px" }} /></span></div>
                                    <div><span>{this.props.storeData.ab1_crit * 100}%<img alt="icon" src="./images/icon_crit.svg" style={{ height: "18px", marginLeft: "3px" }} /></span></div>
                                </div>
                            </div>
                        </div>


                        <div className="break-line"></div>


                        <div className="profile-ability-bar">
                            <div className="profile-left-icon">
                                <div className="newab-new-pic-bar w100">
                                    <div className="newab-new-pic home-ability-pic" style={{ backgroundColor: this.props.storeData.ab2_color }}>
                                        <img alt="zap" src={this.props.storeData.ab2_icon} style={{ height: "40px" }} />
                                    </div>
                                </div></div>
                            <div className="opponent-stats">
                                <div className="opponent-stats-bar"><span className="ability-span" style={{ color: this.props.storeData.ab2_color }}>{this.props.storeData.ab2_name}</span></div>
                                <div className="opponent-stats-bar stat-icons">
                                    <div><span>{this.props.storeData.ab2_dlow}-{this.props.storeData.ab2_dhigh}<img alt="icon" src="./images/icon_sword.svg" style={{ height: "18px", marginLeft: "3px" }} /></span></div>
                                    <div><span>{this.props.storeData.ab2_speed}/5<img alt="icon" src="./images/icon_speed.svg" style={{ height: "18px", marginLeft: "3px" }} /></span></div>
                                    <div><span>{this.props.storeData.ab2_crit * 100}%<img alt="icon" src="./images/icon_crit.svg" style={{ height: "18px", marginLeft: "3px" }} /></span></div>
                                </div>
                            </div>
                        </div>


                        <div className="break-line"></div>


                        <div className="profile-ability-bar">
                            <div className="profile-left-icon">
                                <div className="newab-new-pic-bar w100">
                                    <div className="newab-new-pic home-ability-pic" style={{ backgroundColor: this.props.storeData.ab3_color }}>
                                        <img alt="zap" src={this.props.storeData.ab3_icon} style={{ height: "40px" }} />
                                    </div>
                                </div></div>
                            <div className="opponent-stats">
                                <div className="opponent-stats-bar"><span className="ability-span" style={{ color: this.props.storeData.ab3_color }}>{this.props.storeData.ab3_name}</span></div>
                                <div className="opponent-stats-bar stat-icons">
                                    <div><span>{this.props.storeData.ab3_dlow}-{this.props.storeData.ab3_dhigh}<img alt="icon" src="./images/icon_sword.svg" style={{ height: "18px", marginLeft: "3px" }} /></span></div>
                                    <div><span>{this.props.storeData.ab3_speed}/5<img alt="icon" src="./images/icon_speed.svg" style={{ height: "18px", marginLeft: "3px" }} /></span></div>
                                    <div><span>{this.props.storeData.ab3_crit * 100}%<img alt="icon" src="./images/icon_crit.svg" style={{ height: "18px", marginLeft: "3px" }} /></span></div>
                                </div>
                            </div>
                        </div>

                    </div> {/* profile bar end */}

                    {/* FLEX ROW */}
                    <div className="fight-bar">
                        <div className="fight-buttons">
                            <div className="fight-buttons-click fight-button" onClick={() => this.initiateFight()}>Fight</div>
                            <div className="boss-grey" onClick={() => this.cheat()}>Boss</div>
                            <div className="fight-buttons-click profile-red" onClick={() => this.props.setPageName("Profile")}>Profile</div>
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