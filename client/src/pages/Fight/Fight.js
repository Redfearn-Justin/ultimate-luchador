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
        hp: 0,
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
        ab3_color: ""
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
                    hp: dataArray.hp,
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
            })
            .catch(error => {
                console.log(error);
            });
    };

    fightLogic = () => {
        // 1) put inactive player's info in this file's state (name, image, hp, level, fame, ability info)
        //      > also the active player's HP 
        // 2) build 'raffle' arrays for both player's ability speed (5, 5, 5, 5, 5, 3, 3, 3, 1)
        // 3) active player fights, then inactive, back and forth til one dies
        //      > picks an attack
        //      > rolls for damage/crit/miss
        //      > picks text for attack
        //      > reduces opp HP and checks if theyve won
        //      > if so, go to victory screen - if not, next turn
    };

    fightEnd = (outcome) => {
        // * outcome will be passed in, either 'victory' or 'defeat'
        // 1) calculate stat change
        // 2) sql query to change stats
        // 3) send with info to next page
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
                                <div>{this.state.hp}</div>
                                <div>{this.state.lvl}</div>
                                <div>{this.state.fame}</div>
                            </div>
                        </div>

                    </div>

                    <div className="fighting-bar">

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