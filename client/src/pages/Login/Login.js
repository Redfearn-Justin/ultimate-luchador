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
    }

    logIn = () => {

        //if user did not input information
        if(!this.state.email || !this.state.password) {

            alert("Please fill out the Email and/or Password fields")

        } else if(this.state.password.length <= 6) {

            //consider adding functionality for checking for "encrypted characters"

            alert("Choose a more secure password");

        } else {

            console.log("Successfully passed through first phase of log in");
        }

        //actually sign in through firebase

        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((result) => {

                const newUser = result.user

                this.setState({ 
                    isSignedIn: true,
                    user: newUser
                });

                this.currentUser(this.state.user);

                console.log(this.state.isSignedIn);

                //since successful log in, proceeding to next phase
                //=================================================

                setTimeout( () => this.props.setPageName("Home"), 1000);

            })
            .catch(error => {

                // Error Handling
                //==================================
                //INCLUDE SPECIFIC CODE PROCEDURES

                let errorCode = error.code;
                let errorMessage = error.message;

                console.log("An error has occured. Please try again");

                throw(errorCode, errorMessage);

            });
        
    }

    currentUser = (user) => {

        console.log("in Current User function");

        if(user) {

            const user = auth.currentUser;

            let displayName = user.displayName;
            let email = user.email;
            let emailVerified = user.emailVerified;
            let photoURL = user.photoURL;
            let isAnonymous = user.isAnonymous;
            let uid = user.uid;
            let providerData = user.providerData;
            let tokenPath = user.getIdTokenResult();
            
            //directly below object just for developer usage
            const userInfo = {
                displayName: displayName,
                email: email,
                emailVerified: emailVerified,
                photoURL: photoURL,
                isAnonymous: isAnonymous,
                uid: uid,
                providerData: providerData,
                token: tokenPath
            };

            console.log(`${userInfo.email} is currently signed in`);

            console.log(userInfo);
            
        } else {
            //no one is signed in
        }

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
    }

}

const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Login);