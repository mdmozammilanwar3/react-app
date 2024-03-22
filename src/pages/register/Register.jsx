/* eslint-disable react/prop-types */

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import EmailIdField from '../../components/EmailIdField/EmailIdField';
import FormHeading from '../../components/FormHeading/FormHeading';
import PasswordField from '../../components/PasswordField/PasswordField';
import BaseAuth from '../../components/BaseAuth/BaseAuth';
import DarkButton from '../../components/DarkButton/DarkButton';
import  { userAxios } from '../../axios/axios';
import './Register.css';
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
const Register = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const sendUserData = async () => {
       userAxios('register', { email, password, confirmPassword }, successHandler);
    }

    const successHandler = () => {
        localStorage.setItem('email', email);
        toast.success('Registration successful!', {
            autoClose: 3000, // Close after 3 seconds
        });
        navigate('/verify');
    };

    const register = (e) => {
        e.preventDefault();
        sendUserData();
    };

    return (
        <main className='py-5'>
            <div className='container max-h-100 h-100'>
                {
                    <BaseAuth>
                        <div className='h-100 d-flex flex-column justify-content-center'>
                            <div className='p-4 form-wrapper'>
                                <FormHeading
                                    title='Register to Admin Panel'
                                    description='Enter your email id and password below'
                                />
                                <form onSubmit={register}>
                                    <EmailIdField
                                        label='EMAIL ID'
                                        placeholder='Enter your email id'
                                        onBlurHandler={setEmail}
                                    />
                                    <PasswordField
                                        label='PASSWORD'
                                        placeholder='Enter your password'
                                        onBlurHandler={setPassword}
                                    />
                                    <PasswordField
                                        label='CONFIRM PASSWORD'
                                        placeholder='Enter your confirm password'
                                        onBlurHandler={setConfirmPassword}
                                    />
                                    <DarkButton
                                        type='submit'
                                        content='Register'
                                    />
                                    
                                    <div className='mt-4 text-muted text-center'>
                                        Already have an account?
                                        <Link
                                            className='text-dark ps-2'
                                            to='/login'
                                        >
                                            Login
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                    </BaseAuth>
                    
                }
            </div>
        </main>
    );
};

export default Register;
