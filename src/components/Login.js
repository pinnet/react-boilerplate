import React from 'react';
import {connect} from 'react-redux';
import { startLogin } from './../actions/auth';

export const Login = ({startLogin}) => (
    <div className="box-layout">
    <div className="box-layout__box">
    <h1 className="box-layout__title"></h1>
    <p></p>
        <button className="button" onClick={startLogin}>Login via Google</button>
    </div>
    </div>
);
const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined,mapDispatchToProps)(Login);