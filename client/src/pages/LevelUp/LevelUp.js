import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';

import axios from "axios";

import "./LevelUp.css";

class LevelUp extends Component {

    state = {
        newLvl: 0,
        newTicketsMax: 0,
        newHp: 0
    }

    componentDidMount = () => {
        var hpGain = this.getRandomInteger(2, 4)

        var newLvl = this.props.storeData.lvl += 1;
        var newTicketsMax = this.props.storeData.tickets_max += 1;
        var newHp = this.props.storeData.hp += hpGain;
        var newRefresh = this.props.storeData.refresh += 1;

        this.setState({
            newLvl: newLvl,
            newTicketsMax: newTicketsMax,
            newHp: newHp
        });

        this.props.levelUp(0, newLvl, newHp, newTicketsMax, newRefresh);

        axios.put('/api/levelUp/', {lvl: newLvl, hp: newHp, exp: 0, tickets_max: newTicketsMax, refresh: newRefresh, id: this.props.storeData.id})
        .then(response => {
           console.log(response);
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

    render() {
        return (
            <div className="container">
                <div className="box fight-box">

                    <div className="results-text-bar results-victory-text">level up!</div>

                    <div className="levelup-stats-bar">
                        <div className="levelup-stat">level {this.state.newLvl}</div>
                        <div className="levelup-stat">hp: {this.state.newHp}</div>
                        <div className="levelup-stat">tickets: {this.state.newTicketsMax}</div>
                        <div className="levelup-stat">0</div>
                    </div>

                    <div className="levelup-home-bar">
                        <div className="button" onClick={() => this.props.setPageName("NewAbility")}>new ability</div>
                    </div>

                </div>
            </div>
        );
    };

};

const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(LevelUp);