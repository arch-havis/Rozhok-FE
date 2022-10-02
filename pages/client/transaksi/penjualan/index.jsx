import React, { useState, useEffect } from "react";
import HeaderClient from "../../../../components/HeaderClient";
import Footer from "../../../../components/Footer";
import { Row, Col, Button } from "react-bootstrap";

export const getServerSideProps = async () => {
  const data = [
    {
      kategori: "Plastik",
      berat: 1,
      harga: new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        currencyDisplay: "symbol",
      }).format(743985621),
    },
    {
      kategori: "Besi",
      berat: 2.5,
      harga: new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        currencyDisplay: "symbol",
      }).format(923864751),
    },
  ];
  return {
    props: {
      data: data,
    },
  };
};

const Index = (props) => {
  console.log(props.data);

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
                Penjualan
              </Button>
            </Col>
            <Col>
              <Button variant="lime text-white" className="w-100">
                Sukses
              </Button>
            </Col>
            <Col className="p-0 m-0"></Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-5 mb-5 p-0 m-0">
        <Col id="data-kiri">
          <Row>
            <Col></Col>
            <Col></Col>
            <Col className=" ps-5 ">
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
                <b>Informasi Porter</b>
              </h4>
              <p>
                <b>Nama :</b> Eren
              </p>
              <p>
                <b>No. Telpon :</b> 321756948
              </p>
            </Col>
          </Row>
        </Col>
        <Col></Col>
        <Col id="data-kanan" className="p-0 m-0">
          <h4>
            <b>Penjual</b>
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
      {props.data.map((item, index) => {
        return (
          <Row key={index} className="p-0 m-0">
            <Col md={2}></Col>
            <Col md={8} className="bg-tea border-lime border mb-4 ">
              <Row>
                <Col md={3}></Col>
                <Col md={9}>
                  <Col>Kategori : {item.kategori}</Col>
                  <Col>Berat : {item.berat} kg</Col>
                  <Col>Harga : {item.harga}</Col>
                </Col>
              </Row>
            </Col>
          </Row>
        );
      })}
      <Footer />
    </div>
  );
};

export default Index;
