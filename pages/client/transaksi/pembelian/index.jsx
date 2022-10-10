import React, { useState, useEffect } from "react";
import HeaderClient from "../../../../components/HeaderClient";
import Footer from "../../../../components/Footer";
import { Row, Col, Button, Modal } from "react-bootstrap";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

export const getServerSideProps = async (context) => {
  const token = getCookie("token", context);
  const response = await fetch(
    `https://altagp3.online/transaksi/${context.query.id}/client/${context.query.status}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();

  const respTagihan = await fetch(
    `https://altagp3.online/tagihan/${context.query.id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const tagihan = await respTagihan.json();
  return {
    props: {
      data: data,
      tagihan: tagihan,
    },
  };
};

const Index = (props) => {
  console.log(props.tagihan);
  console.log(props.data);
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
                {props.data.data.status.split("_").map((items) => {
                  return items.charAt(0).toUpperCase() + items.slice(1) + " ";
                })}
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
                  }).format(props.data.data.grand_total)}
                </b>
              </p>
              <br></br>
              <br></br>
              <h4>
                <b>Kurir</b>
              </h4>
              <p>
                <b>{props.data.data.kurir.toUpperCase()}</b>
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
            <b>Nama :</b> {props.data.data.client.name}
          </p>
          <p>
            <b>No. Telpon :</b> {parseInt(props.data.data.client.no_telp)}
          </p>
          <p>
            <b>Provinsi :</b> {props.data.data.client.provinsi}
          </p>
          <p>
            <b>Kota / Kabupaten :</b> {props.data.data.client.kota}
          </p>
          <p>
            <b>Kecamatan :</b> {props.data.data.client.kecamatan}
          </p>
        </Col>
      </Row>
      <Row className="p-0 m-0 text-alpukat">
        <Col md={2}></Col>
        <Col md={8}>
          {props.data.data.produk.map((items, index) => {
            return (
              <Row
                className=" bg-tea border border-lime p-2 rounded-2"
                key={index}
              >
                <Col md={3}>
                  <img src={items.image_url} alt="" className="w-100" />
                </Col>
                <Col md={9} className="p-0 m-0 text-alpukat">
                  <h4></h4>
                  <h5>Jumlah : {items.qty}</h5>
                  <h6>
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      currencyDisplay: "symbol",
                    }).format(items.subtotal)}
                  </h6>
                </Col>
                <Col className="p-0 m-0"></Col>
              </Row>
            );
          })}
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
              <div>{parseInt(props.tagihan.data.no_va)}</div>
            </Col>
            <Col>
              <b>Bank</b>
              <div>{props.tagihan.data.bank.toUpperCase()}</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <b>Tipe Pembayaran</b>
              <div>
                {props.tagihan.data.tipe_pembayaran.split("_").map((items) => {
                  return items.charAt(0).toUpperCase() + items.slice(1) + " ";
                })}
              </div>
            </Col>
            <Col>
              <b>Total Harga</b>
              <div>
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  currencyDisplay: "symbol",
                }).format(props.tagihan.data.total_harga)}
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
