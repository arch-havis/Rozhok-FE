import React from "react";
import Router, { useRouter } from "next/router";

import HeaderAdmin from "../../../../components/HeaderAdmin";
import Footer from "../../../../components/Footer";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Index = () => {
  const router = useRouter();

  const handleBatal = () => {
    Router.push({
      pathname: `/admin/kategori`,
    });
  };

  const handleEditKategori = () => {
    Router.push({
      pathname: `/admin/kategori`,
    });
  };

  return (
    <div>
      <HeaderAdmin />
      <Container className="py-5">
        <Row className="pb-5">
          <Col
            md={8}
            className="p-5 bg-putih  border border-lime rounded-2 mx-auto"
          >
            <Form.Group>
              <Form.Label>Nama Kategori</Form.Label>
              <Form.Control type="text"></Form.Control>
              <Form.Label className="mt-2">Harga Klien</Form.Label>
              <Form.Control type="text"></Form.Control>
              <Form.Label className="mt-2">Harga Mitra</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control as="textarea" rows={3}></Form.Control>
            </Form.Group>
            <Row id="bawah" className="mt-5">
              <Col className="text-end">
                <Button variant="danger" onClick={() => handleBatal()}>
                  Batal
                </Button>
                <Button
                  variant="lime"
                  className="ms-3 text-putih fw-bold"
                  onClick={() => handleEditKategori()}
                >
                  Simpan
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Index;
