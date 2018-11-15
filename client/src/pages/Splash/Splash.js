//Imports
//===========================================
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';
import axios from "axios";
import "./Splash.css";
import firebase, { auth } from "../../firebase";
import moment from "moment";


//Class
//==========================================
class Splash extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
        this.componentDidMount.bind(this);
    }

    componentDidMount = () => {
        auth.onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                // If the user is signed in:
                let email = firebaseUser.email;
                let uid = firebaseUser.uid;
                // let uid = 100; // <--- for test purposes only

                //current time
                let mysqlTimestamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
                //=========================================

                const userInfo = {
                    email: email,
                    uid: uid,
                    LastLogIn: mysqlTimestamp
                    // creationTime: creationTime, // <- don't know if need
                };

                // === PUT REQUEST For time update
                //   axios.put('api/updateLuchador', {token: uid, last_login: currentTime})
                //   .then(response => {
                //       console.log(response);
                //       const id = response.data.id;
                //       const token = response.data.token;
                //       const last_login = response.data.last_login;
                //       this.props.loginData("Home", id, token, last_login);
                //   })
                //   .catch(err => {
                //       console.log(err);
                //   });

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

            } else {
                // User is signed out.
                console.log("No user is signed in");
            }
        });
    };

    render() {
        return (
            <div className="container">

                <div id="boxxx" className="box">

                    <p className="title">ULTIMATE<br />LUCHADOR</p>

                    <div className="splash-lucha-image" >
                        <img src="./images/lucha.png" />
                    </div>
                    
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

// style={{ backgroundImage: "./images/lucha.png", backgroundSize: "cover" }}