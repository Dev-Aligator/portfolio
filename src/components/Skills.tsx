import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Col, Row } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";
import SkillBox from "./SkillBox";
import * as Models from "../DataInterfaces";

interface SkillProps {
  skillData: Models.Skill[];
}
const Skills: React.FC<SkillProps> = ({ skillData }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Mastering various skills essential for success in the industry.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {skillData?.map((skill) => (
                  <SkillBox
                    skillName={skill.skillName}
                    skillPercentage={skill.skillPercentage}
                  ></SkillBox>
                ))}
                <span></span>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image"></img>
    </section>
  );
};

export default Skills;
