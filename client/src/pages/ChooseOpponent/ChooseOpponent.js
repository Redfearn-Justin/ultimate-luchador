import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';

import "./ChooseOpponent.css";

class ChooseOpponent extends Component {

    render() {
        return (
            <div className="container">
                <div className="box opponent-box">

                    <div className="text-bar">choose your opponent</div>

                    <div className="opponent-bar">

                        <div className="opponent" onClick={() => this.props.setPageName("Fight")}>
                            <div className="profile-pic opponent-pic">
                                <div className="profile-picture profile-picture-choose"></div>
                            </div>
                            <div className="opponent-stats">
                                <div className="opponent-stats-bar"><span>thisguy</span></div>
                                <div className="opponent-stats-bar">
                                    <div>awd</div>
                                    <div>awd</div>
                                    <div>awd</div>
                                </div>
                            </div>
                        </div>

                        <div className="opponent" onClick={() => this.props.setPageName("Fight")}>
                            <div className="profile-pic opponent-pic">
                                <div className="profile-picture profile-picture-choose"></div>
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
                                <div className="profile-picture profile-picture-choose"></div>
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
                            <div>Reroll: {this.props.storeData.tickets}</div>
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