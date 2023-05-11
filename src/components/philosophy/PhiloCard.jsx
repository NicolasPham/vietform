import "./philoCard.scss";

const PhiloCard = ({ name, desc, icon }) => {
  return (
    <div className="philo-Card">
      {icon}
      <h1>{name}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default PhiloCard;
