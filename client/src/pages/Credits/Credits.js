import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';

import "./Credits.css";

class Credits extends Component {

    goToGh = () => {
        window.open("https://github.com/gavbax99/ultimate-luchador");
    }

    render() {
        return (
            <div className="container">
                <div className="box fight-box">

                    <div className="results-text-bar results-defeat-text credits-text">credits</div>

                    <div className="credits-members-bar">
                        <div className="credits-member">
                            <span style={{ textShadow: "1px 1px lightblue" }}>Gavin Baxter - <span style={{ fontStyle: "italic" }}>Project Manager</span></span>
                            <div>
                                <a href="https://github.com/gavbax99"><img alt="icon" src="./images/github.svg" style={{ height: "18px", position: "relative", top: "2px", margin: "0px 8px" }} /></a>
                                <a href="https://www.linkedin.com/in/gavinbaxter99/"><img alt="icon" src="./images/linkedin.svg" style={{ height: "18px", position: "relative", top: "2px", margin: "0px 8px" }} /></a>
                                <a href="https://gavbax99.github.io/UCDPortfolio/"><img alt="icon" src="./images/home.svg" style={{ height: "18px", position: "relative", top: "2px", margin: "0px 8px" }} /></a>
                            </div>
                        </div>
                        <div className="credits-member">
                            <span style={{ textShadow: "1px 1px orange" }}>Justin Redfearn - <span style={{ fontStyle: "italic" }}>Developer</span></span>
                            <div>
                                <a href="https://github.com/gavbax99"><img alt="icon" src="./images/github.svg" style={{ height: "18px", position: "relative", top: "2px", margin: "0px 8px" }} /></a>
                                <a href="https://www.linkedin.com/in/gavinbaxter99/"><img alt="icon" src="./images/linkedin.svg" style={{ height: "18px", position: "relative", top: "2px", margin: "0px 8px" }} /></a>
                                <a href="https://gavbax99.github.io/UCDPortfolio/"><img alt="icon" src="./images/home.svg" style={{ height: "18px", position: "relative", top: "2px", margin: "0px 8px" }} /></a>
                            </div>
                        </div>
                        <div className="credits-member">
                            <span style={{ textShadow: "1px 1px lightgreen" }}>Matt Bower - <span style={{ fontStyle: "italic" }}>Developer</span></span>
                            <div>
                                <a href="https://github.com/gavbax99"><img alt="icon" src="./images/github.svg" style={{ height: "18px", position: "relative", top: "2px", margin: "0px 8px" }} /></a>
                                <a href="https://www.linkedin.com/in/gavinbaxter99/"><img alt="icon" src="./images/linkedin.svg" style={{ height: "18px", position: "relative", top: "2px", margin: "0px 8px" }} /></a>
                                <a href="https://gavbax99.github.io/UCDPortfolio/"><img alt="icon" src="./images/home.svg" style={{ height: "18px", position: "relative", top: "2px", margin: "0px 8px" }} /></a>
                            </div>
                        </div>
                        <div className="credits-member">
                            <span style={{ textShadow: "1px 1px pink" }}>Kyle Janssen - <span style={{ fontStyle: "italic" }}>Art Director</span></span>
                            <div>
                                <a href="https://github.com/gavbax99"><img alt="icon" src="./images/github.svg" style={{ height: "18px", position: "relative", top: "2px", margin: "0px 8px" }} /></a>
                                <a href="https://www.linkedin.com/in/gavinbaxter99/"><img alt="icon" src="./images/linkedin.svg" style={{ height: "18px", position: "relative", top: "2px", margin: "0px 8px" }} /></a>
                                <a href="https://gavbax99.github.io/UCDPortfolio/"><img alt="icon" src="./images/home.svg" style={{ height: "18px", position: "relative", top: "2px", margin: "0px 8px" }} /></a>
                            </div>
                        </div>
                    </div>

                    <div className="credits-tech-bar">

                        <div className="credits-tech-row">
                            <div className="credits-tech-col"><img src="./images/react.png" /></div>
                            <div className="credits-tech-col"><img src="./images/node.png" /></div>
                            <div className="credits-tech-col"><img src="./images/mysql.png" /></div>
                        </div>
                        <div className="credits-tech-row">
                            <div className="credits-tech-col"><img src="./images/redux.png" /></div>
                            <div className="credits-tech-col"><img src="./images/firebase.png" /></div>
                            <div className="credits-tech-col"><img src="./images/heroku.png" /></div>
                        </div>

                    </div>

                    <div className="credits-back-bar">
                        <div className="credits-back">
                            <div className="button" onClick={() => this.props.setPageName("Home")}>back</div>
                            <div className="button" onClick={() => this.goToGh()}>github</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    };

};

const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Credits);