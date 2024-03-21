/* eslint-disable react/prop-types */
const ProductCard = ({ image, title, description, price }) => {
    return (
        <div className='col-lg-4 col-md-6 mb-4'>
            <div className='card h-100'>
                <img
                    src={image}
                    className='card-img-top object-fit-cover'
                    style={{maxHeight: '300px'}}
                    alt={title}
                />
                <div className='card-body'>
                    <h5 className='card-title'>{title}</h5>
                    <p className='card-text'>{description}</p>
                    <h6 className='card-subtitle mb-2 text-muted'>${price}</h6>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
