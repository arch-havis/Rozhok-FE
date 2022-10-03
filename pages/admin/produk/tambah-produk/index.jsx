import Link from "next/link";
import React from "react";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import HeaderAdmin from "../../../../components/HeaderAdmin";

const Index = () => {
  const handleCancel = (e) => {
    e.preventDefault();
    location.href = "/admin/produk";
  };

  const handleTambahProduk = (e) => {
    e.preventDefault();
    location.href = "/admin/produk";
  };
  return (
    <div className="bg-putih">
      <HeaderAdmin />
      <Container className="min-vh-100 pt-3">
        <h4 className="border-bottom  border-3 border-dark text-center">
          Daftar Transaksi
        </h4>
        <Row>
          <Col xl="7" lg="8" md="10" sm="12" className=" mt-5 ">
            <Form
              //   onSubmit={(e) => handleSubmit(e)}
              className="border border-lime p-5 bg-putihan text-alpukat rounded-3 border-2"
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nama Produk</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Harga Produk</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Stok</Form.Label>
                <Form.Control type="number" placeholder="" />
              </Form.Group>
              <Form.Group
                className="my-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Deskiripsi Produk</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="" />
              </Form.Group>
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label>Foto Produk</Form.Label>
                <Form.Control type="file" size="lg" />
              </Form.Group>

              <div className="d-flex justify-content-end">
                <Button
                  variant="danger"
                  onClick={(e) => handleCancel(e)}
                  style={{ color: "white" }}
                >
                  Batal
                </Button>
                <Button
                  className="ms-5"
                  variant="lime"
                  type="submit"
                  style={{ color: "white" }}
                  onClick={(e) => handleTambahProduk(e)}
                >
                  Tambahkan
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
