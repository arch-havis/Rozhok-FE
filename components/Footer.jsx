import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-alpukat text-putihan">
      <Container>
        <Row className=" bk">
          <Col className=""> Contact</Col>
          <Col className="text-center"> Social</Col>
          <Col className="text-end"> About</Col>
        </Row>
        <div className="bawah">
          <div className="text-center">&copy; Rozhok 2022</div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
