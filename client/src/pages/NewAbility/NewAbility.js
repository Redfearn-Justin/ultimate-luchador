import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';

import axios from "axios";

import "./NewAbility.css";

class NewAbility extends Component {

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

                    {/* Text bar */}
                    <div className="results-text-bar results-defeat-text newab-text">new ability</div>

                    {/* New ability bar */}
                    <div className="newab-new-ability-bar">
                        <div className="newab-new-pic-bar">
                            <div className="newab-new-pic">XXX</div>
                        </div>
                        <div className="newab-new-stats-bar">
                            <div className="newab-new-stats-text">
                                <input></input>
                            </div>
                            <div className="newab-new-stats-stats-bar">
                                <div className="newab-new-stats-dmg">10-12 /</div>
                                <div className="newab-new-stats-speed">4 S</div>
                                <div className="newab-new-stats-crit">11% C</div>
                            </div>
                        </div>
                    </div>

                    {/* Old ability bar */}
                    <div className="newab-old-ability-bar">
                        <div className="newab-old-ability-text results-defeat-text">replace an ability:</div>
                        <div className="newab-old-ability-abilities">

                            {/* Old ability 1 */}
                            <div className="newab-old-ability" onClick={() => this.props.setPageName("Home")}>
                                <div className="newab-new-pic-bar">
                                    <div className="newab-new-pic">XXX</div>
                                </div>
                                <div className="newab-new-stats-bar">
                                    <div className="newab-new-stats-text">
                                        <span>hello</span>
                                    </div>
                                    <div className="newab-new-stats-stats-bar">
                                        <div className="newab-new-stats-dmg">10-12 /</div>
                                        <div className="newab-new-stats-speed">4 S</div>
                                        <div className="newab-new-stats-crit">11% C</div>
                                    </div>
                                </div>
                            </div>

                            {/* Old ability 2 */}
                            <div className="newab-old-ability" onClick={() => this.props.setPageName("Home")}>
                                <div className="newab-new-pic-bar">
                                    <div className="newab-new-pic">XXX</div>
                                </div>
                                <div className="newab-new-stats-bar">
                                    <div className="newab-new-stats-text">
                                        <span>hello</span>
                                    </div>
                                    <div className="newab-new-stats-stats-bar">
                                        <div className="newab-new-stats-dmg">10-12 /</div>
                                        <div className="newab-new-stats-speed">4 S</div>
                                        <div className="newab-new-stats-crit">11% C</div>
                                    </div>
                                </div>
                            </div>

                            {/* Old ability 3 */}
                            <div className="newab-old-ability" onClick={() => this.props.setPageName("Home")}>
                                <div className="newab-new-pic-bar">
                                    <div className="newab-new-pic">XXX</div>
                                </div>
                                <div className="newab-new-stats-bar">
                                    <div className="newab-new-stats-text">
                                        <span>hello</span>
                                    </div>
                                    <div className="newab-new-stats-stats-bar">
                                        <div className="newab-new-stats-dmg">10-12 /</div>
                                        <div className="newab-new-stats-speed">4 S</div>
                                        <div className="newab-new-stats-crit">11% C</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* No replacement button bar */}
                    <div className="newab-no-ability-bar">
                        <div className="button" onClick={() => this.props.setPageName("Home")}>don't replace</div>
                    </div>

                </div>
            </div>
        );
    };

};

const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(NewAbility);