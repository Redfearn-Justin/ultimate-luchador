import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';
<<<<<<< HEAD
<<<<<<< HEAD
// import ImageUploader from 'react-images-upload';

=======
import ImageUploader from 'react-images-upload';
import Dropzone from 'react-dropzone'
>>>>>>> master
=======

>>>>>>> master
import "./Profile.css";


class Profile extends Component {

    render() {
        return (
            <div className="container">
                <div className="box fight-box">

                    <div className="results-text-bar results-victory-text profile-text">profile</div>

                    <div className="profile-main-bar">
<<<<<<< HEAD
                        <div className="profile-uploader">
<<<<<<< HEAD
                            {/* <ImageUploader
                                withIcon={false}
                                // buttonText='Choose images'
                                onChange={this.onDrop}
                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                maxFileSize={5242880}
                            /> */}
=======

                            {/* <div className="dropzone">
                                <Dropzone
                                    onDrop={this.onDrop.bind(this)}
                                    onFileDialogCancel={this.onCancel.bind(this)}
                                >
                                    <p>Drop a file.</p>
                                    <ul>
                                    {
                                        this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                                    }
                                </ul>
                                </Dropzone>
                            </div> */}
>>>>>>> master
=======
                        {/* <div className="profile-uploader">

>>>>>>> master
                        </div>
                        <div className="profile-uploader">
                            <div className="profile-picture">
                                <img src={this.state.src}></img>
                                <input onInput={this.handleFile}
                                    type="file"
                                    accept="image/*"
                                />
                            </div>
                        </div> */}
                    </div>

                    <div className="profile-buttons-bar">
                        <div className="profile-buttons-col">
                            <div className="profile-button">
                                <div onClick={() => this.props.setPageName("Home")}>back</div>
                            </div>
                            <div className="profile-button">
                                <div onClick={() => this.props.setPageName("Credits")}>credits</div>
                            </div>
                        </div>
                        <div className="profile-buttons-col">
                            <div className="profile-button">
                                <div>something</div>
                            </div>
                            <div className="profile-button">
                                <div>log out</div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        );
    };
}


const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Profile);