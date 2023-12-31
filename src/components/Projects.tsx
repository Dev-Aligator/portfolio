import { Container, Col, Row, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import * as Models from "../DataInterfaces";
interface ProjectProps {
  projectsData: Models.Project[];
}

const Projects: React.FC<ProjectProps> = ({ projectsData }) => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Explore a diverse collection of captivating projects I've
                    meticulously crafted
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Web Development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Desktop Application</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Research</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projectsData?.map((project) => {
                      if (project?.tabIndex != 1) {
                        return null;
                      }

                      return (
                        <ProjectCard
                          key={project?.id}
                          title={project?.title}
                          description={project?.description}
                          imgUrl={project?.imgUrl}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projectsData?.map((project) => {
                      if (project?.tabIndex != 2) {
                        return null;
                      }

                      return (
                        <ProjectCard
                          key={project?.id}
                          title={project?.title}
                          description={project?.description}
                          imgUrl={project?.imgUrl}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projectsData?.map((project) => {
                      if (project?.tabIndex != 3) {
                        return null;
                      }

                      return (
                        <ProjectCard
                          key={project?.id}
                          title={project?.title}
                          description={project?.description}
                          imgUrl={project?.imgUrl}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

export default Projects;
