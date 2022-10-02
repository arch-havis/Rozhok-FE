import React, { useState, useEffect } from "react";
import HeaderClient from "../../../../components/HeaderClient";
import Footer from "../../../../components/Footer";
import { Row, Col, Button, Modal } from "react-bootstrap";
import { useRouter } from "next/router";

const Index = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const harga = 100000;

  const jumlah = 5;
  let sub = harga * jumlah;

  return (
    <div className="text-alpukat">
      <HeaderClient />
      <Row className="mt-5 p-0 m-0">
        <Col></Col>
        <Col></Col>
        <Col className="p-0 m-0">
          <Row className="p-0 m-0">
            <Col>
              <Button variant="primary" className="w-100">
                Pembelian
              </Button>
            </Col>
            <Col>
              <Button variant="warning text-white" className="w-100">
                Tertunda
              </Button>
            </Col>
            <Col id="batas" className="p-0 m-0"></Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-5 mb-5 p-0 m-0">
        <Col id="data-kiri" className=" ps-5 ">
          <Row>
            <Col></Col>
            <Col></Col>
            <Col>
              <p>
                <b>Total</b>
                <br />
                <b>
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    currencyDisplay: "symbol",
                  }).format(159364782)}
                </b>
              </p>
              <br></br>
              <br></br>
              <h4>
                <b>Kurir</b>
              </h4>
              <p>
                <b>JNT</b>
              </p>
            </Col>
          </Row>
        </Col>
        <Col></Col>
        <Col id="data-kanan">
          <h4>
            <b>Pembeli</b>
          </h4>
          <p>
            <b>Nama :</b> Mikasa
          </p>
          <p>
            <b>No. Telpon :</b> 963852147
          </p>
          <p>
            <b>Provinsi :</b> Jawa Timur
          </p>
          <p>
            <b>Kota / Kabupaten :</b> Kediri
          </p>
          <p>
            <b>Kecamatan :</b> Krass
          </p>
        </Col>
      </Row>
      <Row className="p-0 m-0 text-alpukat">
        <Col md={2}></Col>
        <Col md={8}>
          <Row className=" bg-tea border border-lime p-2 rounded-2">
            <Col md={3}>
              <img
                src="https://cdn-brilio-net.akamaized.net/news/2017/11/02/134250/698323-lampu-hias-botol-bekas.jpg"
                alt=""
                className="w-100"
              />
            </Col>
            <Col md={9} className="p-0 m-0 text-alpukat">
              <h4>Kerajinan Botol</h4>
              <h5>Jumlah : 5</h5>
              <h6>
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  currencyDisplay: "symbol",
                }).format(743985621)}
              </h6>
            </Col>
            <Col className="p-0 m-0"></Col>
          </Row>
        </Col>
        <Col></Col>
      </Row>
      <Row className="p-0 m-0 mt-5">
        <Col md={2}></Col>
        <Col md={8} className="p-0 m-0">
          <Col className="p-0 m-0 text-end">
            <Button variant="lime text-white" onClick={handleShow}>
              Tagihan
            </Button>
          </Col>
        </Col>
        <Col></Col>
      </Row>
      <Footer />

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
                }).format(sub)}
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
    </div>
  );
};

export default Index;
