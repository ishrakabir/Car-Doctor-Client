import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("service.json")
            .then(data => data.json())
        .then(res=>setServices(res))
    }, [])
    
    console.log(services)

  return (
    <div className="my-10 ">
      <div className="text-center my-10 ">
        <p className="text-lg font-bold text-red-500">Services</p>
        <h1 className="text-4xl font-bold">Our Service Area</h1>
        <p className="opacity-50">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don&apos;t look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
