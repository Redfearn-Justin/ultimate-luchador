import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';

import axios from "axios";

import "./LevelUp.css";

class LevelUp extends Component {

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

                    <div className="results-text-bar results-victory-text">level up!</div>

                    <div className="levelup-stats-bar">
                        <div className="levelup-stat">stats</div>
                        <div className="levelup-stat">stats</div>
                        <div className="levelup-stat">stats</div>
                        <div className="levelup-stat">stats</div>
                    </div>

                    <div className="levelup-home-bar">
                        <div className="button" onClick={() => this.props.setPageName("Home")}>home</div>
                    </div>

                </div>
            </div>
        );
    };

};

const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(LevelUp);