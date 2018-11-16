//Imports
//=================================================
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';
import axios from "axios";
import "./LevelUp.css";

//Class
//===============================================
class LevelUp extends Component {

    state = {
        newLvl: 0,
        newTicketsMax: 0,
        newHp: 0,
        hpGain: 0
    };

    componentDidMount = () => {
        // Rolls for new stats
        let hpGain = this.getRandomInteger(2, 4)

        let newLvl = this.props.storeData.lvl += 1;
        let newTicketsMax = this.props.storeData.tickets_max += 1;
        let newHp = this.props.storeData.hp += hpGain;
        let newRefresh = this.props.storeData.refresh += 1;

        this.setState({
            newLvl: newLvl,
            newTicketsMax: newTicketsMax,
            newHp: newHp,
            hpGain: hpGain
        });

        this.props.levelUp(0, newLvl, newHp, newTicketsMax, newRefresh);

        // Push the new stats to the player's db
        axios.put('/api/levelUp/', {lvl: newLvl, hp: newHp, exp: 0, tickets_max: newTicketsMax, refresh: newRefresh, id: this.props.storeData.id})
        .then(response => {
        })
        .catch(error => {
            console.log(error);
        });
    };

    getRandomInteger = (min, max) => {
        // Returns a random integer between min - max
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    render() {
        return (
            <div className="container">
                <div className="box fight-box">

                    {/* FLEX ROW */}
                    <div className="results-text-bar results-victory-text">level up!</div>

                    {/* FLEX ROW */}
                    <div className="levelup-stats-bar">
                        <div className="levelup-stat"><span><img alt="icon" src="./images/lvl.svg" style={{ height: "25px", position: "relative", top: "2px", marginRight: "5px" }} />{this.state.newLvl}</span></div>
                        <div className="levelup-stat"><span><img alt="icon" src="./images/heart.svg" style={{ height: "25px", position: "relative", top: "2px", marginRight: "5px" }} />+{this.state.hpGain}</span></div>
                        <div className="levelup-stat"><span><img alt="icon" src="./images/ticket.svg" style={{ height: "25px", position: "relative", top: "2px", marginRight: "5px" }}/>+1</span></div>
                        <div className="levelup-stat" style={{ color: "blue" }}>+1 refill</div>
                        <div className="levelup-stat" style={{ color: "blue" }}>+full tickets</div>
                    </div>

                    {/* FLEX ROW */}
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