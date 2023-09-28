const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 mb-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative mb-10 md:mb-0">
          <img
            src="../../../../public/assets/images/about_us/person.jpg"
            className="w-3/4 rounded-lg"
          ></img>
          <img
            src="../../../../public/assets/images/about_us/parts.jpg"
            className="w-1/2 absolute right-5 top-1/2 rounded-lg border-white border-8"
          ></img>
        </div>
        <div>
          <h1 className="text-5xl font-bold text-red-500">About Us</h1>
          <h3>We are qualified & of experience in this field</h3>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
          <button className="btn btn-outline btn-error text-white">
           Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
