import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';

import "./Fight.css";

class Fight extends Component {

    state = {
        inactivePlayer: "that",
        activeHP: 0,
        activeRaffle: [],
        inactiveRaffle: []
    };

    // componentDidMount = () => {
    //     axios.get('/api/selectone')
    //         .then(function (response) {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // };

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
                            <div className="profile-picture profile-picture-choose"></div>
                        </div>
                        <div className="opponent-stats">
                            <div className="opponent-stats-bar">wada</div>
                            <div className="opponent-stats-bar">
                                <div>awd</div>
                                <div>awd</div>
                                <div>awd</div>
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
                            <div className="profile-picture profile-picture-choose"></div>
                        </div>
                        <div className="opponent-stats">
                            <div className="opponent-stats-bar">wada</div>
                            <div className="opponent-stats-bar">
                                <div>awd</div>
                                <div>awd</div>
                                <div>awd</div>
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