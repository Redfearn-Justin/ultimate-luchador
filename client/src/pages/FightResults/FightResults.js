import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';

import "./FightResults.css";

class FightResults extends Component {

    homeButton = () => {
        //if enough exp to levelup, send to levelup component. else...
        this.props.setPageName("LevelUp");
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

                    <div className="results-text-bar results-victory-text">victory</div>

                    <div className="results-info-bar">
                        <div className="results-player-bar">
                            <div className="results-player-pic">
                                <div className="results-pic"></div>
                            </div>
                            <div className="results-player-stats">stats</div>
                            <div className="results-player-stats">stats</div>
                            <div className="results-player-stats mb">stats</div>
                        </div>
                        <div className="results-vs-bar">vs</div>
                        <div className="results-player-bar">
                            <div className="results-player-pic">
                                <div className="results-pic"></div>
                            </div>
                            <div className="results-player-stats">stats</div>
                            <div className="results-player-stats">stats</div>
                            <div className="results-player-stats mb">stats</div>
                        </div>
                    </div>

                    <div className="results-stats-bar">
                        <div className="results-stats-stats">
                            <div className="results-stats-single-stat">fame: +10</div>
                            <div className="results-stats-single-stat">exp: +5</div>
                        </div>
                        <div className="results-stats-home">
                            <div className="button" onClick={this.homeButton}>home</div>
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