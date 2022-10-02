import React from "react";
import HeaderClient from "../../../components/HeaderClient";
import Footer from "../../../components/Footer";
import { Row, Col, Form, Button, Table } from "react-bootstrap";

const Index = () => {
  return (
    <div>
      <HeaderClient />
      <div className="text-center p-5 text-lime">
        <h1>
          <b>Transaksi Anda</b>
        </h1>
      </div>
      <div className="pt-0 p-5 me-5 ms-5">
        <div className="border-bottom border-tea border-2 text-end"></div>
      </div>
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          {" "}
          <Row>
            <Col>
              <Form.Group className="mb-2">
                <Form.Label>
                  <b>Tipe Transaksi</b>
                </Form.Label>
                <Form.Select aria-label="Default select example">
                  <option disabled selected>
                    Tipe Transaksi
                  </option>
                  <option value="1">Penjualan</option>
                  <option value="2">Pembelian</option>
                </Form.Select>
              </Form.Group>
              <Button variant="tea w-100">Tanggal Mulai</Button>
            </Col>
            <Col>
              <Form.Group className="mb-2">
                <Form.Label>
                  <b>Status</b>
                </Form.Label>
                <Form.Select aria-label="Default select example">
                  <option disabled selected>
                    Status
                  </option>
                  <option value="1">Delivery</option>
                  <option value="2">Pending</option>
                  <option value="3">Paid</option>
                  <option value="4">Success</option>
                  <option value="5">Cancelled</option>
                  <option value="6">Picking Up</option>
                </Form.Select>
              </Form.Group>
              <Button variant="tea w-100">Tanggal Akhir</Button>
            </Col>
            <Col className="text-center">
              <Button variant="lime w-50">Filter</Button>
            </Col>
          </Row>
        </Col>
        <Col></Col>
      </Row>

      <Row className="mt-5 text-alpukat text-center">
        <Col md={1}></Col>
        <Col md={10}>
          <Table>
            <thead className="bg-lime">
              <tr>
                <th>No.</th>
                <th>Kode Transaksi</th>
                <th>Tipe Transaksi</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody className="border-lime border">
              <tr>
                <td>1</td>
                <td>TF-192740</td>
                <td>Penjualan</td>
                <td>Success</td>
                <td>
                  <a href="/client/transaksi/penjualan" className="text-alpukat text-decoration-none">
                    Detail
                  </a>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>TF-89993</td>
                <td>Pembelian</td>
                <td>Success</td>
                <td>
                  <a href="/client/transaksi/pembelian" className="text-alpukat text-decoration-none">
                    Detail
                  </a>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col></Col>
      </Row>

      <Footer />
    </div>
  );
};

export default Index;
