import { whatWeDo } from "../constants";

const OptionCard = () => {
  return <div>Card</div>;
};

const HomeOptions = () => {
  return (
    <section>
      <div>
        {whatWeDo.map((option, index) => (
          <OptionCard option={option} />
        ))}
      </div>
    </section>
  );
};

export default HomeOptions;
