/* eslint-disable react/prop-types */
const PasswordField = ({ label, placeholder, onBlurHandler: setPassword }) => {
    const blurHandler = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className='mb-3'>
            <label
                style={{ fontSize: '0.8rem' }}
                className='form-label fw-bold'
                htmlFor={label + 'field'}
            >
                {label}
            </label>
            <input
                type='password'
                placeholder={placeholder}
                className='form-control border-black py-2'
                id={label + 'field'}
                onBlur={blurHandler}
            />
        </div>
    );
};

export default PasswordField;
