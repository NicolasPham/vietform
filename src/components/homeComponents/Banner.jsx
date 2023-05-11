import "./banner.scss";
import { logoSub, slogan } from "../../assets/home";
import { Link } from "react-router-dom";

const Banner = () => {
  const imgCarousel = [
    "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    "https://images.unsplash.com/photo-1599707254554-027aeb4deacd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1575971637203-d6255d9947a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1602497485099-e41a116a272c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ];

  return (
    <div
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-pause="false">
      <div className="carousel-inner">
        {imgCarousel.map((url, index) => (
          <div
            key={index}
            className={`carousel-item data-bs-interval="10" ${
              index === 0 ? "active" : ""
            }`}>
            <img src={url} className="d-block w-100" alt="..." />
          </div>
        ))}
      </div>
      <div className="slogan position-absolute">
        <div>
          <img src={logoSub} alt="" />
          <img src={slogan} alt="" />
        </div>
        <Link to="/projects" className="link">
          <p>>> See our works</p>
        </Link>
        <a href="#whatWeDo" className="link">
          <p>>> What we do</p>
        </a>
      </div>
    </div>
  );
};

export default Banner;
