const OtpField = () => {
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
                className='d-block rounded-3 p-2 border-muted'
                type='tel'
                maxLength='1'
                required
                onKeyPress={filterCodeHandler}
            />
        </div>
    );
};

export default OtpField;
