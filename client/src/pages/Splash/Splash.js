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
              //SQL/API section (WORK IN PROGRESS)
              //=========================================================
              axios.put('api/updateLuchador', {token: uid, last_login: currentTime})
              .then(response => {
                  console.log(response);
                  const id = response.data.id;
                  const token = response.data.token;
                  const last_login = response.data.last_login;
                  this.props.loginData("Home", id, token, last_login);
              })
              .catch(err => {
                  console.log(err);
              });
              
              return;
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
              return;
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