import { useState, useEffect } from "react";

import { logo, slogan } from "../assets";

const Banner = () => {
  const imgCarousel = [
    "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    "https://images.unsplash.com/photo-1599707254554-027aeb4deacd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1575971637203-d6255d9947a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1602497485099-e41a116a272c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ];

  const [imgIndex, setImgIndex] = useState(0);

  // setInterval(sliding, 2000);

  //define function for sliding
  let img = 0;
  function sliding() {
    if (img >= imgCarousel.length - 1) {
      img = 0;
      setImgIndex(img);
    } else {
      img++;
      setImgIndex(img);
    }
  }

  //use Effect to re-render and clear Interval
  useEffect(() => {
    const interval = setInterval(sliding, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [imgIndex]);

  return (
    <div className="w-full h-[600px] relative">
      <img
        src={imgCarousel[imgIndex]}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="w-full h-[600px] flex flex-col md:flex-row absolute top-[20%] md:top-0 items-center md:justify-center gap-5">
        <img
          src={logo}
          alt=""
          className="w-[200px] md:w-[300px] lg:w-[500px] object-contain"
        />
        <img
          src={slogan}
          alt=""
          className="w-[300px] md:w-[400px] lg:w-[600px] object-contain "
        />
      </div>
    </div>
  );
};

export default Banner;
