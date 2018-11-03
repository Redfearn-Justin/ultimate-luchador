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

        //if user did not input information
        if(!this.state.email || !this.state.password || !this.state.displayName) {

            alert("Please completely fill out the fields before proceeding");

        } else {

            console.log("Successfully passed through first phase of creating account");
        }

        //actually sign in through firebase
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((result) => {

                //getting the result.user object
                const newUser = result.user

                this.setState({ user: newUser});

                //getting the current user according to firebase //verification purposes
                const currentAccount = auth.currentUser;


                let email = currentAccount.email;
                let uid = currentAccount.uid;

                //Object to put user token and display name into firebase DB
                const newUserInfo = {
                    email: email,
                    uid: uid,
                }

                //pushing user token and display name to firebase database
                database.ref().push(newUserInfo);

                //since successful creation, proceeding to next phase
                //=========================================================
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

            if(this.state.user) {
                //user has been created

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
                            type="displayName"
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