//Imports
//===========================================
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';
import axios from "axios";
import "./Splash.css";
import SplashTop from "../../components/SplashTop"
import firebase, { auth } from "../../firebase";


//Class
//==========================================
class Splash extends Component {

    constructor(props) {

        super(props);

        this.state = {

            user: null
        }
        //binding 'this' to the componentDidMount method
        this.componentDidMount.bind(this);
    }

    componentDidMount = () => {

        auth.onAuthStateChanged(firebaseUser => {


            if (firebaseUser) {
                
              // User is signed in, therfore...

              let email = firebaseUser.email;
              let uid = firebaseUser.uid;

              //Time stamps

              //Last Log in time (being converted from GMT to local time)
              let lastLogIn = firebaseUser.metadata.lastSignInTime;
              let setToLocal = new Date(lastLogIn);
              let convertedTime = setToLocal.toLocaleString();

              //current time
              let currentTime = new Date().toLocaleString();
              //=========================================

              const userInfo = {
                email: email,
                uid: uid,
                LastLogIn: convertedTime,
                currentTime: currentTime,
                // creationTime: creationTime, // <- don't know if need
              };

              console.log(`${email} is currently signed in`);
              console.log(userInfo);

              return;

              //SQL/API section (WORK IN PROGRESS)
              //=========================================================

              axios.get("/api/selectone")
              .then( (result) => {

                  console.log(`This is the result: ${result}`);

              })
              .catch((error) => {

                  console.log(`This is the error: ${error}`);
                  
              });

              //Immediately go to next page, since user is signed in
              //=========================================================
              setTimeout( () => this.props.setPageName("Home"), 1000);
              
            } else {
              // User is signed out.
              // ...
              console.log("No user is signed in");
            }
        });
    }

    render() {
        return (
            <div className="container">

                <div className="box">
                    <SplashTop />
                    <div className="flex-buttons">
                        <div className="button loginButton" onClick={() => this.props.setPageName("Login")}>LOG IN</div>
                        <div className="button newAccountButton" onClick={() => this.props.setPageName("NewAccount")}>NEW ACCOUNT</div>
                    </div>
                </div>
            </div>
        );
    };

};

const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Splash);