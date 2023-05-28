import { Link } from "react-router-dom";

import Banner from "../components/Banner";
import HomeOptions from "../components/HomeOptions";

import { homeIntro } from "../assets";

const Home = () => {
  return (
    <div className="mt-[100px]">
      <Banner />

      <div className="w-[100%] pt-10 px-5 flex justify-center">
        <div className="w-full max-w-7xl py-4 justify-center home_intro">
          <div>
            <h1 className="text-primary font-bold text-[36px] border-b-4 w-fit border-primary mb-3">
              Who We Are
            </h1>
            <p className="text-black text-[20px] leading-[40px]">
              Vietform Corp. is one of the leading engineering company in
              Vietnam. Its revolutionary construction and engineering solutions
              have been recognized in the industry with innovative construction
              technologies such as precast, formwork’s systems, concrete
              batching, modular houses, and services.
            </p>
            <Link to="/about">
              <button className="text-light bg-secondary px-4 py-2 my-5">
                Know More
              </button>
            </Link>
          </div>

          <div>
            <img
              src={homeIntro}
              alt="home intro"
              className="w-full h-full object-contain home_intro-img"
            />
          </div>
        </div>
      </div>

      <HomeOptions />
    </div>
  );
};

export default Home;
