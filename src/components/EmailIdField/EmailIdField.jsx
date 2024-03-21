/* eslint-disable react/prop-types */
const EmailIdField = ({ label, placeholder }) => {
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
                type='text'
                placeholder={placeholder}
                className='form-control border-black py-2'
                id={label + 'field'}
            />
        </div>
    );
};

export default EmailIdField;
