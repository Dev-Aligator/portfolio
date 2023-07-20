import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import crocoPlanet from "../assets/img/CrocoPlanet.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import SideBar from "./SideBar";
const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Machine Learning Eng", "Researcher"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const leuUsConnect = () => {
    window.location.href = "#contact";
  };
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText == fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText == "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner">
      <Container>
        <Row className="align-item-center">
          <SideBar
            startColor="purple"
            endColor="yellow"
            isVisible={true}
          ></SideBar>

          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagLine">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi I'm Dev-Aligator`}
                    <br />
                    <span className="wrap text-rotate">A {text}</span>
                  </h1>
                  <p>
                    At 20 years old, I possess a strong foundation in Java, C#,
                    and Python, specializing in backend development and
                    frameworks. Proficiency in both Linux and Windows further
                    enhances my capabilities. Let's embark on a journey of
                    exploration and growth together!
                  </p>
                  <button onClick={leuUsConnect}>
                    Let's connect
                    <ArrowRightCircle size={25}></ArrowRightCircle>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <img
              className="banner-image"
              src={crocoPlanet}
              alt="Header Image"
            ></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
