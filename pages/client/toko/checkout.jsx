import React, { useState } from "react";
import HeaderClient from "../../../components/HeaderClient";
import Footer from "../../../components/Footer";
import { Button, Modal, Col, Row } from "react-bootstrap";
import { useRouter } from "next/router";

const Checkout = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <HeaderClient />

      <div className="text-center p-5 text-lime">
        <h1>
          <b>Checkout</b>
        </h1>
      </div>
      <div className="pt-0 p-5 me-5 ms-5">
        <div className="border-bottom border-gray border-2 text-end"></div>
      </div>
      <div className="ms-5 ps-5 mb-5">
        <select name="bank" id="bank" className="bg-tea text-alpukat">
          <option value="Bank" disabled selected>
            Bank
          </option>
          <option value="BNI">BNI</option>
          <option value="BRI">BRI</option>
          <option value="BCA">BCA</option>
        </select>
      </div>
      <div className="ms-5 ps-5 mt-5">
        <select name="bank" id="bank" className="bg-tea text-alpukat">
          <option value="Bank" disabled selected>
            Kurir
          </option>
          <option value="123">Luffy</option>
          <option value="456">Zoro</option>
          <option value="789">Sanji</option>
        </select>
      </div>
      <div className="text-end me-5 pe-5 mt-5 pt-5">
        <Button variant="lime text-putihan w-25" onClick={() => handleShow()}>
          Bayar
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <b>No. Akun Virtual</b>
              <div>0123456789</div>
            </Col>
            <Col>
              <b>Bank</b>
              <div>BNI</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <b>Tipe Pembayaran</b>
              <div>Bank Transfer</div>
            </Col>
            <Col>
              <b>Total Harga</b>
              <div>
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  currencyDisplay: "symbol",
                }).format(router.query.total)}
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </div>
  );
};

export default Checkout;
