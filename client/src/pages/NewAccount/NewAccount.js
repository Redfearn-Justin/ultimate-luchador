import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';

import "./NewAccount.css";

import * as firebase from "firebase";

import SplashTop from "../../components/SplashTop"

class NewAccount extends Component {

    state = {
        // isSignedIn: false,
        // userProfile: null,
        email: "",
        password: ""
    }

    firebaseFunction = () => {

        const config = {
            apiKey: "AIzaSyBtrAreWzaZXnoLfFhdd0tc1WgVMnckeWo",
            authDomain: "luchador-firebase.firebaseapp.com",
            databaseURL: "https://luchador-firebase.firebaseio.com",
            projectId: "luchador-firebase",
            storageBucket: "luchador-firebase.appspot.com",
            messagingSenderId: "294018925728"
        };
        
        firebase.initializeApp(config);

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

    hanldeFormSubmit = event => {
        
        event.preventDefault();

        //if user did not input information
        if(!this.state.email || !this.state.password) {
        
            alert("Please fill out the Email and/or Password fields")

        } else if(this.state.password.length < 6) {

            //consider adding functionality for checking for "encrypted characters"

            alert("Choose a more secure password");

        } else {

            console.log("Successfully submitted user information");
        }



        //firebase config
        //=========================================================


        this.firebaseFunction();


        const database = firebase.database();

        let userProfile = {
    
            Username: this.state.email,
            Password: this.state.password,
      
        };

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(function() {

            alert("user has been created :)");

        })
        .catch(function(error) {

            // Error Handling
            let errorCode = error.code;
            let errorMessage = error.message;

            console.log("An error has occured. Please try again");

            throw(errorCode, errorMessage);
        });
      
        //upload object to firebase /// as of rn, primarily to verify firebase synchronization

        database.ref().push(userProfile);


        //returning fields to have "blank" values
        this.setState({
            email: "",
            password: ""

        });
    }

    //sign out function works but "GET" posts username/password into URL!!!!

    signOut = () => {

        this.firebaseFunction();

        firebase.auth().signOut().catch(function(error) {

            console.log("An error has occured with signing out. Please try again");
            // An error happened.
            throw(error);
        });
    }

    clickFunctions = (event) => {
        this.props.setPageName("Splash");
        this.hanldeFormSubmit();
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
                            <button onClick={this.clickFunctions}>create</button>
                        </div>
                        <div>
                            <span className="text-red">email</span>
                            <input
                            value={this.state.createEmail}
                            name="email"
                            onChange={this.hanldeInputChange}
                            type="email"
                            placeholder="janedoe@hotmail.com"
                            />
                        </div>
                        <div>
                            <span className="text-blue">password</span>
                            <input
                            value={this.state.createPassword}
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
export default connect(mapStateToProps, mapDispatchToProps)(NewAccount);