import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Table,
  Modal,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import Footer from "../../../components/Footer";
import HeaderClient from "../../../components/HeaderClient";

const Index = () => {
  const [show, setShow] = useState(false);
  const [berat, setBerat] = useState();
  let est = 100000 * berat;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleBerat = (e) => {
    e.preventDefault();
    setBerat(e.target.value);
  };
  return (
    <div>
      <HeaderClient />
      <Row className="p-0 m-0">
        <Col md={2} className="p-0 m-0"></Col>
        <Col
          md={8}
          className="p-5 mt-5 mb-5 border border-2 border-alpukat rounded-2"
        >
          <Row className="p-5">
            <Row className="p-0 m-0 mb-5">
              <Col></Col>
              <Col></Col>
              <Col className="text-end p-0">
                <Button
                  variant="lime text-putihan border border-alpukat"
                  onClick={handleShow}
                >
                  Tambah Transaksi
                </Button>
              </Col>
            </Row>
            <Row lassName="p-0 m-0 mb-5">
              <Table className="border border-tea border-1">
                <thead className="bg-lime text-putihan text-center">
                  <tr>
                    <th>No.</th>
                    <th>Kategori</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-alpukat text-center">
                    <td>1</td>
                    <td>Besi</td>
                    <td>
                      <a onClick={handleShow} className="text-alpukat">
                        Perbarui
                      </a>{" "}
                      |{" "}
                      <a href="" className="text-alpukat">
                        Hapus
                      </a>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Row>
            <Row className="p-0 m-0 mb-5">
              <Col></Col>
              <Col></Col>
              <Col className="pe-0 me-0 text-end">
                <Button variant="lime text-putihan border border-alpukat mt-3">
                  Proses Transaksi
                </Button>
              </Col>
            </Row>
          </Row>
        </Col>
        <Col md={2} className="p-0 m-0"></Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Transaksi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-2">
            <Form.Label>
              <b>Kategori</b>
            </Form.Label>
            <Form.Select aria-label="Default select example">
              <option disabled selected>
                Kategori
              </option>
              <option value="1">Besi</option>
              <option value="2">Kayu</option>
              <option value="3">Plastik</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>
              <b>Berat (kg)</b>
            </Form.Label>
            <FloatingLabel
              controlId="floatingInput"
              label="Berat Barang"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="3"
                onChange={(e) => handleBerat(e)}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>
              <b>Estimasi</b>
            </Form.Label>
            <FloatingLabel
              controlId="floatingInput"
              label="Estimasi Harga"
              className="mb-3"
            >
              <Form.Control
                type="text"
                disabled
                value={new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  currencyDisplay: "symbol",
                }).format(est)}
              />
            </FloatingLabel>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </div>
  );
};

export default Index;
