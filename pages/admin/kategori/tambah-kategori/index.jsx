import React, { useState } from "react";
import Router, { useRouter } from "next/router";
import Cookies from "js-cookie";

import HeaderAdmin from "../../../../components/HeaderAdmin";
import Footer from "../../../../components/Footer";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Index = () => {
  const router = useRouter();

  const [namaKategori, setNamaKategori] = useState("");
  const [hargaMitra, setHargaMitra] = useState("");
  const [hargaClient, setHargaClient] = useState("");
  const [desc, setDesc] = useState("");

  const handleBatal = () => {
    Router.push({
      pathname: `/admin/kategori`,
    });
  };

  const handleTambahKategori = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      nama_kategori: namaKategori,
      harga_mitra: parseInt(hargaMitra),
      harga_client: parseInt(hargaClient),
      desc: desc,
    });

    var config = {
      method: "post",
      url: "https://rozhok.romodeus.site/category",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        Router.push({
          pathname: `/admin/kategori`,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <HeaderAdmin />
      <Container className="py-5">
        <Row className="pb-5">
          <Col
            md={8}
            className="p-5 bg-putih  border border-lime rounded-2 mx-auto "
          >
            <Form.Group>
              <Form.Label>Nama Kategori</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setNamaKategori(e.target.value)}
              ></Form.Control>
              <Form.Label className="mt-2">Harga Klien (/kg)</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setHargaClient(e.target.value)}
              ></Form.Control>
              <Form.Label className="mt-2">Harga Mitra (/kg)</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setHargaMitra(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setDesc(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Row id="bawah" className="mt-5">
              <Col className="text-end">
                <Button variant="danger" onClick={() => handleBatal()}>
                  Batal
                </Button>
                <Button
                  variant="lime"
                  className="ms-3 text-putih fw-bold"
                  onClick={() => handleTambahKategori()}
                >
                  Tambah
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Index;
