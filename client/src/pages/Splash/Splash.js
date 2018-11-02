import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';

import axios from "axios";

import "./Splash.css";

import SplashTop from "../../components/SplashTop"

class Splash extends Component {

    // componentDidMount = () => {
    //     axios.get('/api/selectone')
    //         .then(function (response) {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // };

    randomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    createAb = () => {
        var myString = "";
        var lvl = 1;
        var fame = 0;

        for (let i = 1; i < 11; i++) {
            var rollSpeed = Math.floor(Math.random() * 100) + 1;
            var mp = 1;
            var dlow1;
            var dhigh1;
            var speed1;
            var crit1;
            var fail1;
            var color1;
            var icon1;
            var dlow2;
            var dhigh2;
            var speed2;
            var crit2;
            var fail2;
            var color2;
            var icon2;
            var dlow3;
            var dhigh3;
            var speed3;
            var crit3;
            var fail3;
            var color3;
            var icon3;

            if (i % 2 == 0) {
                fame++
            }

            if (i % 10 == 0) {
                lvl++
            };

            if (rollSpeed >= 1 || rollSpeed <= 45) {
                dlow1 = (Math.floor(Math.random() * 8) + 4) * mp;
                dhigh1 = (Math.floor(Math.random() * 15) + 9) * mp;
                speed1 = 5;
                crit1 = ((Math.floor(Math.random() * 12) + 8) * mp) / 100;
                fail1 = ((Math.floor(Math.random() * 8) + 3) * mp) / 100;
                color1 = this.randomColor();
                icon1 = "whatever"
            } else if (rollSpeed >= 46 || rollSpeed <= 70) {
                dlow1 = (Math.floor(Math.random() * 10) + 5) * mp;
                dhigh1 = (Math.floor(Math.random() * 17) + 11) * mp;
                speed1 = 4;
                crit1 = ((Math.floor(Math.random() * 14) + 10) * mp) / 100;
                fail1 = ((Math.floor(Math.random() * 9) + 4) * mp) / 100;
                color1 = this.randomColor();
                icon1 = "whatever"
            } else if (rollSpeed >= 71 || rollSpeed <= 85) {
                dlow1 = (Math.floor(Math.random() * 12) + 6) * mp;
                dhigh1 = (Math.floor(Math.random() * 18) + 13) * mp;
                speed1 = 3;
                crit1 = ((Math.floor(Math.random() * 15) + 11) * mp) / 100;
                fail1 = ((Math.floor(Math.random() * 9) + 5) * mp) / 100;
                color1 = this.randomColor();
                icon1 = "whatever"
            } else if (rollSpeed >= 86 || rollSpeed <= 95) {
                dlow1 = (Math.floor(Math.random() * 15) + 8) * mp;
                dhigh1 = (Math.floor(Math.random() * 21) + 16) * mp;
                speed1 = 2;
                crit1 = ((Math.floor(Math.random() * 18) + 12) * mp) / 100;
                fail1 = ((Math.floor(Math.random() * 9) + 6) * mp) / 100;
                color1 = this.randomColor();
                icon1 = "whatever"
            } else if (rollSpeed >= 96 || rollSpeed <= 100) {
                dlow1 = (Math.floor(Math.random() * 20) + 10) * mp;
                dhigh1 = (Math.floor(Math.random() * 30) + 21) * mp;
                speed1 = 1;
                crit1 = ((Math.floor(Math.random() * 20) + 13) * mp) / 100;
                fail1 = ((Math.floor(Math.random() * 10) + 6) * mp) / 100;
                color1 = this.randomColor();
                icon1 = "whatever"
            };

            myString += `INSERT INTO players (npc, char_name, profile_pic, lvl, fame, ab1_name, ab1_dlow, ab1_dhigh, ab1_speed, ab1_crit, ab1_fail, ab1_color, ab1_icon, ab2_name, ab2_dlow, ab2_dhigh, ab2_speed, ab2_crit, ab2_fail, ab2_color, ab2_icon, ab3_name, ab3_dlow, ab3_dhigh, ab3_speed, ab3_crit, ab3_fail, ab3_color, ab3_icon) `;

            myString += `VALUES (1, "NAME", "PIC FILE PATH", ${lvl}, ${fame}, "AB 1 NAME", ${dlow1}, ${dhigh1}, ${speed1}, ${crit1}, ${fail1}, "${color1}", "${icon1}", `

            var rollSpeed2 = Math.floor(Math.random() * 100) + 1;

            if (rollSpeed2 >= 1 || rollSpeed2 <= 45) {
                dlow2 = (Math.floor(Math.random() * 8) + 4) * mp;
                dhigh2 = (Math.floor(Math.random() * 15) + 9) * mp;
                speed2 = 5;
                crit2 = ((Math.floor(Math.random() * 12) + 8) * mp) / 100;
                fail2 = ((Math.floor(Math.random() * 8) + 3) * mp) / 100;
                color2 = this.randomColor();
                icon2 = "whatever"
            } else if (rollSpeed2 >= 46 || rollSpeed2 <= 70) {
                dlow2 = (Math.floor(Math.random() * 10) + 5) * mp;
                dhigh2 = (Math.floor(Math.random() * 17) + 11) * mp;
                speed2 = 4;
                crit2 = ((Math.floor(Math.random() * 14) + 10) * mp) / 100;
                fail2 = ((Math.floor(Math.random() * 9) + 4) * mp) / 100;
                color2 = this.randomColor();
                icon2 = "whatever"
            } else if (rollSpeed2 >= 71 || rollSpeed2 <= 85) {
                dlow2 = (Math.floor(Math.random() * 12) + 6) * mp;
                dhigh2 = (Math.floor(Math.random() * 18) + 13) * mp;
                speed2 = 3;
                crit2 = ((Math.floor(Math.random() * 15) + 11) * mp) / 100;
                fail2 = ((Math.floor(Math.random() * 9) + 5) * mp) / 100;
                color2 = this.randomColor();
                icon2 = "whatever"
            } else if (rollSpeed2 >= 86 || rollSpeed2 <= 95) {
                dlow2 = (Math.floor(Math.random() * 15) + 8) * mp;
                dhigh2 = (Math.floor(Math.random() * 21) + 16) * mp;
                speed2 = 2;
                crit2 = ((Math.floor(Math.random() * 18) + 12) * mp) / 100;
                fail2 = ((Math.floor(Math.random() * 9) + 6) * mp) / 100;
                color2 = this.randomColor();
                icon2 = "whatever"
            } else if (rollSpeed2 >= 96 || rollSpeed2 <= 100) {
                dlow2 = (Math.floor(Math.random() * 20) + 10) * mp;
                dhigh2 = (Math.floor(Math.random() * 30) + 21) * mp;
                speed2 = 1;
                crit2 = ((Math.floor(Math.random() * 20) + 13) * mp) / 100;
                fail2 = ((Math.floor(Math.random() * 10) + 6) * mp) / 100;
                color2 = this.randomColor();
                icon2 = "whatever"
            };

            myString += `"AB 2 NAME", ${dlow2}, ${dhigh2}, ${speed2}, ${crit2}, ${fail2}, "${color2}", "${icon2}", `;

            var rollSpeed3 = Math.floor(Math.random() * 100) + 1;

            if (rollSpeed3 >= 1 || rollSpeed3 <= 45) {
                dlow3 = (Math.floor(Math.random() * 8) + 4) * mp;
                dhigh3 = (Math.floor(Math.random() * 15) + 9) * mp;
                speed3 = 5;
                crit3 = ((Math.floor(Math.random() * 12) + 8) * mp) / 100;
                fail3 = ((Math.floor(Math.random() * 8) + 3) * mp) / 100;
                color3 = this.randomColor();
                icon3 = "whatever"
            } else if (rollSpeed3 >= 46 || rollSpeed3 <= 70) {
                dlow3 = (Math.floor(Math.random() * 10) + 5) * mp;
                dhigh3 = (Math.floor(Math.random() * 17) + 11) * mp;
                speed3 = 4;
                crit3 = ((Math.floor(Math.random() * 14) + 10) * mp) / 100;
                fail3 = ((Math.floor(Math.random() * 9) + 4) * mp) / 100;
                color3 = this.randomColor();
                icon3 = "whatever"
            } else if (rollSpeed3 >= 71 || rollSpeed3 <= 85) {
                dlow3 = (Math.floor(Math.random() * 12) + 6) * mp;
                dhigh3 = (Math.floor(Math.random() * 18) + 13) * mp;
                speed3 = 3;
                crit3 = ((Math.floor(Math.random() * 15) + 11) * mp) / 100;
                fail3 = ((Math.floor(Math.random() * 9) + 5) * mp) / 100;
                color3 = this.randomColor();
                icon3 = "whatever"
            } else if (rollSpeed3 >= 86 || rollSpeed3 <= 95) {
                dlow3 = (Math.floor(Math.random() * 15) + 8) * mp;
                dhigh3 = (Math.floor(Math.random() * 21) + 16) * mp;
                speed3 = 2;
                crit3 = ((Math.floor(Math.random() * 18) + 12) * mp) / 100;
                fail3 = ((Math.floor(Math.random() * 9) + 6) * mp) / 100;
                color3 = this.randomColor();
                icon3 = "whatever"
            } else if (rollSpeed3 >= 96 || rollSpeed3 <= 100) {
                dlow3 = (Math.floor(Math.random() * 20) + 10) * mp;
                dhigh3 = (Math.floor(Math.random() * 30) + 21) * mp;
                speed3 = 1;
                crit3 = ((Math.floor(Math.random() * 20) + 13) * mp) / 100;
                fail3 = ((Math.floor(Math.random() * 10) + 6) * mp) / 100;
                color3 = this.randomColor();
                icon3 = "whatever"
            };

            myString += `"AB 3 NAME", ${dlow3}, ${dhigh3}, ${speed3}, ${crit3}, ${fail3}, "${color3}", "${icon3}"); `;

        } // for loop end
        console.log(myString);
    };

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