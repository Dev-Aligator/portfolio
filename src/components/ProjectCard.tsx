import { Col } from "react-bootstrap";

interface Project {
  title: string;
  description: string;
  imgUrl: string;
}

const ProjectCard = ({ title, description, imgUrl }: Project) => {
  const baseUrl = "http://localhost:8000";
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={baseUrl + imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
