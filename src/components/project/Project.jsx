import "./project.scss";

const Project = ({ name, url }) => {
  return (
    <div className="project">
      <img src={url} alt="" />
      <p id="project-name">{name}</p>
    </div>
  );
};

export default Project;
