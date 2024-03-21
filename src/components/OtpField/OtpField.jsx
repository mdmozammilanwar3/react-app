/* eslint-disable react/prop-types */

import { useRef } from "react";
const OtpField = ({ index, setOtp }) => {
    const inputRef = useRef(null);

    const blurHandler = (e) => { 
        setOtp((prev) => {
            prev[index] = e.target.value;
            return [...prev];
        });
    }


    // INPUTS JUST ACCEPTING NUMBERS
    function filterCodeHandler(e) {
        const ALLOWED_CHARACTERS = /[0-9]+/;

        if (e.key == 'Enter') {
            return;
        }

        if (!ALLOWED_CHARACTERS.test(e.key)) {
            e.preventDefault();
        }
    }


    return (
        <div>
            <input
                ref={inputRef}
                className='d-block rounded-3 p-2 border-muted'
                type='tel'
                maxLength='1'
                required
                onKeyPress={filterCodeHandler}
                onBlur={blurHandler}
            />
        </div>
    );
};

export default OtpField;
