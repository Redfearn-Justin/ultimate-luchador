import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';
import axios from "axios";
import { auth }  from "../../firebase";

import "./Profile.css";


class Profile extends Component {

    state = {
        imgInput: ""
    }

    goToGh = () => {
        window.open("https://github.com/gavbax99/ultimate-luchador");
    }

    getWinP = (a, b) => {
        var number = (a / (a + b)) * 100;
        var calc = number.toFixed(2);
        return calc;
    }

    changePicture = () => {
        var link = this.state.imgInput;
        var testJpg = link.endsWith(".jpg");
        var testJpeg = link.endsWith(".jpeg");
        var testPng = link.endsWith(".png");

        if (testJpg || testJpeg || testPng) {
            this.props.changePicture(link);

            axios.put('/api/changePicture/', { profile_pic: link, id: this.props.storeData.id })
                .then(response => {
                    console.log(response);
                    this.setState({
                        imgInput: ""
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            alert("Needs to end with .jpg, .jpeg, or .png!")
            this.setState({
                imgInput: ""
            });
        }
    }

    hanldeInputChange = event => {
        //Apprehending value from input
        let value = event.target.value;
        const name = event.target.name;

        value = value.substring(0, 500);

        //now set the state of both values to user inputted
        this.setState({
            [name]: value
        });
    };

    signOut = () => {
        const currentUser = auth.currentUser;
        const email = currentUser.email;

        console.log(`${email} has signed out`);

        auth.signOut();

        this.props.setPageName("Splash");
    };

    render() {
        return (
            <div className="container">
                <div className="box fight-box">

                    <div className="results-text-bar results-defeat-text profile-text">profile</div>

                    <div className="profile-main-bar">
                        <div className="profile-section">
                            <div className="profile-section-stat pf-font-size">fame:</div>
                            <div className="profile-section-value pf-font-size"><span><img alt="icon" src="./images/fame.svg" style={{ height: "25px", position: "relative", top: "2px", marginRight: "5px" }} />{this.props.storeData.fame}</span></div>
                        </div>

                        <div className="break-line"></div>

                        <div className="profile-section">
                            <div className="profile-section-stat pf-font-size">hp:</div>
                            <div className="profile-section-value pf-font-size"><span><img alt="icon" src="./images/heart.svg" style={{ height: "25px", position: "relative", top: "2px", marginRight: "5px" }} />{this.props.storeData.hp}</span></div>
                        </div>

                        <div className="break-line"></div>

                        <div className="profile-section">
                            <div className="profile-section-stat pf-font-size">
                                <span>fights: </span>
                            </div>
                            <div className="profile-section-value pfw-font-size"><span><span style={{ color: "rgb(0, 194, 42)" }}>{this.props.storeData.wins}</span>-<span style={{ color: "red" }}>{this.props.storeData.losses}</span></span></div>
                        </div>

                        <div className="break-line"></div>

                        <div className="profile-section fpic">

                            <div className="profile-pic-row">
                                <div className="profile-picture" style={{ backgroundImage: "url(" + this.props.storeData.profile_pic + ")", backgroundSize: "cover" }}></div>

                            </div>
                            <div className="profile-upload-row">
                                <div className="profile-uploader profile-change-text" style={{ marginTop: "14px" }}>change your picture</div>
                                <div className="profile-uploader profile-desc-text">submit image link ending in .jpg, .jpeg, .png</div>
                                <div className="profile-uploader" style={{ marginBottom: "14px" }}>
                                    <div style={{ flex: 8 }}>
                                        <input
                                            value={this.state.imgInput}
                                            name="imgInput"
                                            onChange={this.hanldeInputChange}
                                            type="text"
                                            placeholder=""
                                        />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <button className="profile-submit" onClick={() => this.changePicture()} >go</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="profile-buttons-bar">
                        <div className="profile-buttons-col">
                            <div className="profile-button">
                                <div className="profile-button-text" onClick={() => this.props.setPageName("Home")}>back</div>
                            </div>
                            <div className="profile-button">
                                <div className="profile-button-text" onClick={() => this.props.setPageName("Credits")}>credits</div>
                            </div>
                        </div>
                        <div className="profile-buttons-col">
                            <div className="profile-button">
                                <div className="profile-shop-text">shop</div>
                            </div>
                            <div className="profile-button">
                                <div className="profile-button-text" onClick={this.signOut}>log out</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div >
        );
    };
}


const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Profile);