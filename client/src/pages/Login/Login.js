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

                let uid = 1;
                // let uid = currentAccount.uid; <- UNCOMMENT, JUST USED FOR TEST


                //verifying uid and email are successfully passed through 
                console.log(`${uid} - is the id for the following email account: ${email}`);
                //..

                axios.get('/api/selectLuchador/'+uid)
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

                //..
                //==============================================

                //verifying the state of "IsSignedIn"// should be true, as the user should be signed in
                console.log(`This should be true, as user is signed in: ${this.state.isSignedIn}`);

                //since successful login, proceeding to next phase
                //=========================================================
                setTimeout(() => this.props.setPageName("Home"), 1000);

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
                        <div>
                            <span className="text-red">email</span>
                            <input
                                value={this.state.email}
                                name="email"
                                onChange={this.hanldeInputChange}
                                type="email"
                                placeholder="janedoe@hotmail.com"
                            />
                        </div>
                        <div>
                            <span className="text-blue">password</span>
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
        );
    };

};

const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Login);