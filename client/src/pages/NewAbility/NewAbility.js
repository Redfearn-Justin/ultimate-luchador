import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';
import axios from "axios";

import "./NewAbility.css";

class NewAbility extends Component {

// I3fjoum5S8Ty6G687wfRBbS3M5E2

    state = {
        newName: "",
        newDlow: 1,
        newDhigh: 2,
        newSpeed: 3,
        newCrit: 0.4,
        newFail: 0.4,
        newColor: "#",
        newIcon: "X"
    }

    randomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    getRandomInteger = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    randomIcon = () => {
        var randNumer = Math.floor(Math.random() * 40) + 1;
        var path = "./images/icon" + randNumer + ".svg";
        return path;
    };

    hanldeInputChange = event => {
        //Apprehending value from input
        let value = event.target.value;
        const name = event.target.name;

        value = value.substring(0, 25);

        //now set the state of both values to user inputted
        this.setState({
            [name]: value
        });
    };

    componentDidMount = () => {
        var rollSpeed = Math.floor(Math.random() * 100) + 1;
        var dlow;
        var dhigh;
        var speed;
        var crit;
        var fail;
        var color;
        var icon;

        if (rollSpeed >= 1 && rollSpeed <= 33) {
            dlow = this.getRandomInteger(4, 9);
            dhigh = this.getRandomInteger(10, 15);
            speed = 5;
            crit = (this.getRandomInteger(10, 15)) / 100;
            fail = (this.getRandomInteger(0, 10)) / 100;
            color = this.randomColor();
            icon = this.randomIcon();
        } else if (rollSpeed >= 34 && rollSpeed <= 57) {
            dlow = this.getRandomInteger(7, 13);
            dhigh = this.getRandomInteger(14, 18);
            speed = 4;
            crit = (this.getRandomInteger(6, 18)) / 100;
            fail = (this.getRandomInteger(0, 15)) / 100;
            color = this.randomColor();
            icon = this.randomIcon();
        } else if (rollSpeed >= 58 && rollSpeed <= 76) {
            dlow = this.getRandomInteger(12, 16);
            dhigh = this.getRandomInteger(17, 23);
            speed = 3;
            crit = (this.getRandomInteger(4, 20)) / 100;
            fail = (this.getRandomInteger(0, 18)) / 100;
            color = this.randomColor();
            icon = this.randomIcon();
        } else if (rollSpeed >= 77 && rollSpeed <= 90) {
            dlow = this.getRandomInteger(15, 20);
            dhigh = this.getRandomInteger(21, 28);
            speed = 2;
            crit = (this.getRandomInteger(2, 22)) / 100;
            fail = (this.getRandomInteger(0, 18)) / 100;
            color = this.randomColor();
            icon = this.randomIcon();
        } else if (rollSpeed >= 91 && rollSpeed <= 100) {
            dlow = this.getRandomInteger(18, 25);
            dhigh = this.getRandomInteger(26, 35);
            speed = 1;
            crit = (this.getRandomInteger(2, 25)) / 100;
            fail = (this.getRandomInteger(0, 20)) / 100;
            color = this.randomColor();
            icon = this.randomIcon();
        };

        this.setState({
            newDlow: dlow,
            newDhigh: dhigh,
            newSpeed: speed,
            newCrit: crit,
            newFail: fail,
            newColor: color,
            newIcon: icon
        });
    };

    changeAbility = (ability) => {
        if (this.state.newName === "") {
            alert("Name the ability!");
        } else {
            if (ability === "1") {
                this.props.newAbility1("Home", this.state.newName, this.state.newDlow, this.state.newDhigh, this.state.newSpeed, this.state.newCrit, this.state.newFail, this.state.newColor, this.state.newIcon);

                axios.put('/api/newAbility1/', { ab1_name: this.state.newName, ab1_dlow: this.state.newDlow, ab1_dhigh: this.state.newDhigh, ab1_speed: this.state.newSpeed, ab1_crit: this.state.newCrit, ab1_fail: this.state.newFail, ab1_color: this.state.newColor, ab1_icon: this.state.newIcon,
                id: this.props.storeData.id })
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } else if (ability === "2") {
                this.props.newAbility2("Home", this.state.newName, this.state.newDlow, this.state.newDhigh, this.state.newSpeed, this.state.newCrit, this.state.newFail, this.state.newColor, this.state.newIcon);

                axios.put('/api/newAbility2/', { ab2_name: this.state.newName, ab2_dlow: this.state.newDlow, ab2_dhigh: this.state.newDhigh, ab2_speed: this.state.newSpeed, ab2_crit: this.state.newCrit, ab2_fail: this.state.newFail, ab2_color: this.state.newColor, ab2_icon: this.state.newIcon,
                id: this.props.storeData.id })
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } else if (ability === "3") {
                this.props.newAbility3("Home", this.state.newName, this.state.newDlow, this.state.newDhigh, this.state.newSpeed, this.state.newCrit, this.state.newFail, this.state.newColor, this.state.newIcon);

                axios.put('/api/newAbility3/', { ab3_name: this.state.newName, ab3_dlow: this.state.newDlow, ab3_dhigh: this.state.newDhigh, ab3_speed: this.state.newSpeed, ab3_crit: this.state.newCrit, ab3_fail: this.state.newFail, ab3_color: this.state.newColor, ab3_icon: this.state.newIcon,
                id: this.props.storeData.id })
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
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
                            <div className="newab-new-pic" style={{ backgroundColor: this.state.newColor }}><img className="ability-icon-size" alt="icon" src={this.state.newIcon} /></div>
                        </div>
                        <div className="newab-new-stats-bar">
                            <div className="newab-new-stats-text">
                                <input
                                    style={{ color: this.state.newColor }}
                                    value={this.state.newName}
                                    name="newName"
                                    onChange={this.hanldeInputChange}
                                    type="text"
                                    placeholder="name me"
                                />
                            </div>
                            <div className="newab-new-stats-stats-bar">
                                <div className="newab-new-stats-dmg"><span>{this.state.newDlow}-{this.state.newDhigh}<img alt="icon" src="./images/icon_sword.svg" /></span></div>
                                <div className="newab-new-stats-speed"><span>{this.state.newSpeed}/5<img alt="icon" src="./images/icon_speed.svg" /></span></div>
                                <div className="newab-new-stats-crit"><span>{this.state.newCrit * 100}%<img alt="icon" src="./images/icon_crit.svg" /></span></div>
                            </div>
                        </div>
                    </div>

                    {/* Old ability bar */}
                    <div className="newab-old-ability-bar">
                        <div className="newab-old-ability-text results-defeat-text">replace an ability:</div>
                        <div className="newab-old-ability-abilities">

                            {/* Old ability 1 */}
                            <div className="newab-old-ability" onClick={() => this.changeAbility("1")}>
                                <div className="newab-new-pic-bar">
                                    <div className="newab-new-pic" style={{ backgroundColor: this.props.storeData.ab1_color }}>
                                        <img className="ability-icon-size" alt="zap" src={this.props.storeData.ab1_icon} />
                                    </div>
                                </div>
                                <div className="newab-new-stats-bar">
                                    <div className="newab-new-stats-text">
                                        <span style={{ color: this.props.storeData.ab1_color }}>{this.props.storeData.ab1_name}</span>
                                    </div>
                                    <div className="newab-new-stats-stats-bar">
                                        <div className="newab-new-stats-dmg"><span>{this.props.storeData.ab1_dlow}-{this.props.storeData.ab1_dhigh}<img alt="icon" src="./images/icon_sword.svg" /></span></div>
                                        <div className="newab-new-stats-speed"><span>{this.props.storeData.ab1_speed}/5<img alt="icon" src="./images/icon_speed.svg" /></span></div>
                                        <div className="newab-new-stats-crit"><span>{this.props.storeData.ab1_crit * 100}%<img alt="icon" src="./images/icon_crit.svg" /></span></div>
                                    </div>
                                </div>
                            </div>

                            {/* Old ability 2 */}
                            <div className="newab-old-ability" onClick={() => this.changeAbility("2")}>
                                <div className="newab-new-pic-bar">
                                    <div className="newab-new-pic" style={{ backgroundColor: this.props.storeData.ab2_color }}>
                                        <img className="ability-icon-size" alt="zap" src={this.props.storeData.ab2_icon} />
                                    </div>
                                </div>
                                <div className="newab-new-stats-bar">
                                    <div className="newab-new-stats-text">
                                        <span style={{ color: this.props.storeData.ab2_color }}>{this.props.storeData.ab2_name}</span>
                                    </div>
                                    <div className="newab-new-stats-stats-bar">
                                        <div className="newab-new-stats-dmg"><span>{this.props.storeData.ab2_dlow}-{this.props.storeData.ab2_dhigh}<img alt="icon" src="./images/icon_sword.svg" /></span></div>
                                        <div className="newab-new-stats-speed"><span>{this.props.storeData.ab2_speed}/5<img alt="icon" src="./images/icon_speed.svg" /></span></div>
                                        <div className="newab-new-stats-crit"><span>{this.props.storeData.ab2_crit * 100}%<img alt="icon" src="./images/icon_crit.svg" /></span></div>
                                    </div>
                                </div>
                            </div>

                            {/* Old ability 3 */}
                            <div className="newab-old-ability" onClick={() => this.changeAbility("3")}>
                                <div className="newab-new-pic-bar">
                                    <div className="newab-new-pic" style={{ backgroundColor: this.props.storeData.ab3_color }}>
                                        <img className="ability-icon-size" alt="zap" src={this.props.storeData.ab3_icon} />
                                    </div>
                                </div>
                                <div className="newab-new-stats-bar">
                                    <div className="newab-new-stats-text">
                                        <span style={{ color: this.props.storeData.ab3_color }}>{this.props.storeData.ab3_name}</span>
                                    </div>
                                    <div className="newab-new-stats-stats-bar">
                                        <div className="newab-new-stats-dmg"><span>{this.props.storeData.ab3_dlow}-{this.props.storeData.ab3_dhigh}<img alt="icon" src="./images/icon_sword.svg" /></span></div>
                                        <div className="newab-new-stats-speed"><span>{this.props.storeData.ab3_speed}/5<img alt="icon" src="./images/icon_speed.svg" /></span></div>
                                        <div className="newab-new-stats-crit"><span>{this.props.storeData.ab3_crit * 100}%<img alt="icon" src="./images/icon_crit.svg" /></span></div>
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