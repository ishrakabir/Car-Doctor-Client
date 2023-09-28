
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BannerItem = ({ id, image, prevSlide, nextSlide }) => {
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full h-full">
      <img src={image} className="w-full rounded-xl" />
      <div className="absolute rounded-xl w-full h-full flex flex-col text-white justify-center space-y-4 pl-14  bg-gradient-to-r from-[#151515] to-[rgba(21.25, 21.25, 21.25, 0)]   ">
        <div className="lg:w-1/2 space-y-5">
          <h1 className=" text-xl lg:text-5xl font-bold  lg:w-1/2">
            Affordable Price For Car Servicing
          </h1>
          <h1 className="text-lg">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </h1>
        </div>
        <div className="flex space-x-4">
          <Link>
            <button className="btn btn-outline btn-error text-white">
              Discover More
            </button>
          </Link>
          <Link>
            <button className="btn btn-outline text-white">
              Latest Project
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={prevSlide} className="btn btn-circle mr-4">
          ❮
        </a>
        <a href={nextSlide} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

BannerItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  prevSlide: PropTypes.string.isRequired,
  nextSlide: PropTypes.string.isRequired,
};

export default BannerItem;
