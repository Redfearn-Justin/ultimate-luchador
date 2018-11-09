import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';
import axios from "axios";

import "./Fight.css";

class Fight extends Component {

    state = {
        id: "",
        npc: "",
        char_name: "",
        profile_pic: "",
        lvl: 0,
        fame: 0,
        inact_hp_base: 0,
        inact_hp: 0,
        act_hp: 0,
        ab1_name: "",
        ab1_dlow: 1,
        ab1_dhigh: 2,
        ab1_speed: 5,
        ab1_crit: 1,
        ab1_fail: 1,
        ab1_color: "",
        ab2_name: "",
        ab2_dlow: 1,
        ab2_dhigh: 2,
        ab2_speed: 5,
        ab2_crit: 1,
        ab2_fail: 1,
        ab2_color: "",
        ab3_name: "",
        ab3_dlow: 1,
        ab3_dhigh: 2,
        ab3_speed: 5,
        ab3_crit: 1,
        ab3_fail: 1,
        ab3_color: "",
        act_attacks: [],
        inact_attacks: [],
        outcome: ""
    };

    componentDidMount = () => {
        const fetchId = this.props.storeData.inactiveId;

        axios.get('/api/selectSingleOpponent/' + fetchId)
            .then(response => {
                const dataArray = response.data[0];

                this.setState({
                    id: dataArray.id,
                    npc: dataArray.npc,
                    char_name: dataArray.char_name,
                    profile_pic: dataArray.profile_pic,
                    lvl: dataArray.lvl,
                    fame: dataArray.fame,
                    inact_hp_base: dataArray.hp,
                    inact_hp: dataArray.hp,
                    act_hp: this.props.storeData.hp,
                    ab1_name: dataArray.ab1_name,
                    ab1_dlow: dataArray.ab1_dlow,
                    ab1_dhigh: dataArray.ab1_dhigh,
                    ab1_speed: dataArray.ab1_speed,
                    ab1_crit: dataArray.ab1_crit,
                    ab1_fail: dataArray.ab1_fail,
                    ab1_color: dataArray.ab1_color,
                    ab2_name: dataArray.ab2_name,
                    ab2_dlow: dataArray.ab2_dlow,
                    ab2_dhigh: dataArray.ab2_dhigh,
                    ab2_speed: dataArray.ab2_speed,
                    ab2_crit: dataArray.ab2_crit,
                    ab2_fail: dataArray.ab2_fail,
                    ab2_color: dataArray.ab2_color,
                    ab3_name: dataArray.ab3_name,
                    ab3_dlow: dataArray.ab3_dlow,
                    ab3_dhigh: dataArray.ab3_dhigh,
                    ab3_speed: dataArray.ab3_speed,
                    ab3_crit: dataArray.ab3_crit,
                    ab3_fail: dataArray.ab3_fail,
                    ab3_color: dataArray.ab3_color
                });
                console.log("---1) my hp: " + this.state.act_hp + " their hp: " + this.state.inact_hp);
                this.setupRaffle();
            })
            .catch(error => {
                console.log(error);
            });
    };

    getRandomInteger = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    setupRaffle = () => {
        console.log("setup raffle firing");
        var iaHolder = [];
        var aaHolder = [];

        for (let i = 0; i < this.state.ab1_speed; i++) {
            iaHolder.push("1");
        }
        for (let i = 0; i < this.state.ab2_speed; i++) {
            iaHolder.push("2");
        }
        for (let i = 0; i < this.state.ab3_speed; i++) {
            iaHolder.push("3");
        }
        for (let i = 0; i < this.props.storeData.ab1_speed; i++) {
            aaHolder.push("1");
        }
        for (let i = 0; i < this.props.storeData.ab2_speed; i++) {
            aaHolder.push("2");
        }
        for (let i = 0; i < this.props.storeData.ab3_speed; i++) {
            aaHolder.push("3");
        }

        this.setState({
            act_attacks: aaHolder,
            inact_attacks: iaHolder
        });

        this.activeAttack();
    }

    activeAttack = () => {
        var randAttack = this.state.act_attacks[Math.floor(Math.random() * this.state.act_attacks.length)];

        var diceRoll = Math.floor(Math.random() * 100) + 1;

        var atkName = "";
        var atkColor = "";
        var atkDamage = 0;
        var atkCrit = 0;
        var atkFail = 0;

        if (randAttack == "1") {
            atkDamage = this.getRandomInteger(this.state.ab1_dlow, this.state.ab1_dhigh);
            atkName = this.state.ab1_name;
            atkColor = this.state.ab1_color;

            if (diceRoll >= 100 - (this.state.ab1_crit * 100)) {
                atkDamage += Math.floor(atkDamage * 0.25);
                atkCrit = 1;
            } else if (diceRoll <= this.state.ab1_fail * 100) {
                atkDamage -= Math.floor(atkDamage * 0.4);
                atkFail = 1;
            }

        } else if (randAttack == "2") {
            atkDamage = this.getRandomInteger(this.state.ab2_dlow, this.state.ab2_dhigh);
            atkName = this.state.ab2_name;
            atkColor = this.state.ab2_color;

            if (diceRoll >= 100 - (this.state.ab2_crit * 100)) {
                atkDamage += Math.floor(atkDamage * 0.25);
                atkCrit = 1;
            } else if (diceRoll <= this.state.ab2_fail * 100) {
                atkDamage -= Math.floor(atkDamage * 0.4);
                atkFail = 1;
            }

        } else if (randAttack == "3") {
            atkDamage = this.getRandomInteger(this.state.ab3_dlow, this.state.ab3_dhigh);
            atkName = this.state.ab3_name;
            atkColor = this.state.ab3_color;

            if (diceRoll >= 100 - (this.state.ab3_crit * 100)) {
                atkDamage += Math.floor(atkDamage * 0.25);
                atkCrit = 1;
            } else if (diceRoll <= this.state.ab3_fail * 100) {
                atkDamage -= Math.floor(atkDamage * 0.4);
                atkFail = 1;
            }
        }

        var newDamage = this.state.inact_hp - atkDamage;
        console.log("I did " + atkDamage + ". They now have " + newDamage + ". c" + atkCrit + ". f" +atkFail)

        this.setState({
            inact_hp: newDamage
        })

        if (this.state.inact_hp <= 0) {
            this.fightEnd("victory");
        } else {
            this.inactiveAttack();
        }

    }

    inactiveAttack = () => {
        var randAttack = this.state.inact_attacks[Math.floor(Math.random() * this.state.inact_attacks.length)];

        var diceRoll = Math.floor(Math.random() * 100) + 1;

        var atkName = "";
        var atkColor = "";
        var atkDamage = 0;
        var atkCrit = 0;
        var atkFail = 0;

        if (randAttack == "1") {
            atkDamage = this.getRandomInteger(this.props.storeData.ab1_dlow, this.props.storeData.ab1_dhigh);
            atkName = this.props.storeData.ab1_name;
            atkColor = this.props.storeData.ab1_color;

            if (diceRoll >= 100 - (this.props.storeData.ab1_crit * 100)) {
                atkDamage += Math.floor(atkDamage * 0.25);
                atkCrit = 1;
            } else if (diceRoll <= this.props.storeData.ab1_fail * 100) {
                atkDamage -= Math.floor(atkDamage * 0.4);
                atkFail = 1;
            }

        } else if (randAttack == "2") {
            atkDamage = this.getRandomInteger(this.props.storeData.ab2_dlow, this.props.storeData.ab2_dhigh);
            atkName = this.props.storeData.ab2_name;
            atkColor = this.props.storeData.ab2_color;

            if (diceRoll >= 100 - (this.props.storeData.ab2_crit * 100)) {
                atkDamage += Math.floor(atkDamage * 0.25);
                atkCrit = 1;
            } else if (diceRoll <= this.props.storeData.ab2_fail * 100) {
                atkDamage -= Math.floor(atkDamage * 0.4);
                atkFail = 1;
            }

        } else if (randAttack == "3") {
            atkDamage = this.getRandomInteger(this.props.storeData.ab3_dlow, this.props.storeData.ab3_dhigh);
            atkName = this.props.storeData.ab3_name;
            atkColor = this.props.storeData.ab3_color;

            if (diceRoll >= 100 - (this.props.storeData.ab3_crit * 100)) {
                atkDamage += Math.floor(atkDamage * 0.25);
                atkCrit = 1;
            } else if (diceRoll <= this.props.storeData.ab3_fail * 100) {
                atkDamage -= Math.floor(atkDamage * 0.4);
                atkFail = 1;
            }
        }

        var newDamage = this.state.act_hp - atkDamage;
        console.log("they did " + atkDamage + ". I now have " + newDamage + ". c" + atkCrit + ". f" +atkFail)

        this.setState({
            act_hp: newDamage
        })

        if (this.state.act_hp <= 0) {
            this.fightEnd("defeat");
        } else {
            this.activeAttack();
        }

    }

    fightEnd = (outcome) => {
        console.log("Outcome: "+outcome)
        this.setState({
            outcome: outcome
        })
    }

    render() {
        return (
            <div className="container">
                <div className="box fight-box">

                    <div className="player-bar">

                        <div className="profile-pic opponent-pic">
                            <div className="profile-picture profile-picture-choose" style={{ backgroundImage: "url(" + this.state.profile_pic + ")", backgroundSize: "cover" }}></div>
                        </div>
                        <div className="opponent-stats">
                            <div className="opponent-stats-bar">{this.state.char_name}</div>
                            <div className="opponent-stats-bar">
                                <div>{this.state.inact_hp_base}</div>
                                <div>{this.state.lvl}</div>
                                <div>{this.state.fame}</div>
                            </div>
                        </div>

                    </div>

                    <div className="fighting-bar">

                        <div className="fight-build-box">
                            <p>hi</p>
                            <p>hi</p>
                            <p>hi</p>
                            <p>hi</p>
                        </div>

                        <div className="fight-fade-top"></div>
                        <div className="fight-fade-bottom"></div>

                        <div className="fight-bar-text"></div>

                        <div className="fight-speed-buttons">

                            <div className="fight-speed-bar">
                                <div className="fight-speed-up">speed up</div>
                            </div>
                            <div className="fight-speed-bar">
                                <div className="fight-finish" onClick={() => this.props.setPageName("FightResults")}>finish</div>
                            </div>

                        </div>

                    </div>

                    <div className="player-bar">

                        <div className="profile-pic opponent-pic">
                            <div className="profile-picture profile-picture-choose" style={{ backgroundImage: "url(" + this.props.storeData.profile_pic + ")", backgroundSize: "cover" }}></div>
                        </div>
                        <div className="opponent-stats">
                            <div className="opponent-stats-bar">{this.props.storeData.char_name}</div>
                            <div className="opponent-stats-bar">
                                <div>{this.props.storeData.hp} hp</div>
                                <div>{this.props.storeData.lvl} lvl</div>
                                <div>{this.props.storeData.fame} fame</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Fight);