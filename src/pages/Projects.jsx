import "./projects.scss";

//import data for projects
import { projects, partners } from "../data/projects";
import Project from "../components/project/Project";

const Projects = () => {
  return (
    <main className="projects">
      <div className="wrapper">
        <h1>Our Works</h1>
        <hr />
        <p>
          After many years of construction and development, VIETFORM CORP, has
          been accumulated many years of experience in managing and directing
          and business, accumulating capital, improving production capacity, and
          strengthening corporation relationships in both depth and breadth.
        </p>
        <p>
          With our rich experience and the enthsiastic leadership of Vietform
          corp. Board of Directors, we have done and have been doing many
          projecs with many scales from small to large!
        </p>

        <div className="works">
          {projects.map((item) => (
            <Project name={item.name} url={item.url} key={item.id} />
          ))}
        </div>
        <div className="projects-partners">
          <h1>Our Partners</h1>
          <hr />
          <div className="partners">
            {partners.map((item, index) => (
              <div className="logo" key={index}>
                <img src={item.url} alt={item.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
