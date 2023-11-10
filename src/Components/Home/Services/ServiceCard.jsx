import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, price, img } = service;

  return (
    <div className="card w-80 lg:w-96 glass flex mx-auto gap-4 shadow-2xl transition-transform transform hover:scale-105 hover:bg-gray-900 hover:text-white">
      <figure>
        <img className="h-60 w-96" src={img} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="font-bold text-lg text-red-400">Price: ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/services/${_id}`}>
            <button className="btn btn-outline btn-error text-white">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
