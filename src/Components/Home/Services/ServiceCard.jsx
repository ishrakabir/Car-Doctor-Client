import PropTypes from "prop-types";
const ServiceCard = ({ service }) => {
  const { title, price, img } = service;

  return (
    <div className="card md:w-80 lg:w-96 glass flex mx-auto gap-4">
      <figure>
        <img className="h-60 w-96" src={img} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="font-bold text-lg text-red-400">Price : ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-error text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};


export default ServiceCard;
