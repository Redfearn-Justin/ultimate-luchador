//Imports
//=====================================================
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';
import "./NewAccount.css";
import firebase, { auth, database } from "../../firebase";
import SplashTop from "../../components/SplashTop"

//class
//==================================================

class NewAccount extends Component {

    constructor(props) {

        super(props);

        this.state = {
            displayName: "",
            email: "",
            password: "",
            user: null
        }

        //will be needing 'setState' inside of function, hence the "bind"
        this.createAccount = this.createAccount.bind(this);
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

    }

    createAccount = () => {
        var regexDisplayName = RegExp('^[A-Za-z0-9]+$');

        //if user did not input information
        if (!this.state.email || !this.state.password || !this.state.displayName) {

            alert("Please completely fill out the fields before proceeding");
            return;

        } 
        else if (this.state.displayName.length < 7 || this.state.displayName.length > 18) {
            alert("Username must be in between 7-16 characters!");
            return;

        }
        else if (this.state.password.length < 7 || this.state.password.length > 20) {
            alert("Password must be between 7-20 characters!");
            return; 
        }

        else if (regexDisplayName.test(this.state.displayName) == false) {
            alert("No spaces or special characters!");
            return; 
        }
        else {

            console.log("Successfully passed through first phase of creating account");
        }

        //actually sign in through firebase
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((result) => {

                //getting the result.user object
                const newUser = result.user

                this.setState({ user: newUser });

                //getting the current user according to firebase //verification purposes
                const currentAccount = auth.currentUser;
                let email = currentAccount.email;
                let uid = currentAccount.uid;

                //Object to put user token and display name into firebase DB
                const newUserInfo = {
                    displayName: this.state.displayName.toLowerCase(),
                    email: email,
                    uid: uid,
                }

                //pushing user token and display name to firebase database
                database.ref().push(newUserInfo);

                //since successful creation, proceeding to next phase
                //=========================================================
                setTimeout(() => this.props.setPageName("Splash"), 1000);

            })
            .catch(error => {

                // Error Handling
                //==================================

                let errorCode = error.code;
                let errorMessage = error.message;

                if (errorCode === "auth/weak-password") {

                    alert("Please pick a stronger password.");

                    console.log(errorCode, errorMessage);

                } else if (errorCode === "auth/email-already-in-use") {

                    alert("This email is already associated with an account. Please choose another email.");
                
                    console.log(errorCode, errorMessage);

                } else if (errorCode === "auth/invalid-email") {

                    console.log(errorCode, errorMessage);

                } else {

                    alert("An error occured. Please try again");

<<<<<<< HEAD
                    console.log(errorCode, errorMessage);
=======
                    throw (errorCode, errorMessage);
                }
>>>>>>> master

                }
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
                            <span className="text-black">new account</span>
                            <button onClick={this.createAccount}>create</button>
                        </div>
                        <div className="input-bar">
                            <div className="input-span">
                                <span className="text-red">Fighter Name</span>
                            </div>
                            <div className="input-input">
                                <input
                                    value={this.state.displayName}
                                    name="displayName"
                                    onChange={this.hanldeInputChange}
                                    type="displayName"
                                    placeholder="Nacho Libre"
                                />
                            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(NewAccount);