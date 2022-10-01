import React, { useState } from "react";
import { Button, Carousel, Col, Container, Form, Row } from "react-bootstrap";
import HeaderJunkStation from "../../../components/HeaderJunkStation";
import { AiOutlineBell } from "react-icons/ai";

const Index = () => {
  const [index, setIndex] = useState(0);
  const [totalPembelian, setTotalPembelian] = useState(500000);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="bg-putih pb-5">
      <HeaderJunkStation />
      <Container>
        <Row style={{ marginTop: 30 }}>
          <Col xs="12" sm="8" md="6" lg="4" className="d-flex">
            <Form.Select aria-label="Default select example">
              <option>Semua Pembelian</option>
              <option value="1">Tahunan</option>
              <option value="2">Bulanan</option>
              <option value="3">Mingguan</option>
              <option value="4">Harian</option>
            </Form.Select>
            <Button variant="lime" className="ms-2 px-4">
              Filter
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="7" md="8" lg="6" className="bg-tea mt-4 rounded-2 ">
            <div className="d-flex align-items-center">
              <AiOutlineBell size={50} />
              <p className="mt-3 fs-4">Total Pembelian</p>
            </div>
            <p className="fs-2 fw-bold text-end me-5 my-3">
              Rp {totalPembelian}
            </p>
          </Col>
        </Row>

        <Row className=" my-5">
          <Col xs="12" md="11" lg="10" className="m-auto bg-tea rounded-2">
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              variant="dark"
            >
              <Carousel.Item className="my-5 px-5 text-center ">
                <h3 className="text-center fs-1">
                  Besi <span className="fs-5">(Rp 10000/kg)</span>
                </h3>
                <p>
                  Limbah yang berasal dari logam besi seperti paku, pagar besi
                  dll
                </p>
              </Carousel.Item>
              <Carousel.Item className="my-5 px-5 text-center ">
                <h3 className="text-center fs-1">
                  Organik <span className="fs-5">(Rp 10000/kg)</span>
                </h3>
                <p>
                  Limbah yang berasal dari logam besi seperti paku, pagar besi
                  dll
                </p>
              </Carousel.Item>
              <Carousel.Item className="my-5 px-5 text-center ">
                <h3 className="text-center fs-1">
                  Plastik <span className="fs-5">(Rp 10000/kg)</span>
                </h3>
                <p>
                  Limbah yang berasal dari logam besi seperti paku, pagar besi
                  dll
                </p>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
