/* eslint-disable react/prop-types */
const DarkButton = ({type, content}) => {
    return (
        <button type={type} className="btn btn-dark w-100 mt-2 py-2">{ content }</button>

    );
}

export default DarkButton;
