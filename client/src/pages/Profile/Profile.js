import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';

import "./Profile.css";


class Profile extends Component {

    goToGh = () => {
        window.open("https://github.com/gavbax99/ultimate-luchador");
    }

    getWinP = (a, b) => {
        var number = (a/(a+b))*100;
        var calc = number.toFixed(2);
        return calc;
    }

    render() {
        return (
            <div className="container">
                <div className="box fight-box">

                    <div className="results-text-bar results-defeat-text profile-text">profile</div>

                    <div className="profile-main-bar">
                        <div className="profile-section">
                            <div className="profile-section-stat pf-font-size">fame:</div>
                            <div className="profile-section-value pf-font-size">f{this.props.storeData.fame}</div>
                        </div>
                        <div className="profile-section">
                            <div className="profile-section-stat pf-font-size">hp:</div>
                            <div className="profile-section-value pf-font-size">h{this.props.storeData.hp}</div>
                        </div>
                        <div className="profile-section">
                            <div className="profile-section-stat"></div>
                            <div className="profile-section-value pf-font-size">{this.getWinP(this.props.storeData.wins, this.props.storeData.losses)}%</div>
                        </div>
                        <div className="profile-section fpic"></div>
                    </div>

                    <div className="profile-buttons-bar">
                        <div className="profile-buttons-col">
                            <div className="profile-button">
                                <div onClick={() => this.props.setPageName("Home")}>back</div>
                            </div>
                            <div className="profile-button">
                                <div onClick={() => this.props.setPageName("Credits")}>credits</div>
                            </div>
                        </div>
                        <div className="profile-buttons-col">
                            <div className="profile-button">
                                <div onClick={() => this.goToGh()}>github</div>
                            </div>
                            <div className="profile-button">
                                <div>log out</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    };
}


const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Profile);