import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-alpukat text-putihan">
      <Container>
        <Col xs="12 mx-auto" sm="6">
          <Row className="">
            <Col> Contact</Col>
            <Col className="text-center"> Social</Col>
            <Col className="text-end"> About</Col>
          </Row>
        </Col>
        <div className="bawah">
          <div className="text-center">&copy; Rozhok 2022</div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
