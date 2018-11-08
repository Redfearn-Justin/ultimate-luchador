import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';

import "./NewAbility.css";

class NewAbility extends Component {

    state = {
        newName: "x",
        newDlow: 1,
        newDhigh: 2,
        newSpeed: 3,
        newCrit: 0.4,
        newColor: "#",
        newIcon: "X"
    }
    
    componentDidMount = () => {
       // create new ability
       // log it to state
    };

    render() {
        return (
            <div className="container">
                <div className="box fight-box">

                    {/* Text bar */}
                    <div className="results-text-bar results-defeat-text newab-text">new ability</div>

                    {/* New ability bar */}
                    <div className="newab-new-ability-bar">
                        <div className="newab-new-pic-bar">
                            <div className="newab-new-pic">XXX</div>
                        </div>
                        <div className="newab-new-stats-bar">
                            <div className="newab-new-stats-text">
                                <input></input>
                            </div>
                            <div className="newab-new-stats-stats-bar">
                                <div className="newab-new-stats-dmg">10-12<img alt="icon" src="./images/icon_sword.svg" /></div>
                                <div className="newab-new-stats-speed">4<img alt="icon" src="./images/icon_speed.svg" /></div>
                                <div className="newab-new-stats-crit">11%<img alt="icon" src="./images/icon_crit.svg" /></div>
                            </div>
                        </div>
                    </div>

                    {/* Old ability bar */}
                    <div className="newab-old-ability-bar">
                        <div className="newab-old-ability-text results-defeat-text">replace an ability:</div>
                        <div className="newab-old-ability-abilities">

                            {/* Old ability 1 */}
                            <div className="newab-old-ability" onClick={() => this.props.setPageName("Home")}>
                                <div className="newab-new-pic-bar">
                                    <div className="newab-new-pic" style={{backgroundColor: this.props.storeData.ab1_color}}>
                                        <img className="ability-icon-size" alt="zap" src={this.props.storeData.ab1_icon} />
                                    </div>
                                </div>
                                <div className="newab-new-stats-bar">
                                    <div className="newab-new-stats-text">
                                        <span>{this.props.storeData.ab1_name}</span>
                                    </div>
                                    <div className="newab-new-stats-stats-bar">
                                        <div className="newab-new-stats-dmg">{this.props.storeData.ab1_dlow}-{this.props.storeData.ab1_dhigh}<img alt="icon" src="./images/icon_sword.svg" /></div>
                                        <div className="newab-new-stats-speed">{this.props.storeData.ab1_speed}/5<img alt="icon" src="./images/icon_speed.svg" /></div>
                                        <div className="newab-new-stats-crit">{this.props.storeData.ab1_crit * 100}%<img alt="icon" src="./images/icon_crit.svg" /></div>
                                    </div>
                                </div>
                            </div>

                            {/* Old ability 2 */}
                            <div className="newab-old-ability" onClick={() => this.props.setPageName("Home")}>
                                <div className="newab-new-pic-bar">
                                    <div className="newab-new-pic" style={{backgroundColor: this.props.storeData.ab2_color}}>
                                        <img className="ability-icon-size" alt="zap" src={this.props.storeData.ab2_icon} />
                                    </div>
                                </div>
                                <div className="newab-new-stats-bar">
                                    <div className="newab-new-stats-text">
                                        <span>{this.props.storeData.ab2_name}</span>
                                    </div>
                                    <div className="newab-new-stats-stats-bar">
                                        <div className="newab-new-stats-dmg">{this.props.storeData.ab2_dlow}-{this.props.storeData.ab2_dhigh}<img alt="icon" src="./images/icon_sword.svg" /></div>
                                        <div className="newab-new-stats-speed">{this.props.storeData.ab2_speed}/5<img alt="icon" src="./images/icon_speed.svg" /></div>
                                        <div className="newab-new-stats-crit">{this.props.storeData.ab2_crit * 100}%<img alt="icon" src="./images/icon_crit.svg" /></div>
                                    </div>
                                </div>
                            </div>

                            {/* Old ability 3 */}
                            <div className="newab-old-ability" onClick={() => this.props.setPageName("Home")}>
                                <div className="newab-new-pic-bar">
                                    <div className="newab-new-pic" style={{backgroundColor: this.props.storeData.ab3_color}}>
                                        <img className="ability-icon-size" alt="zap" src={this.props.storeData.ab3_icon} />
                                    </div>
                                </div>
                                <div className="newab-new-stats-bar">
                                    <div className="newab-new-stats-text">
                                        <span>{this.props.storeData.ab3_name}</span>
                                    </div>
                                    <div className="newab-new-stats-stats-bar">
                                        <div className="newab-new-stats-dmg">{this.props.storeData.ab3_dlow}-{this.props.storeData.ab3_dhigh}<img alt="icon" src="./images/icon_sword.svg" /></div>
                                        <div className="newab-new-stats-speed">{this.props.storeData.ab3_speed}/5<img alt="icon" src="./images/icon_speed.svg" /></div>
                                        <div className="newab-new-stats-crit">{this.props.storeData.ab3_crit * 100}%<img alt="icon" src="./images/icon_crit.svg" /></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* No replacement button bar */}
                    <div className="newab-no-ability-bar">
                        <div className="button" onClick={() => this.props.setPageName("Home")}>don't replace</div>
                    </div>

                </div>
            </div>
        );
    };

};

const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(NewAbility);