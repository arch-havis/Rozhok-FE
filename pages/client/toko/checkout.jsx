import React, { useEffect, useState } from "react";
import HeaderClient from "../../../components/HeaderClient";
import Footer from "../../../components/Footer";
import { Button, Modal, Col, Row, Form } from "react-bootstrap";
import { useRouter } from "next/router";
import axios from "axios";
import { getCookie } from "cookies-next";

const Checkout = () => {
  const token = getCookie("token");
  const [show, setShow] = useState(false);
  const router = useRouter();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [bank, setBank] = useState();
  const [kurir, setKurir] = useState();

  const handleBayar = async () => {
    await axios({
      method: "post",
      url: "https://rozhok.romodeus.site/payment",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        bank: bank,
        kurir: kurir,
      },
    })
      .then((response) => {
        console.log(response.data)
        var data = `
          NO_VA: ${response.data.no_va}
          BANK: ${response.data.bank}
          TIPE_PEMBAYARAN: ${response.data.tipe_pembayaran}
          HARGA: ${response.data.total_harga}
        `
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.response.data.message.toUpperCase());
      });
  };

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
        <Row>
          <Col></Col>
          <Col className=" text-alpukat">
            <Form.Label>Bank</Form.Label>
            <Form.Select onChange={(e) => setBank(e.target.value)}>
              <option selected disabled>
                Pilih Bank
              </option>
              <option value="bca">BCA</option>
              <option value="bni">BNI</option>
              <option value="bri">BRI</option>
              <option value="permata">PERMATA</option>
            </Form.Select>
          </Col>
          <Col></Col>
        </Row>
      </div>
      <div className="ms-5 ps-5 mt-5">
        <Row>
          <Col></Col>
          <Col className=" text-alpukat">
            <Form.Label>Kurir</Form.Label>
            <Form.Select onChange={(e) => setKurir(e.target.value)}>
              <option selected disabled>
                Pilih Kurir
              </option>
              <option value="jnt">JNT</option>
              <option value="jne">JNE</option>
              <option value="tiki">TIKI</option>
              <option value="si cepat">SI CEPAT</option>
              <option value="antar aja">ANTAR AJA</option>
            </Form.Select>
          </Col>
          <Col></Col>
        </Row>
      </div>
      <div className="text-end me-5 pe-5 mt-5 pt-5">
        <Button variant="lime text-putihan w-25" onClick={() => handleBayar()}>
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
