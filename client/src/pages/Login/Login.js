//Imports
//=================================================
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';
import firebase, { auth } from "../../firebase";
import "./Login.css";
import SplashTop from "../../components/SplashTop"
import { throws } from "assert";
import axios from "axios";

//Class
//===============================================

class Login extends Component {

    constructor(props) {

        super(props);

        this.state = {
            email: "",
            password: "",
            userName: "",
            isSignedIn: false,
            user: null
        }

        //will be needing 'setState' inside of function, hence the "bind"
        this.logIn = this.logIn.bind(this);
    }


    hanldeInputChange = event => {

        //Apprehending value from input
        let value = event.target.value;
        const name = event.target.name;

        //if the name is equal to "password", aka the password field
        if (name === "password") {

            value = value.substring(0, 15);
        }
        //now set the state of both values to user inputted
        this.setState({
            [name]: value
        });
    };

    logIn = () => {

        //if user did not input information
        if (!this.state.email || !this.state.password) {

            alert("Please fill out the Email and/or Password fields");

        } else {

            console.log("Successfully passed through first phase of log in");
        }

        //actually sign in through firebase

        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((result) => {

                //getting the result.user object
                const newUser = result.user

                this.setState({
                    isSignedIn: true,
                    user: newUser
                });

                //getting email and uid for registered user
                //===========================================
                const currentAccount = auth.currentUser;

                let email = currentAccount.email;

                let uid = 11;
                // let uid = currentAccount.uid; <- UNCOMMENT, JUST USED FOR TEST

                //verifying uid and email are successfully passed through 
                console.log(`${uid} - is the id for the following email account: ${email}`);


                // axios.get('/api/selectLuchador/' + uid)
                //     .then(function (response) {
                //         // var thisReturnsValue = JSON.stringify(response.data.hp);
                //         // const id = JSON.stringify(response.data.id);
                //         // const token = JSON.stringify(response.data.token);
                //         // const last_login = JSON.stringify(response.data.last_login);
                //         // const char_name = JSON.stringify(response.data.char_name);
                //         // const profile_pic = JSON.stringify(response.data.profile_pic);
                //         // const exp = JSON.stringify(response.data.exp);
                //         // const lvl = JSON.stringify(response.data.lvl);
                //         // const new_ability = JSON.stringify(response.data.new_ability);
                //         // const fame = JSON.stringify(response.data.fame);
                //         // const hp = JSON.stringify(response.data.hp);
                //         // const fights = JSON.stringify(response.data.fights);
                //         // const wins = JSON.stringify(response.data.wins);
                //         // const losses = JSON.stringify(response.data.losses);
                //         // const tickets = JSON.stringify(response.data.tickets);
                //         // const tickets_max = JSON.stringify(response.data.tickets_max);
                //         // const refresh = JSON.stringify(response.data.refresh);
                //         // const ab1_name = JSON.stringify(response.data.ab1_name);
                //         // const ab1_dlow = JSON.stringify(response.data.ab1_dlow);
                //         // const ab1_dhigh = JSON.stringify(response.data.ab1_dhigh);
                //         // const ab1_speed = JSON.stringify(response.data.ab1_speed);
                //         // const ab1_crit = JSON.stringify(response.data.ab1_crit);
                //         // const ab1_fail = JSON.stringify(response.data.ab1_fail);
                //         // const ab1_color = JSON.stringify(response.data.ab1_color);
                //         // const ab1_icon = JSON.stringify(response.data.ab1_icon);
                //         // const ab2_name = JSON.stringify(response.data.ab2_name);
                //         // const ab2_dlow = JSON.stringify(response.data.ab2_dlow);
                //         // const ab2_dhigh = JSON.stringify(response.data.ab2_dhigh);
                //         // const ab2_speed = JSON.stringify(response.data.ab2_speed);
                //         // const ab2_crit = JSON.stringify(response.data.ab2_crit);
                //         // const ab2_fail = JSON.stringify(response.data.ab2_fail);
                //         // const ab2_color = JSON.stringify(response.data.ab2_color);
                //         // const ab2_icon = JSON.stringify(response.data.ab2_icon);
                //         // const ab3_name = JSON.stringify(response.data.ab3_name);
                //         // const ab3_dlow = JSON.stringify(response.data.ab3_dlow);
                //         // const ab3_dhigh = JSON.stringify(response.data.ab3_dhigh);
                //         // const ab3_speed = JSON.stringify(response.data.ab3_speed);
                //         // const ab3_crit = JSON.stringify(response.data.ab3_crit);
                //         // const ab3_fail = JSON.stringify(response.data.ab3_fail);
                //         // const ab3_color = JSON.stringify(response.data.ab3_color);
                //         // const ab3_icon = JSON.stringify(response.data.ab3_icon);
                //         // this.props.getAllData(id, token, last_login, char_name, profile_pic, exp, lvl, new_ability, fame, hp, fights, wins, losses, tickets, tickets_max, refresh,  ab1_name, ab1_dlow, ab1_dhigh, ab1_speed, ab1_crit, ab1_fail, ab1_color, ab1_icon, ab2_name, ab2_dlow, ab2_dhigh, ab2_speed, ab2_crit, ab2_fail, ab2_color, ab2_icon, ab3_name, ab3_dlow, ab3_dhigh, ab3_speed, ab3_crit, ab3_fail, ab3_color, ab3_icon);
                //     })
                //     .catch(function (error) {
                //         console.log(error);
                //     });

                console.log(`This should be true, as user is signed in: ${this.state.isSignedIn}`);
                this.props.loginToken("Home", uid);

                //==============================================

            })
            .catch(error => {

                let errorCode = error.code;
                let errorMessage = error.message;

                if (errorCode === "auth/user-disabled") {

                    alert("The user associated with those credentials has been disabled. Please create a new account.");

                    throw (errorCode, errorMessage);

                } else if (errorCode === "auth/user-not-found") {

                    alert("There was no user found with those credentials. Please try to log in again, or create another account");

                    throw (errorCode, errorMessage);

                } else if (errorCode === "auth/wrong-password") {

                    alert("Incorrect password associated with the email account. Please try again.");

                    throw (errorCode, errorMessage);

                } else {

                    console.log("An error has occured. Please try again");

                    throw (errorCode, errorMessage);
                };

            });

    }

    render() {

        return (
            <div className="container">

                <div className="box">
                    <SplashTop />
                    <div className="flex-input">

                        <div className="nav">
                            <button onClick={() => this.props.setPageName("Splash")}>back</button>
                            <span className="text-black">log in</span>
                            <button onClick={this.logIn}>log in</button>
                        </div>

                        <div className="input-bar">
                            <div className="input-span">
                                <span className="text-red">email</span>
                            </div>
                            <div className="input-input">
                                <input
                                    value={this.state.email}
                                    name="email"
                                    onChange={this.hanldeInputChange}
                                    type="email"
                                    placeholder="janedoe@hotmail.com"
                                />
                            </div>
                        </div>

                        <div className="input-bar">
                            <div className="input-span">
                                <span className="text-blue">password</span>
                            </div>
                            <div className="input-input">
                                <input
                                    value={this.state.password}
                                    name="password"
                                    onChange={this.hanldeInputChange}
                                    type="password"
                                    placeholder="************"
                                />
                            </div>
                        </div>

                    </div>
                </div>



            </div>
        );
    };

};

const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Login);