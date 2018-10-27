import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';
// firebase inclusion
import * as firebase from "firebase";

import "./Login.css";


class Login extends Component {

    state = {
        email: "",
        password: ""
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


        //encrpty keys!!!!!!!!!!!

        const config = {
            apiKey: "AIzaSyBtrAreWzaZXnoLfFhdd0tc1WgVMnckeWo",
            authDomain: "luchador-firebase.firebaseapp.com",
            databaseURL: "https://luchador-firebase.firebaseio.com",
            projectId: "luchador-firebase",
            storageBucket: "luchador-firebase.appspot.com",
            messagingSenderId: "294018925728"
        };
        
        firebase.initializeApp(config);


        const database = firebase.database();

        let totalUserInput = {
    
            Email: this.state.email,
            Password: this.state.password,
      
        };
      
        //upload object to firebase

        database.ref().push(totalUserInput);



        this.setState({
            email:"",
            password: ""
        });
    }

    render() {

        return (
            <div className="container">
                <form>
                    <h3> <u>Enter your Email here</u> </h3>

                    <input
                    value={this.state.email}
                    name="email"
                    onChange={this.hanldeInputChange}
                    type="email"
                    placeholder="janedoe@gmail.com"
                    />
                    <input
                    value={this.state.password}
                    name="password"
                    onChange={this.hanldeInputChange}
                    type="password"
                    placeholder="************"
                    />
                    <button onClick={this.hanldeFormSubmit}>
                    Submit
                    </button>

                </form>
            </div>
        );
    }

}

const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Login);