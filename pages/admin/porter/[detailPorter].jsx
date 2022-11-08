import React, { useState, useEffect } from "react";
import HeaderAdmin from "../../../components/HeaderAdmin";
import Footer from "../../../components/Footer";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

const Index = () => {
  const [detailPorters, setDetailPorters] = useState([]);
  const [dataDashboard, setDataDashboard] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getDetailPorters();
    getDataDashboard();
  }, []);

  // Get Detail All Porters
  const getDetailPorters = async () => {
    try {
      const response = await axios.get(
        `https://rozhok.romodeus.site/porter/${router.query.idPorter}`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      setDetailPorters(response.data.data);
      console.log("ini response.data.data", JSON.stringify(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  const getDataDashboard = async () => {
    try {
      const response = await axios.get(
        `https://rozhok.romodeus.site/porter/${router.query.idPorter}/pendapatan`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      setDataDashboard(response.data.data);
      console.log(dataDashboard);
    } catch (error) {
      if (status === 400) {
        alert(error, "masih ada yang salah");
      }
    }
  };

  const formatPembelian = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    currencyDisplay: "symbol",
  }).format(dataDashboard.total_pembelian);

  const formatPenjualan = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    currencyDisplay: "symbol",
  }).format(dataDashboard.total_penjualan);

  const formatLaba = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    currencyDisplay: "symbol",
  }).format(dataDashboard.total_laba);
  return (
    <div>
      <HeaderAdmin />
      <Row className="p-0 m-0" key={detailPorters?.id}>
        <Col md={2} className="p-0"></Col>
        <Col md={8} className="bg-putih border border-2 border-tea p-3 mt-5">
          <p>
            <b>Nama</b> : {detailPorters?.name}
          </p>
          <p>
            <b>Email</b> : {detailPorters?.email}
          </p>
          <p>
            <b>No. Telpon</b> : {detailPorters?.no_telp}
          </p>
          <p>
            <b>Provinsi</b> : {detailPorters?.provinsi}
          </p>
          <p>
            <b>Kabupaten / Kota</b> : {detailPorters?.kota}
          </p>
          <p>
            <b>Kecamatan</b> : {detailPorters?.kecamatan}
          </p>
          <p>
            <b>Jalan</b> : {detailPorters?.jalan}
          </p>
          {/* <Row>
                        <Col>
                            <Form.Group className="">
                                <Form.Label>Tanggal Awal</Form.Label>
                                <Form.Control type="date" placeholder="Tanggal Awal"></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Tanggal Akhir</Form.Label>
                                <Form.Control type="date" placeholder="Tanggal Awal"></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button variant="lime text-white">Filter</Button>
                        </Col>
                    </Row> */}
          <Row className="mt-5">
            <Col>
              <Col className="p-2 bg-tea border border-lime rounded-2">
                <p>
                  <b>Total Laba</b>
                </p>
                {formatLaba}
              </Col>
            </Col>
            <Col>
              <Col className="p-2 bg-tea border border-lime rounded-2">
                <p>
                  <b>Total Penjualan</b>
                </p>
                {formatPenjualan}
              </Col>
            </Col>
            <Col>
              <Col className="p-2 bg-tea border border-lime rounded-2">
                <p>
                  <b>Total Pembelian</b>
                </p>
                {formatPembelian}
              </Col>
            </Col>
          </Row>
        </Col>
        <Col className="p-0"></Col>
      </Row>

      <Footer />
    </div>
  );
};

export default Index;
