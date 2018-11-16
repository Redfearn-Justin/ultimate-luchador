import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';
import axios from "axios";

import FightText from "../../components/FightText";

import "./Fight.css";

class Fight extends Component {

    state = {
        id: "",
        npc: "",
        char_name: "",
        profile_pic: "",
        lvl: 0,
        fame: 0,
        wins: 0,
        losses: 0,
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
        ab1_icon: "",
        ab2_name: "",
        ab2_dlow: 1,
        ab2_dhigh: 2,
        ab2_speed: 5,
        ab2_crit: 1,
        ab2_fail: 1,
        ab2_color: "",
        ab2_icon: "",
        ab3_name: "",
        ab3_dlow: 1,
        ab3_dhigh: 2,
        ab3_speed: 5,
        ab3_crit: 1,
        ab3_fail: 1,
        ab3_color: "",
        ab3_icon: "",
        act_attacks: [],
        inact_attacks: [],
        outcome: "",
        textCss: "",
        divArray: [],
        arrayId: 0,
        newTrans: "0s linear",
        newBottom: 0,
        display: "block"
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
                    wins: dataArray.wins,
                    losses: dataArray.losses,
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
                    ab1_icon: dataArray.ab1_icon,
                    ab2_name: dataArray.ab2_name,
                    ab2_dlow: dataArray.ab2_dlow,
                    ab2_dhigh: dataArray.ab2_dhigh,
                    ab2_speed: dataArray.ab2_speed,
                    ab2_crit: dataArray.ab2_crit,
                    ab2_fail: dataArray.ab2_fail,
                    ab2_color: dataArray.ab2_color,
                    ab2_icon: dataArray.ab2_icon,
                    ab3_name: dataArray.ab3_name,
                    ab3_dlow: dataArray.ab3_dlow,
                    ab3_dhigh: dataArray.ab3_dhigh,
                    ab3_speed: dataArray.ab3_speed,
                    ab3_crit: dataArray.ab3_crit,
                    ab3_fail: dataArray.ab3_fail,
                    ab3_color: dataArray.ab3_color,
                    ab3_icon: dataArray.ab3_icon,
                    divArray: [],
                    arrayId: 0
                });
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

        this.chooseAttack();
    }

    chooseAttack = () => {
        const flip = Math.floor(Math.random() * 2) + 1

        if (flip === 1) {
            this.activeAttack();
        } else if (flip === 2) {
            this.inactiveAttack();
        } else {
            alert("shit is bugged yo")
        }
    }

    commPreface = () => {
        var array = ["the force is strong with this one...", "woah!", "holy moley guacamole,", "ka pow!!", "watch out,", "here comes the boom!", "ready or not", "this could get ulgy,", "incoming!!", "coming in hot -", "cover your eyes, folks,", "holy shit!", "look out!", "woah, is that..?!", "I can't believe what I'm seeing", "okay, so", "well then", "I couldn't care less, but", "the smelly", "the heroic", "the oddly shaped", "the mean", "the effectionate lover", "the underdog", "holy cow!", "did you see that, chuck?!", "chuck, look!", "folks if you look closely"];
        var comm = array[Math.floor(Math.random()*array.length)];
        return comm;
    }

    commDescription = () => {
        var array = ["used the attack", "used the move", "used", "pummeled their opponent with", "shook the floor with", "exploded the nips of the audience with a", "shit the bed with their signiture move,", "broke every record with a", "swept the floor with a", "took their opponent to church with the", "let their opponent have it with", "silenced the audience with", "aligned the planets with the", "cleaned their opponent's clock with a", "made their opponent see stars with", "woke the dead with the", "committed a hate crime with", "used their favorite move", "came flying in with a", "smashed even innocent bystanders with a", "plowed ur granny with the", "brought peace to the middle east with the", "popped their opponent with", "pulled the classic", "threw the ol'", "gave 'em the ol'", "pulled out all the stops with the", "knocked the living crap out of 'em with a", "went to the moon and back for that hit with the", "just went out doing the most with a", "just broke their opponent's ankles with", "successfully smashed with", "looked like a fool out there with the", "with the delivery using", "swang with a", "hit with the", "pummeled bootie with the", "smacked ass with a"];
        var comm = array[Math.floor(Math.random()*array.length)];
        return comm;
    }

    commQuip = () => {
        var array = ["DO YOU BELIEVE IN MIRACLES!? YES!", "Well butter my bottom and call me a biscuit!", "Ladies and gentlemen, you just witnessed history.", "Ouchtown, population you, bro!", "Ladies and gentlemen, I have been to the Great Wall of China, I have seen the Pyramids of Egypt, But never in all my years as a sportscaster have I witnessed something as improbable, as impossible, as what we've witnessed here today!", "Cotton McKnight and Pepper Brooks approve approve of this.", "How in the world did they bang it out like that?!", "Pepper needs new shorts!", "What did we just witness?! the only logical explanation is divine intervention.", "I've seen my grandma hit harder, chuck.", "that move stirred something deep in my loins, chuck.", "chuck!! did that just happen?!", "that move will have his orifices leaking for a week!", "did his shoe just come off, chuck?", "is that what I think it is?! oh, nevermind.", "I'm gonna need new underwear after that one!", "I heard he learned that move in 'nam, chuck."];
        var comm = array[Math.floor(Math.random()*array.length)];
        return comm;
    }

    inactiveAttack = () => {
        var randAttack = this.state.inact_attacks[Math.floor(Math.random() * this.state.inact_attacks.length)];

        var diceRoll = Math.floor(Math.random() * 100) + 1;
        var diceQuip = Math.floor(Math.random() * 100) + 1;

        var atkName = "";
        var atkColor = "";
        var atkDamage = 0;
        var atkCrit = "";
        var atkFail = "";
        var commPreface = this.commPreface();
        var commDescription = this.commDescription();
        var commQuip = "";

        if (diceQuip >= 90) {
            commQuip = this.commQuip();
        }

        if (randAttack === "1") {
            atkDamage = this.getRandomInteger(this.state.ab1_dlow, this.state.ab1_dhigh);
            atkName = this.state.ab1_name;
            atkColor = this.state.ab1_color;

            if (diceRoll >= 100 - (this.state.ab1_crit * 100)) {
                atkDamage += Math.floor(atkDamage * 0.3);
                atkCrit = "crit! ";
            } else if (diceRoll <= this.state.ab1_fail * 100) {
                atkDamage -= Math.floor(atkDamage * 0.5);
                atkFail = "slip! ";
            }

        } else if (randAttack === "2") {
            atkDamage = this.getRandomInteger(this.state.ab2_dlow, this.state.ab2_dhigh);
            atkName = this.state.ab2_name;
            atkColor = this.state.ab2_color;

            if (diceRoll >= 100 - (this.state.ab1_crit * 100)) {
                atkDamage += Math.floor(atkDamage * 0.3);
                atkCrit = "crit! ";
            } else if (diceRoll <= this.state.ab1_fail * 100) {
                atkDamage -= Math.floor(atkDamage * 0.5);
                atkFail = "slip! ";
            }

        } else if (randAttack === "3") {
            atkDamage = this.getRandomInteger(this.state.ab3_dlow, this.state.ab3_dhigh);
            atkName = this.state.ab3_name;
            atkColor = this.state.ab3_color;

            if (diceRoll >= 100 - (this.state.ab1_crit * 100)) {
                atkDamage += Math.floor(atkDamage * 0.3);
                atkCrit = "crit! ";
            } else if (diceRoll <= this.state.ab1_fail * 100) {
                atkDamage -= Math.floor(atkDamage * 0.5);
                atkFail = "slip! ";
            }
        }

        var newDamage = this.state.act_hp - atkDamage;

        var dr = Math.floor(Math.random() * 7) + 1;

        var pObject = {
            who: "hp remaining",
            results_color: "rgb(0, 194, 42)",
            text_shadow: "rgb(253, 48, 55)",
            dr: dr,
            id: this.state.arrayId,
            dmg: atkDamage,
            hp_left: newDamage,
            crit: atkCrit,
            fail: atkFail,
            name: this.state.char_name,
            ab_name: atkName,
            ab_color: atkColor,
            commPreface: commPreface,
            commDescription: commDescription,
            commQuip: commQuip
        }

        this.setState({
            act_hp: newDamage,
            divArray: [...this.state.divArray, { obj: pObject }],
            arrayId: this.state.arrayId += 1
        })

        if (this.state.act_hp <= 0) {
            this.fightEnd("defeat", "results-defeat-text");
        } else {
            this.activeAttack();
        }

    }

    activeAttack = () => {
        var randAttack = this.state.act_attacks[Math.floor(Math.random() * this.state.act_attacks.length)];

        var diceRoll = Math.floor(Math.random() * 100) + 1;
        var diceQuip = Math.floor(Math.random() * 100) + 1;

        var atkName = "";
        var atkColor = "";
        var atkDamage = 0;
        var atkCrit = "";
        var atkFail = "";
        var commPreface = this.commPreface();
        var commDescription = this.commDescription();
        var commQuip = "";

        if (diceQuip >= 90) {
            commQuip = this.commQuip();
        }

        if (randAttack === "1") {
            atkDamage = this.getRandomInteger(this.props.storeData.ab1_dlow, this.props.storeData.ab1_dhigh);
            atkName = this.props.storeData.ab1_name;
            atkColor = this.props.storeData.ab1_color;

            if (diceRoll >= 100 - (this.state.ab1_crit * 100)) {
                atkDamage += Math.floor(atkDamage * 0.3);
                atkCrit = "crit! ";
            } else if (diceRoll <= this.state.ab1_fail * 100) {
                atkDamage -= Math.floor(atkDamage * 0.5);
                atkFail = "slip! ";
            }

        } else if (randAttack === "2") {
            atkDamage = this.getRandomInteger(this.props.storeData.ab2_dlow, this.props.storeData.ab2_dhigh);
            atkName = this.props.storeData.ab2_name;
            atkColor = this.props.storeData.ab2_color;

            if (diceRoll >= 100 - (this.state.ab1_crit * 100)) {
                atkDamage += Math.floor(atkDamage * 0.3);
                atkCrit = "crit! ";
            } else if (diceRoll <= this.state.ab1_fail * 100) {
                atkDamage -= Math.floor(atkDamage * 0.5);
                atkFail = "slip! ";
            }

        } else if (randAttack === "3") {
            atkDamage = this.getRandomInteger(this.props.storeData.ab3_dlow, this.props.storeData.ab3_dhigh);
            atkName = this.props.storeData.ab3_name;
            atkColor = this.props.storeData.ab3_color;

            if (diceRoll >= 100 - (this.state.ab1_crit * 100)) {
                atkDamage += Math.floor(atkDamage * 0.3);
                atkCrit = "crit! ";
            } else if (diceRoll <= this.state.ab1_fail * 100) {
                atkDamage -= Math.floor(atkDamage * 0.5);
                atkFail = "slip! ";
            }
        }

        var newDamage = this.state.inact_hp - atkDamage;

        var dr = Math.floor(Math.random() * 7) + 1;

        var pObject = {
            who: "left to deal",
            results_color: "rgb(253, 48, 55)",
            text_shadow: "rgb(0, 194, 42)",
            dr: dr,
            id: this.state.arrayId,
            dmg: atkDamage,
            hp_left: newDamage,
            crit: atkCrit,
            fail: atkFail,
            name: this.props.storeData.char_name,
            ab_name: atkName,
            ab_color: atkColor,
            commPreface: commPreface,
            commDescription: commDescription,
            commQuip: commQuip
        }

        this.setState({
            inact_hp: newDamage,
            divArray: [...this.state.divArray, { obj: pObject }],
            arrayId: this.state.arrayId += 1
        })

        if (this.state.inact_hp <= 0) {
            this.fightEnd("victory", "results-victory-text");
        } else {
            this.inactiveAttack();
        }

    }

    setTransition = () => {
        var offsetHeight = document.getElementById("fight-build-box-id").offsetHeight;
        var passTrans = "";

        if (this.state.newTrans === "0s linear") {
            if (offsetHeight <= 1200) {
                passTrans = "40s linear"
            } else if (offsetHeight > 1200 && offsetHeight <= 1500) {
                passTrans = "45s linear"
            } else if (offsetHeight > 1500 && offsetHeight <= 1800) {
                passTrans = "50s linear"
            } else if (offsetHeight > 1800 && offsetHeight <= 2100) {
                passTrans = "55s linear"
            } else if (offsetHeight > 2100 && offsetHeight <= 2400) {
                passTrans = "60s linear"
            } else if (offsetHeight > 2400 && offsetHeight <= 2700) {
                passTrans = "65s linear"
            } else if (offsetHeight > 2700 && offsetHeight <= 3000) {
                passTrans = "70s linear"
            } else if (offsetHeight > 3000 && offsetHeight <= 3300) {
                passTrans = "75s linear"
            } else if (offsetHeight > 3300 && offsetHeight <= 3600) {
                passTrans = "80s linear"
            } else if (offsetHeight > 3600 && offsetHeight <= 3900) {
                passTrans = "85s linear"
            } else if (offsetHeight > 3900 && offsetHeight <= 4200) {
                passTrans = "90s linear"
            } else if (offsetHeight > 4200 && offsetHeight <= 4500) {
                passTrans = "95s linear"
            } else if (offsetHeight > 4500) {
                passTrans = "100s linear"
            }

            this.setState({
                newTrans: passTrans,
            })
            this.setBottom();
        }
    }

    setBottom = () => {
        this.setState({
            newBottom: "0px",
        })
    }

    fightEnd = (outcome, textCss) => {
        var offsetHeight = document.getElementById("fight-build-box-id").offsetHeight;
        var initPosition = offsetHeight - 250;

        this.setState({
            outcome: outcome,
            textCss: textCss,
            newBottom: "-" + initPosition + "px",
            display: "none"
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
                            <div className="opponent-stats-bar fight-name">{this.state.char_name}</div>
                            <div className="opponent-stats-bar">
                                <div>
                                    <div className="newab-new-pic home-ability-pic" style={{ backgroundColor: this.state.ab1_color, marginLeft: "0", width: "96%" }}>
                                        <img className="fight-icon-img" alt="zap" src={this.state.ab1_icon} />
                                        <span className="speed-indicator">{this.state.ab1_speed}</span>
                                        <span className="dmg-indicator">{this.state.ab1_dlow}-{this.state.ab1_dhigh}</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="newab-new-pic home-ability-pic" style={{ backgroundColor: this.state.ab2_color, marginLeft: "0", width: "96%" }}>
                                        <img className="fight-icon-img" alt="zap" src={this.state.ab2_icon} />
                                        <span className="speed-indicator">{this.state.ab2_speed}</span>
                                        <span className="dmg-indicator">{this.state.ab2_dlow}-{this.state.ab2_dhigh}</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="newab-new-pic home-ability-pic" style={{ backgroundColor: this.state.ab3_color, marginLeft: "0", width: "96%" }}>
                                        <img className="fight-icon-img" alt="zap" src={this.state.ab3_icon} />
                                        <span className="speed-indicator">{this.state.ab3_speed}</span>
                                        <span className="dmg-indicator">{this.state.ab3_dlow}-{this.state.ab3_dhigh}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="fighting-bar">

                        <div className="fight-loading" style={{ display: this.state.display }}><span style={{ position: "relative", top: "40%", fontSize: "2rem" }}>Loading</span></div>

                        <div id="fight-build-box-id" className="fight-build-box" style={{ position: "absolute", bottom: this.state.newBottom, transition: this.state.newTrans }}>
                            <p className="fight-finish-text" style={{ marginBottom: "140px" }}>fight!</p>
                            {this.state.divArray.map(p => (
                                <FightText
                                    id={p.obj.id}
                                    key={p.obj.id}
                                    dmg={p.obj.dmg}
                                    hp_left={p.obj.hp_left}
                                    crit={p.obj.crit}
                                    fail={p.obj.fail}
                                    name={p.obj.name}
                                    ab_name={p.obj.ab_name}
                                    ab_color={p.obj.ab_color}
                                    dr={p.obj.dr}
                                    text_shadow={p.obj.text_shadow}
                                    results_color={p.obj.results_color}
                                    who={p.obj.who}
                                    commPreface={p.obj.commPreface}
                                    commDescription={p.obj.commDescription}
                                    commQuip={p.obj.commQuip}
                                />
                            ))}
                            <p className="fight-finish-text" style={{ marginBottom: "140px" }}>finished!</p>
                        </div>

                        <div className="fight-fade-top"></div>
                        <div className="fight-fade-bottom"></div>

                        <div className="fight-bar-text"></div>

                        <div className="fight-speed-buttons">

                            <div className="fight-speed-bar">
                                <div className="fight-start" onClick={() => this.setTransition()}>start</div>
                            </div>
                            <div className="fight-speed-bar">
                                <div className="fight-finish" onClick={() => this.props.fightResults("FightResults", this.state.outcome, this.state.textCss, this.state.id)}>finish</div>
                            </div>

                        </div>

                    </div>

                    <div className="player-bar">

                        <div className="profile-pic opponent-pic">
                            <div className="profile-picture profile-picture-choose" style={{ backgroundImage: "url(" + this.props.storeData.profile_pic + ")", backgroundSize: "cover" }}></div>
                        </div>
                        <div className="opponent-stats">
                            <div className="opponent-stats-bar fight-name">{this.props.storeData.char_name}</div>
                            <div className="opponent-stats-bar">
                                <div>
                                    <div className="newab-new-pic home-ability-pic" style={{ backgroundColor: this.props.storeData.ab1_color, marginLeft: "0", width: "96%" }}>
                                        <img className="fight-icon-img" alt="zap" src={this.props.storeData.ab1_icon} />
                                        <span className="speed-indicator">{this.props.storeData.ab1_speed}</span>
                                        <span className="dmg-indicator">{this.props.storeData.ab1_dlow}-{this.props.storeData.ab1_dhigh}</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="newab-new-pic home-ability-pic" style={{ backgroundColor: this.props.storeData.ab2_color, marginLeft: "0", width: "96%" }}>
                                        <img className="fight-icon-img" alt="zap" src={this.props.storeData.ab2_icon} />
                                        <span className="speed-indicator">{this.props.storeData.ab2_speed}</span>
                                        <span className="dmg-indicator">{this.props.storeData.ab2_dlow}-{this.props.storeData.ab2_dhigh}</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="newab-new-pic home-ability-pic" style={{ backgroundColor: this.props.storeData.ab3_color, marginLeft: "0", width: "96%" }}>
                                        <img className="fight-icon-img" alt="zap" src={this.props.storeData.ab3_icon} />
                                        <span className="speed-indicator">{this.props.storeData.ab3_speed}</span>
                                        <span className="dmg-indicator">{this.props.storeData.ab3_dlow}-{this.props.storeData.ab3_dhigh}</span>
                                    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Fight);