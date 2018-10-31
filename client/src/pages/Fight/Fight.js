import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';

import axios from "axios";

import "./Fight.css";

class Fight extends Component {

    state = {
        this: "that"
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

    render() {
        return (
            <div className="container">
                <div className="box fight-box">

                    <div className="player-bar">

                        <div className="profile-pic opponent-pic">
                            <div className="profile-picture"></div>
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
                                <div className="fight-finish">finish</div>
                            </div>

                        </div>

                    </div>

                    <div className="player-bar">

                        <div className="profile-pic opponent-pic">
                            <div className="profile-picture"></div>
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