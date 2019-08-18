import React from 'react';
import sign_up_bg from '../../assets/img/register-login-bg.jpg';
import {Link} from 'react-router-dom';


export const Register = () =>
    <div className="register-container ">
        <div className="container-fluid">
            <div className="bg-img">
                <div className="logo-in-sign-up">
                    <h1>Sport News</h1>
                </div>
                <img src={sign_up_bg} alt="signup_bg"/>
            </div>
            <div className="create-account-form">
                <div className="log-in">
                    <h3>Already have an account?</h3>
                    <Link to="/login" className="btn btn-primary login">Log In</Link>
                </div>
                <div className="create-account-wrapper">
                    <h2>Create Account</h2>
                    <a href="#" className="btn fb-icon"></a>
                    <a href="#" className="btn gplus-icon"></a>
                    <p>Or use your email for registration</p>
                    <div className="user-info">
                        <div className="first-name">
                            <label htmlFor="first-name-input">First name</label>
                            <input type="text" id="first-name-input" placeholder="John"/>
                        </div>
                        <div className="last-name">
                            <label htmlFor="last-name-input">Last name</label>
                            <input type="text" id="last-name" placeholder="Doe"/>
                        </div>
                    </div>
                    <div className="email-wrapper">
                        <label htmlFor="email-input">Email</label>
                        <input type="email" id="email-input" placeholder="johndoe@gmail.com"/>
                        <label htmlFor="password-input">Password</label>
                        <input type="password" id="password-input" placeholder="4+ characters"/>
                    </div>
                    <button className="btn btn-primary sing-up">sign up</button>
                    <div className="mobile-link">
                        <Link to="/login" className="mobile-link">Already have an account?</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>