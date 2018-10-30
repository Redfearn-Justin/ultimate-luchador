import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';

import axios from "axios";

import "./ChooseOpponent.css";

class ChooseOpponent extends Component {

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
                <div className="box opponent-box">

                    <div className="text-bar">choose your opponent</div>

                    <div className="opponent-bar">

                        <div className="opponent" onClick={() => this.props.setPageName("Fight")}>
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

                        <div className="opponent" onClick={() => this.props.setPageName("Fight")}>
                            <div className="profile-pic opponent-pic">
                                <div className="profile-picture"></div>
                            </div>
                            <div className="opponent-stats">
                                <div className="opponent-stats-bar">wad</div>
                                <div className="opponent-stats-bar">
                                    <div>awd</div>
                                    <div>awd</div>
                                    <div>awd</div>
                                </div>
                            </div>
                        </div>

                        <div className="opponent" onClick={() => this.props.setPageName("Fight")}>
                            <div className="profile-pic opponent-pic">
                                <div className="profile-picture"></div>
                            </div>
                            <div className="opponent-stats">
                                <div className="opponent-stats-bar">wad</div>
                                <div className="opponent-stats-bar">
                                    <div>wad</div>
                                    <div>wad</div>
                                    <div>wad</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="opponent-button-bar">
                        <div className="opponent-button-back" onClick={() => this.props.setPageName("Home")}>
                            <div>back</div>
                        </div>
                        <div className="opponent-button-refresh">
                            <div>refresh - 6</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    };

};

const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(ChooseOpponent);