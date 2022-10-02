import React from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import Footer from "../../components/Footer";
import { Row, Col } from "react-bootstrap";

const Index = () => {
  return (
    <div>
      <HeaderAdmin />
      <Row className="text-alpukat mt-5 m-0 text-center">
        <Col md={1}></Col>
        <Col id="kiri" md={4} className="p-2 border border-alpukat rounded-2 bg-tea">
          <Col>
            <h6>Total Junk Station</h6>
          </Col>
          <Col>
            <h4>
              <b>15</b>
            </h4>
          </Col>
        </Col>
        <Col md={2}></Col>
        <Col id="kanan" md={4} className="p-2 border border-alpukat rounded-2 bg-tea">
          <Col>
            <h6>Total Junk Station</h6>
          </Col>
          <Col>
            <h4>
              <b>15</b>
            </h4>
          </Col>
        </Col>
        <Col md={1}></Col>
      </Row>
      <Footer />
    </div>
  );
};

export default Index;
