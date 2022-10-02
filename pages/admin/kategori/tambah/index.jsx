import React from "react";
import HeaderAdmin from "../../../../components/HeaderAdmin";
import Footer from "../../../../components/Footer";
import { Button, Col, Form, Row } from "react-bootstrap";

const Index = () => {
  return (
    <div>
      <HeaderAdmin />
      <Row>
        <Col md={2}></Col>
        <Col md={8} className="p-5 bg-putih mt-5 border border-lime rounded-2">
          <Row id="atas">
            <Col>
              <Form.Group>
                <Form.Label>Nama Kategori</Form.Label>
                <Form.Control type="text"></Form.Control>
                <Form.Label className="mt-2">Harga Klien</Form.Label>
                <Form.Control type="text"></Form.Control>
                <Form.Label className="mt-2">Harga Mitra</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>
          <Row id="tengah" className="mt-5">
            <Form.Group>
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control as="textarea" rows={3}></Form.Control>
            </Form.Group>
          </Row>
          <Row id="bawah" className="mt-5">
            <Col>
              <Button variant="lime">Tambah</Button>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Col>
        <Col></Col>
      </Row>
      <Footer />
    </div>
  );
};

export default Index;
