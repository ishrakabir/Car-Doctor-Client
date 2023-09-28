import img1 from "../../../../public/assets/images/banner/1.jpg";
import img2 from "../../../../public/assets/images/banner/2.jpg";
import img3 from "../../../../public/assets/images/banner/3.jpg";
import img4 from "../../../../public/assets/images/banner/4.jpg";
import BannerItem from "./BannerItem/BannerItem";

const Banner = () => {
  const slides = [
    { id: 1, image: img1, prevSlide: "#slide4", nextSlide: "#slide2" },
    { id: 2, image: img2, prevSlide: "#slide1", nextSlide: "#slide3" },
    { id: 3, image: img3, prevSlide: "#slide2", nextSlide: "#slide4" },
    { id: 4, image: img4, prevSlide: "#slide3", nextSlide: "#slide1" },
  ];

  return (
    <div className="carousel w-full h-[500px] my-10">
      {slides.map((slide) => (
        <BannerItem
          key={slide.id}
          id={slide.id}
          image={slide.image}
          prevSlide={slide.prevSlide}
          nextSlide={slide.nextSlide}
        />
      ))}
    </div>
  );
};

export default Banner;
