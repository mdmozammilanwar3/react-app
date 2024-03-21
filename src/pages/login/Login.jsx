/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import EmailIdField from "../../components/EmailIdField/EmailIdField";
import FormHeading from "../../components/FormHeading/FormHeading";
import PasswordField from "../../components/PasswordField/PasswordField";
import BaseAuth from "../../components/BaseAuth/BaseAuth";
import DarkButton from "../../components/DarkButton/DarkButton";
import './Login.css';

const Login = () => {
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
                                <form>
                                    <EmailIdField label='EMAIL ID' placeholder='Enter your email id' />
                                    <PasswordField label='PASSWORD' placeholder='Enter your password' />
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
