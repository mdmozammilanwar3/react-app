/* eslint-disable react/prop-types */
const FormHeading = ({title, description}) => {
    return (
        <div className="mb-5">
            <h1 className="text-center mb-2 fs-3">{ title }</h1>
            <p className="text-center text-muted"> { description }</p>
        </div>
    );
}

export default FormHeading;
