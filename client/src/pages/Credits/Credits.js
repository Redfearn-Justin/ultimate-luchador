import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';

import axios from "axios";

import "./Credits.css";

class Credits extends Component {

    // componentDidMount = () => {
    //     axios.get('/api/selectone')
    //         .then(function (response) {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // };

    render() {
        return (
            <div className="container">
                <div className="box fight-box">

                    <div className="results-text-bar results-defeat-text credits-text">credits</div>

                    <div className="credits-members-bar">
                        <div className="credits-member">member</div>
                        <div className="credits-member">member</div>
                        <div className="credits-member">member</div>
                    </div>

                    <div className="credits-tech-bar"></div>

                    <div className="credits-back-bar">
                        <div className="credits-back">
                            <div className="button" onClick={() => this.props.setPageName("Home")}>back</div>
                        </div>
                        <div className="credits-github">
                            <div className="button" onClick={() => this.props.setPageName("Home")}>gh</div>
                        </div>                        
                    </div>

                </div>
            </div>
        );
    };

};

const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Credits);