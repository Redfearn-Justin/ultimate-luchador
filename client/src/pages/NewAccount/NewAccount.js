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

    createAccount = () => {

        //if user did not input information
        if(!this.state.email || !this.state.password || !this.state.displayName) {

            alert("Please completely fill out the fields before proceeding");

        } else {

            console.log("Successfully passed through first phase of creating account");
        }

        //actually sign in through firebase

        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((result) => {

                const newUser = result.user

                this.setState({ 
                    user: newUser
                });

                this.currentUser(this.state.user);

                //since successful creation, proceeding to next phase
                //=================================================

                setTimeout( () => this.props.setPageName("Splash"), 1000);

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
            let tokenResult = user.getIdTokenResult();

            //directly below object just for developer usage
            const userInfo = {
                displayName: displayName,
                email: email,
                emailVerified: emailVerified,
                photoURL: photoURL,
                isAnonymous: isAnonymous,
                uid: uid,
                providerData: providerData,
                resultToken: tokenResult
            };

            //Object to put user token and display name into firebase DB
            const newUserInfo = {
                displayName: displayName,
                email: email,
                resultToken: tokenResult
            }

            console.log(userInfo);

            //pushing user token and display name to firebase database

            database.ref().push(newUserInfo);
            
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
                            <span className="text-black">new account</span>
                            <button onClick={this.createAccount}>create</button>
                        </div>
                        <div>
                            <span className="text-red">Fighter Name</span>
                            <input
                            value={this.state.displayName}
                            name="displayName"
                            onChange={this.hanldeInputChange}
                            type="text"
                            placeholder="Nacho Libre"
                            />
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
export default connect(mapStateToProps, mapDispatchToProps)(NewAccount);