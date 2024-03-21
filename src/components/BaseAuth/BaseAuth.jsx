/* eslint-disable react/prop-types */

import formBackground from './../../assets/main-background.webp';
import './BaseAuth.css';

const BaseAuth = (props) => {
    return (
        <div className="auth-wrapper h-100 d-flex mx-auto rounded-5 overflow-hidden">
            <div className="bg-container d-none d-lg-block">
                <img className='form-bg w-100 h-100' src={formBackground} alt="Form Background" />
            </div>
            <div className="form-container">
                {props.children}
            </div>
        </div>
    );
}

export default BaseAuth;
