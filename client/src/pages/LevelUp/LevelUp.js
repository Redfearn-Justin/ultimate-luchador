import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';

import axios from "axios";

import "./LevelUp.css";

class LevelUp extends Component {

    state = {
        newExp: 0,
        newLvl: 0,
        newTicketsMax: 0,
        newHp: 0
    }

    componentDidMount = () => {
        var hpGain = this.getRandomInteger(2, 4)

        this.setState({
            newLvl: this.props.storeData.lvl += 1,
            newTicketsMax: this.props.storeData.tickets_max += 1,
            newHp: this.props.storeData.hp += hpGain,
        });

        // this.props.levelUp(this.state.newExp, this.state.newLvl, this.state.newHp, this.state.newTicketsMax);

        // console.log(this.state.newLvl, this.state.newHp);
        // console.log("========")
        // console.log(this.props.storeData.lvl, this.props.storeData.hp)

        // axios.put('/api/levelUp/', {lvl: this.state.newLvl, hp: this.state.newHp, exp: this.state.newExp, tickets_max: this.state.newTicketsMax, id: this.props.storeData.id})
        // .then(response => {
        //    console.log(response);
        // })
        // .catch(error => {
        //     console.log(error);
        // });

        this.next();
    }

    next = () => {
        console.log(this.state.newLvl, this.state.newHp);
        console.log("========")
        console.log(this.props.storeData.lvl, this.props.storeData.hp)
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
                        <div className="levelup-stat">{this.state.newExp}</div>
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