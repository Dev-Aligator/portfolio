import { Container, Col, Row } from "react-bootstrap";
import aligatorImage from "../assets/img/aligator.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img
              className="img-photo-footer"
              src={aligatorImage}
              alt="Logo"
            ></img>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="">
                <img src={navIcon1}></img>
              </a>
              <a href="">
                <img src={navIcon2}></img>
              </a>
              <a href="">
                <img src={navIcon3}></img>
              </a>
            </div>
            <p>CopyRight 2023, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
