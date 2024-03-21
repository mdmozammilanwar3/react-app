/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import EmailIdField from "../../components/EmailIdField/EmailIdField";
import FormHeading from "../../components/FormHeading/FormHeading";
import PasswordField from "../../components/PasswordField/PasswordField";
import BaseAuth from "../../components/BaseAuth/BaseAuth";
import DarkButton from "../../components/DarkButton/DarkButton";
import  { userAxios } from '../../axios/axios';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const sendUserData = async () => {
        userAxios('login', { email, password }, successHandler);
    }

    const successHandler = (data) => {
        localStorage.setItem('token', data.access_token);
        navigate('/products');
    };

    const submitHandler = (e) => {
        e.preventDefault();
        sendUserData();
    }

    return (
        <main className="py-5">
            <div className='container max-h-100 h-100'>
                {
                    <BaseAuth>
                        <div className='h-100 d-flex flex-column justify-content-center'>
                            <div className="p-4 form-wrapper">
                                <FormHeading
                                    title='Login to Admin Panel'
                                    description='Enter your email id and password below'
                                />
                                <form onSubmit={submitHandler}>
                                    <EmailIdField label='EMAIL ID' placeholder='Enter your email id' onBlurHandler={setEmail} />
                                    <PasswordField label='PASSWORD' placeholder='Enter your password' onBlurHandler={setPassword} />
                                    <DarkButton type='submit' content='Login' />
                                    <div className="mt-4 text-muted text-center">
                                        Don't have an account?
                                        <Link className="text-dark ps-2" to='/register'>Register</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </BaseAuth>
                }
            </div>
        </main>
    );
}

export default Login;
