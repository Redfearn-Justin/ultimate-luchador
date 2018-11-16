//Imports
//=================================================
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';
import axios from "axios";
import "./ChooseOpponent.css";

//Class
//===============================================
class ChooseOpponent extends Component {

    state = {
        opp1name: "",
        opp1id: "",
        opp1pic: "",
        opp1fame: 0,
        opp1lvl: 0,
        opp1wins: 0,
        opp1losses: 0,
        opp2name: "",
        opp2id: "",
        opp2pic: "",
        opp2fame: 0,
        opp2lvl: 0,
        opp2wins: 0,
        opp2losses: 0,
        opp3name: "",
        opp3id: "",
        opp3pic: "",
        opp3fame: 0,
        opp3lvl: 0,
        opp3wins: 0,
        opp3losses: 0,
        display: "none"
    };

    componentDidMount = () => {
        // Grabs 3 random opponents within a +-15 range of the player's
        let fame = this.props.storeData.fame;
        let fameLow;
        let fameHigh;

        if (fame < 15) {
            fameLow = 0;
            fameHigh = this.props.storeData.fame + 15;
        } else {
            fameLow = this.props.storeData.fame - 15;
            fameHigh = this.props.storeData.fame + 15;
        }

        axios.get('/api/selectOpponents/' + fameLow + '/' + fameHigh + '/' + this.props.storeData.char_name)
            .then(response => {
                const dataArray = response.data;
                const index1 = Math.floor(Math.random() * dataArray.length);
                const index2 = Math.floor(Math.random() * dataArray.length);
                const index3 = Math.floor(Math.random() * dataArray.length);

                this.setState({
                    opp1name: dataArray[index1].char_name,
                    opp1id: dataArray[index1].id,
                    opp1pic: dataArray[index1].profile_pic,
                    opp1fame: dataArray[index1].fame,
                    opp1lvl: dataArray[index1].lvl,
                    opp1wins: dataArray[index1].wins,
                    opp1losses: dataArray[index1].losses,
                    opp2name: dataArray[index2].char_name,
                    opp2id: dataArray[index2].id,
                    opp2pic: dataArray[index2].profile_pic,
                    opp2fame: dataArray[index2].fame,
                    opp2lvl: dataArray[index2].lvl,
                    opp2wins: dataArray[index2].wins,
                    opp2losses: dataArray[index2].losses,
                    opp3name: dataArray[index3].char_name,
                    opp3id: dataArray[index3].id,
                    opp3pic: dataArray[index3].profile_pic,
                    opp3fame: dataArray[index3].fame,
                    opp3lvl: dataArray[index3].lvl,
                    opp3wins: dataArray[index3].wins,
                    opp3losses: dataArray[index3].losses,
                    display: "flex"
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container">
                <div className="box opponent-box">

                    {/* FLEX ROW */}
                    <div className="text-bar">
                        <div className="text-bar-row f2">choose your opponent</div>
                        <div className="text-bar-row">
                            <div className="text-bar-col"></div>
                            <div className="text-bar-col"><span><img alt="icon" src="./images/fame.svg" style={{ height: "18px", position: "relative", top: "2px" }} /> {this.props.storeData.fame}</span></div>
                            <div className="text-bar-col"><span><img alt="icon" src="./images/lvl.svg" style={{ height: "18px", position: "relative", top: "2px" }} /> {this.props.storeData.lvl}</span></div>
                            <div className="text-bar-col"></div>
                        </div>
                    </div>

                    {/* FLEX ROW */}
                    <div className="opponent-bar">

                        <div className="opponent" style={{ display: this.state.display }} onClick={() => this.props.chooseOpponent("Fight", this.state.opp1id)}>
                            <div className="profile-pic opponent-pic">
                                <div className="profile-picture profile-picture-choose" style={{ backgroundImage: "url(" + this.state.opp1pic + ")", backgroundSize: "cover" }}></div>
                            </div>
                            <div className="opponent-stats">
                                <div className="opponent-stats-bar"><span className="osb-span">{this.state.opp1name}</span></div>
                                <div className="opponent-stats-bar">
                                    <div><span><img alt="icon" src="./images/fame.svg" style={{ height: "18px", position: "relative", top: "2px" }} />{this.state.opp1fame}</span></div>
                                    <div><span><img alt="icon" src="./images/lvl.svg" style={{ height: "18px", position: "relative", top: "2px" }} />{this.state.opp1lvl}</span></div>
                                    <div><span><span style={{ color: "rgb(0, 194, 42)" }}>{this.state.opp1wins}</span> - <span style={{ color: "red" }}>{this.state.opp1losses}</span></span></div>
                                </div>
                            </div>
                        </div>

                        <div className="opponent" style={{ display: this.state.display }} onClick={() => this.props.chooseOpponent("Fight", this.state.opp2id)}>
                            <div className="profile-pic opponent-pic">
                                <div className="profile-picture profile-picture-choose" style={{ backgroundImage: "url(" + this.state.opp2pic + ")", backgroundSize: "cover" }}></div>
                            </div>
                            <div className="opponent-stats">
                                <div className="opponent-stats-bar"><span className="osb-span">{this.state.opp2name}</span></div>
                                <div className="opponent-stats-bar">
                                    <div><span><img alt="icon" src="./images/fame.svg" style={{ height: "18px", position: "relative", top: "2px" }} />{this.state.opp2fame}</span></div>
                                    <div><span><img alt="icon" src="./images/lvl.svg" style={{ height: "18px", position: "relative", top: "2px" }} />{this.state.opp2lvl}</span></div>
                                    <div><span><span style={{ color: "rgb(0, 194, 42)" }}>{this.state.opp2wins}</span> - <span style={{ color: "red" }}>{this.state.opp2losses}</span></span></div>
                                </div>
                            </div>
                        </div>

                        <div className="opponent" style={{ display: this.state.display }} onClick={() => this.props.chooseOpponent("Fight", this.state.opp3id)}>
                            <div className="profile-pic opponent-pic">
                                <div className="profile-picture profile-picture-choose" style={{ backgroundImage: "url(" + this.state.opp3pic + ")", backgroundSize: "cover" }}></div>
                            </div>
                            <div className="opponent-stats">
                                <div className="opponent-stats-bar"><span className="osb-span">{this.state.opp3name}</span></div>
                                <div className="opponent-stats-bar">
                                    <div><span><img alt="icon" src="./images/fame.svg" style={{ height: "18px", position: "relative", top: "2px" }} />{this.state.opp3fame}</span></div>
                                    <div><span><img alt="icon" src="./images/lvl.svg" style={{ height: "18px", position: "relative", top: "2px" }} />{this.state.opp3lvl}</span></div>
                                    <div><span><span style={{ color: "rgb(0, 194, 42)" }}>{this.state.opp3wins}</span> - <span style={{ color: "red" }}>{this.state.opp3losses}</span></span></div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* FLEX ROW */}
                    <div className="opponent-button-bar">
                        <div className="opponent-button-back" onClick={() => this.props.setPageName("Home")}>
                            <div>give up</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    };
};

const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(ChooseOpponent);