import React from "react";
import HeaderAdmin from "../../../../components/HeaderAdmin";
import Footer from "../../../../components/Footer";
import { Button, Col, Form, Row } from "react-bootstrap";

const Index = () => {
  const num = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    currencyDisplay: "symbol",
  }).format(123456789);

  return (
    <div>
      <HeaderAdmin />
      <Row className="p-0 m-0">
        <Col md={2} className="p-0"></Col>
        <Col md={8} className="bg-putih border border-2 border-tea p-3 mt-5">
          <p>
            <b>Nama</b> : Usopp
          </p>
          <p>
            <b>Email</b> : usopp@strawhat.com
          </p>
          <p>
            <b>No. Telpon</b> : 0879654523
          </p>
          <p>
            <b>Provinsi</b> : Jawa Timur
          </p>
          <p>
            <b>Kabupaten / Kota</b> : Kediri
          </p>
          <p>
            <b>Kecamatan</b> : Krasss
          </p>
          <p>
            <b>Jalan</b> : JL.jalan
          </p>
          <Row>
            <Col>
              <Form.Group className="">
                <Form.Label>Tanggal Awal</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Tanggal Awal"
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Tanggal Akhir</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Tanggal Awal"
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Button variant="lime text-white">Filter</Button>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <Col className="p-2 bg-tea border border-lime rounded-2">
                <p>
                  <b>Total Laba</b>
                </p>
                {num}
              </Col>
            </Col>
            <Col>
              <Col className="p-2 bg-tea border border-lime rounded-2">
                <p>
                  <b>Total Penjualan</b>
                </p>
                {num}
              </Col>
            </Col>
            <Col>
              <Col className="p-2 bg-tea border border-lime rounded-2">
                <p>
                  <b>Total Pembelian</b>
                </p>
                {num}
              </Col>
            </Col>
          </Row>
        </Col>
        <Col className="p-0"></Col>
      </Row>

      <Footer />
    </div>
  );
};

export default Index;
