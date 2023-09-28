import { Link } from "react-router-dom";
import img1 from "../../../../public/assets/images/banner/1.jpg";
import img2 from "../../../../public/assets/images/banner/2.jpg";
import img3 from "../../../../public/assets/images/banner/3.jpg";
import img4 from "../../../../public/assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[500px] my-10 ">
      <div id="slide1" className="carousel-item relative w-full  ">
        <img src={img1} className="w-full h-full transform rounded-xl" />
        <div className="absolute rounded-xl w-full h-full flex flex-col text-white justify-center space-y-4 pl-14  bg-gradient-to-r from-[#151515] to-[rgba(21.25, 21.25, 21.25, 0)]   ">
          <div className="lg:w-1/2 space-y-5">
            <h1 className=" text-xl lg:text-5xl font-bold  lg:w-1/2">
              Affordable Price For Car Servicing
            </h1>
            <h1 className="text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
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
          <a href="#slide4" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-full">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute rounded-xl w-full h-full flex flex-col text-white justify-center space-y-4 pl-14  bg-gradient-to-r from-[#151515] to-[rgba(21.25, 21.25, 21.25, 0)]   ">
          <div className="lg:w-1/2 space-y-5">
            <h1 className=" text-xl lg:text-5xl font-bold  lg:w-1/2">
              Affordable Price For Car Servicing
            </h1>
            <h1 className="text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
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
          <a href="#slide1" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-full">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute rounded-xl w-full h-full flex flex-col text-white justify-center space-y-4 pl-14  bg-gradient-to-r from-[#151515] to-[rgba(21.25, 21.25, 21.25, 0)]   ">
          <div className="lg:w-1/2 space-y-5">
            <h1 className=" text-xl lg:text-5xl font-bold  lg:w-1/2">
              Affordable Price For Car Servicing
            </h1>
            <h1 className="text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
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
          <a href="#slide2" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-full">
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute rounded-xl w-full h-full flex flex-col text-white justify-center space-y-4 pl-14  bg-gradient-to-r from-[#151515] to-[rgba(21.25, 21.25, 21.25, 0)]   ">
          <div className="lg:w-1/2 space-y-5">
            <h1 className=" text-xl lg:text-5xl font-bold  lg:w-1/2">
              Affordable Price For Car Servicing
            </h1>
            <h1 className="text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
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
          <a href="#slide3" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
