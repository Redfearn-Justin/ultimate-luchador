import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';
import axios from "axios";

import "./FightResults.css";

class FightResults extends Component {

    state = {
        npc: 0,
        char_name: "",
        profile_pic: "",
        lvl: 0,
        fame: 0,
        wins: 0,
        losses: 0,
        circleCss1: "",
        circleCss2: "",
        newFame: 0,
        fameEarned: 0,
        newExp: 0,
        expEarned: 1,
    }

    componentDidMount = () => {
        const fetchId = this.props.storeData.inactiveId;

        axios.get('/api/selectSingleOpponent/' + fetchId)
            .then(response => {
                const dataArray = response.data[0];

                var circleCssHolder1 = "";
                var circleCssHolder2 = "";

                if (this.props.storeData.outcome === "victory") {
                    circleCssHolder1 = "0 0 20px rgba(0, 194, 42, 0.72)";
                    circleCssHolder2 = "0 0 20px rgba(194, 0, 0, 0.623)";
                } else if (this.props.storeData.outcome === "defeat") {
                    circleCssHolder1 = "0 0 20px rgba(194, 0, 0, 0.623)";
                    circleCssHolder2 = "0 0 20px rgba(0, 194, 42, 0.72)";
                } else {
                    alert("got a problem yo")
                }

                this.setState({
                    npc: dataArray.npc,
                    char_name: dataArray.char_name,
                    profile_pic: dataArray.profile_pic,
                    lvl: dataArray.lvl,
                    fame: dataArray.fame,
                    wins: dataArray.wins,
                    losses: dataArray.losses,
                    circleCss1: circleCssHolder1,
                    circleCss2: circleCssHolder2
                });

                this.calculateFame();
            })
            .catch(error => {
                console.log(error);
            });
    }

    getRandomInteger = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    getRandomNegInteger = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return -(Math.floor(Math.random() * (max - min)) + min);
    };

    calculateFame = () => {
        var fameGain = 0;

        if (this.props.storeData.outcome === "victory") {
            if (this.props.storeData.fame >= this.state.fame) {
                // if you win and your fame is higher
                fameGain = this.getRandomInteger(4, 7);
            } else if (this.props.storeData.fame < this.state.fame) {
                // if you win and their fame is higher
                fameGain = this.getRandomInteger(7, 10);
            }
        } else if (this.props.storeData.outcome === "defeat") {
            if (this.props.storeData.fame >= this.state.fame) {
                // if you lose and your fame is higher
                fameGain = this.getRandomNegInteger(4, 6);
                if (-fameGain >= this.props.storeData.fame) {
                    fameGain = 0;
                }
            } else if (this.props.storeData.fame < this.state.fame) {
                // if you lose and their fame is higher
                fameGain = this.getRandomNegInteger(2, 5);
                if (-fameGain >= this.props.storeData.fame) {
                    fameGain = 0;
                }
            }
        } // if end

        this.setState({
            fameEarned: fameGain,
            newFame: this.props.storeData.fame += fameGain,
        });

        this.calculateExp();
    };

    calculateExp = () => {
        var expGain = 0;
        var passWins = this.props.storeData.wins;
        var passLoss = this.props.storeData.losses;

        if (this.props.storeData.outcome === "victory") {
            passWins = this.props.storeData.wins += 1;
            if (this.props.storeData.lvl >= this.state.lvl) {
                // if you win and your lvl is higher
                expGain = this.getRandomInteger(25, 50);
            } else if (this.props.storeData.lvl < this.state.lvl) {
                // if you win and their lvl is higher
                expGain = this.getRandomInteger(40, 75);
            }
        } else if (this.props.storeData.outcome === "defeat") {
            passLoss = this.props.storeData.losses += 1;
            if (this.props.storeData.lvl >= this.state.lvl) {
                // if you lose and your lvl is higher
                expGain = this.getRandomInteger(4, 8);
            } else if (this.props.storeData.lvl < this.state.lvl) {
                // if you lose and their lvl is higher
                expGain = this.getRandomInteger(8, 16);
            }
        } // if end

        this.setState({
            expEarned: expGain,
            newExp: this.props.storeData.exp += expGain,
        });

        var passExp = this.props.storeData.exp += expGain;
        var passFame = this.state.newFame;

        this.props.updateExpFame(passExp, passFame, passWins, passLoss);

        axios.put('/api/updateExpFame/', {fame: this.state.newFame, exp: this.state.newExp, id: this.props.storeData.id, wins: passWins, losses: passLoss})
        .then(response => {
           console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    }

    homeButton = () => {
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

        if (this.props.storeData.exp >= levels[this.props.storeData.lvl]) {
            // this.props.levelUp("LevelUp");
            this.props.setPageName("LevelUp");
        } else {
        this.props.setPageName("Home");
        }
    };

    render() {
        return (
            <div className="container">
                <div className="box fight-box">

                    <div className={this.props.storeData.textCss}>{this.props.storeData.outcome}</div>

                    <div className="results-info-bar">
                        <div className="results-player-bar">
                            <div className="results-player-pic">
                                <div className="results-pic" style={{ backgroundImage: "url(" + this.props.storeData.profile_pic + ")", backgroundSize: "cover", boxShadow: this.state.circleCss1 }}></div>
                            </div>
                            {/* <div className="results-player-stats">{this.props.storeData.char_name}</div> */}
                            <div className="results-player-stats"><span><img alt="icon" src="./images/fame.svg" style={{ height: "22px", position: "relative", top: "2px" }} /> {this.props.storeData.fame}</span></div>
                            <div className="results-player-stats"><span><img alt="icon" src="./images/lvl.svg" style={{ height: "22px", position: "relative", top: "2px" }} /> {this.props.storeData.lvl}</span></div>
                            <div className="results-player-stats mb"><span><span style={{ color: "rgb(0, 194, 42)" }}>{this.props.storeData.wins}</span> / <span style={{ color: "red" }}>{this.props.storeData.losses}</span></span></div>
                        </div>
                        <div className="results-vs-bar">vs</div>
                        <div className="results-player-bar">
                            <div className="results-player-pic">
                                <div className="results-pic" style={{ backgroundImage: "url(" + this.state.profile_pic + ")", backgroundSize: "cover", boxShadow: this.state.circleCss2 }}></div>
                            </div>
                            {/* <div className="results-player-stats">{this.state.char_name}</div> */}
                            <div className="results-player-stats"><span><img alt="icon" src="./images/fame.svg" style={{ height: "22px", position: "relative", top: "2px" }} /> {this.state.fame}</span></div>
                            <div className="results-player-stats"><span><img alt="icon" src="./images/lvl.svg" style={{ height: "22px", position: "relative", top: "2px" }} /> {this.state.lvl}</span></div>
                            <div className="results-player-stats mb"><span><span style={{ color: "rgb(0, 194, 42)" }}>{this.state.wins}</span> / <span style={{ color: "red" }}>{this.state.losses}</span></span></div>
                        </div>
                    </div>

                    <div className="results-stats-bar">
                        <div className="results-stats-stats">
                            <div className="results-stats-single-stat stat-green" style={{ marginTop: "5px" }}>take:</div>
                            <div className="results-stats-single-stat"><span><img alt="icon" src="./images/fame.svg" style={{ height: "18px", position: "relative", top: "2px" }} /> {this.state.fameEarned}</span></div>
                            <div className="results-stats-single-stat" style={{ marginBottom: "5px" }}><span><img alt="icon" src="./images/exp.svg" style={{ height: "20px", position: "relative" }} /> {this.state.expEarned}</span></div>
                        </div>
                        <div className="results-stats-home">
                            <div className="button" onClick={this.homeButton}>proceed</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    };

};

const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(FightResults);