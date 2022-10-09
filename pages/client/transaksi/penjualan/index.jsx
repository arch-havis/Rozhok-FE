import React, { useState, useEffect } from "react";
import HeaderClient from "../../../../components/HeaderClient";
import Footer from "../../../../components/Footer";
import { Row, Col, Button } from "react-bootstrap";
import Router, { useRouter } from "next/router";
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
  return {
    props: {
      data: data,
    },
  };
};

const Index = (props) => {
  const [data, setData] = useState();
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
                {props.data.data.status.split("_").map((items) => {
                  return items.charAt(0).toUpperCase() + items.slice(1) + " ";
                })}
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
                  }).format(undefined)}
                </b>
              </p>
              <br></br>
              <br></br>
              <h4>
                <b>Informasi Porter</b>
              </h4>
              <p>
                <b>Nama :</b> {props.data.porter}
              </p>
              <p>
                <b>No. Telpon :</b> {props.data.porter}
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
      {props.data.data.barang_rosok === undefined ? (
        <></>
      ) : (
        props.data.data.barang_rosok.map((item, index) => {
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
        })
      )}
      <Footer />
    </div>
  );
};

export default Index;
