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

                let uid = currentAccount.uid;

                //Last Log in time (being converted from GMT to local time)
                let lastLogIn = currentAccount.metadata.lastSignInTime;
                let setToLocal = new Date(lastLogIn);
                let convertedTime = setToLocal.toLocaleString();

                //current time
                let currentTime = new Date().toLocaleString();
                //=========================================

                const userInfo = {
                    email: email,
                    uid: uid,
                    LastLogIn: convertedTime,
                    currentTime: currentTime
                };

                console.log(userInfo);
    
                // let uid = currentAccount.uid; <- UNCOMMENT, JUST USED FOR TEST

                //verifying uid and email are successfully passed through 
                console.log(`${uid} - is the id for the following email account: ${email}`);



                //Last Log in time (being converted from GMT to local time)
                let lastLogIn = currentAccount.metadata.lastSignInTime;
                let setToLocal = new Date(lastLogIn);
                let convertedTime = setToLocal.toLocaleString();
                //current time
                let currentTime = new Date().toLocaleString();
                //=========================================
                const userInfo = {
                    email: email,
                    uid: uid,
                    LastLogIn: convertedTime,
                    currentTime: currentTime
                };
                console.log("Last log in time info: ", userInfo);



                // AXIOS ========================================
                axios.get('/api/selectLuchador/' + uid)
                    .then(response => {
                        const id = response.data.id;
                        const token = response.data.token;
                        const last_login = response.data.last_login;
                        const char_name = response.data.char_name;
                        const profile_pic = response.data.profile_pic;
                        const exp = response.data.exp;
                        const lvl = response.data.lvl;
                        const new_ability = response.data.new_ability;
                        const fame = response.data.fame;
                        const hp = response.data.hp;
                        const fights = response.data.fights;
                        const wins = response.data.wins;
                        const losses = response.data.losses;
                        const tickets = response.data.tickets;
                        const tickets_max = response.data.tickets_max;
                        const refresh = response.data.refresh;
                        const ab1_name = response.data.ab1_name;
                        const ab1_dlow = response.data.ab1_dlow;
                        const ab1_dhigh = response.data.ab1_dhigh;
                        const ab1_speed = response.data.ab1_speed;
                        const ab1_crit = response.data.ab1_crit;
                        const ab1_fail = response.data.ab1_fail;
                        const ab1_color = response.data.ab1_color;
                        const ab1_icon = response.data.ab1_icon;
                        const ab2_name = response.data.ab2_name;
                        const ab2_dlow = response.data.ab2_dlow;
                        const ab2_dhigh = response.data.ab2_dhigh;
                        const ab2_speed = response.data.ab2_speed;
                        const ab2_crit = response.data.ab2_crit;
                        const ab2_fail = response.data.ab2_fail;
                        const ab2_color = response.data.ab2_color;
                        const ab2_icon = response.data.ab2_icon;
                        const ab3_name = response.data.ab3_name;
                        const ab3_dlow = response.data.ab3_dlow;
                        const ab3_dhigh = response.data.ab3_dhigh;
                        const ab3_speed = response.data.ab3_speed;
                        const ab3_crit = response.data.ab3_crit;
                        const ab3_fail = response.data.ab3_fail;
                        const ab3_color = response.data.ab3_color;
                        const ab3_icon = response.data.ab3_icon;

                        this.props.loginData("Home", id, token, last_login, char_name, profile_pic, exp, lvl, new_ability, fame, hp, fights, wins, losses, tickets, tickets_max, refresh, ab1_name, ab1_dlow, ab1_dhigh, ab1_speed, ab1_crit, ab1_fail, ab1_color, ab1_icon, ab2_name, ab2_dlow, ab2_dhigh, ab2_speed, ab2_crit, ab2_fail, ab2_color, ab2_icon, ab3_name, ab3_dlow, ab3_dhigh, ab3_speed, ab3_crit, ab3_fail, ab3_color, ab3_icon);
                    })
                    .catch(error => {
                        console.log(error);
                    });

            })
            .catch(error => {

                let errorCode = error.code;
                let errorMessage = error.message;

                if (errorCode === "auth/user-disabled") {

                    alert("The user associated with those credentials has been disabled. Please create a new account.");

                    console.log(errorCode, errorMessage);

                } else if (errorCode === "auth/user-not-found") {

                    alert("There was no user found with those credentials. Please try to log in again, or create another account");

                    console.log(errorCode, errorMessage);

                } else if (errorCode === "auth/wrong-password") {

                    alert("Incorrect password associated with the email account. Please try again.");

                    console.log(errorCode, errorMessage);

                } else {

                    alert("An error has occured. Please try again");

                    console.log(errorCode, errorMessage);
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