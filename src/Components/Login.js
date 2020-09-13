import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from '../firebase';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';
import './Login.css';

const Login = () => {

    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(res => {
            dispatch({
                type: actionTypes.SET_USER,
                user: res.user
            })
        })
        .catch(err => {
            console.log(err.message);
        })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://icons-for-free.com/iconfiles/png/512/facebook+messenger-1320568242702144465.png" alt=""/>

                <div className="login__text">
                    <h1>WELCOME TO PRIME'S MESSENGER</h1>
                </div>

                <Button type="submit" onClick={signIn}>SIGN IN WITH GOOGLE</Button>

            </div>
        </div>
    );
};

export default Login;