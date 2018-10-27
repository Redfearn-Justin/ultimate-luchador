import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/actions';

import "./NewAccount.css";

class NewAccount extends Component {

    render() {

        return (
            <div className="container">
               New account!
            </div>
        );
    }

}

const mapStateToProps = state => ({ storeData: state });
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(NewAccount);