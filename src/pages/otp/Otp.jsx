/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import FormHeading from "../../components/FormHeading/FormHeading";
import BaseAuth from "../../components/BaseAuth/BaseAuth";
import DarkButton from "../../components/DarkButton/DarkButton";
import './Otp.css';
import OtpField from "../../components/OtpField/OtpField";
import  { userAxios } from '../../axios/axios';


const Otp = () => {
    const navigate = useNavigate();
    const email = localStorage.getItem('email');

    const [otp, setOtp] = useState([]);
    const [focusedInput, setFocusedInput] = useState(0);

    const sendUserData = async () => {
        userAxios('verify-otp', { email, otp: otp.join('') }, successHandler);
    }

    const successHandler = () => {
        navigate('/login');
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
                                title='Verify your email'
                                description='Enter the OTP from your register email id'
                            />
                            <form className="p-0 p-md-3" onSubmit={submitHandler}>
                                <div className="digits-holder d-flex justify-content-between mb-3">
                                    {new Array(6).fill(0).map((_, i) => <OtpField index={i} key={i} setOtp={setOtp} />)}
                                </div>
                                <DarkButton type='submit' content='Proceed' />
                            </form>
                        </div>
                    </div>
                </BaseAuth>
            }
        </div>
    </main>
    );
}

export default Otp;
