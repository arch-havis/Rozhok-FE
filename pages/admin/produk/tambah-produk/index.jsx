import Cookies from "js-cookie";
import Link from "next/link";
import Router from "next/router";
import React, { useState } from "react";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import HeaderAdmin from "../../../../components/HeaderAdmin";

const Index = () => {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [namaProduk, setNamaProduk] = useState(null);
  const [stok, setStok] = useState(0);
  const [harga, setHarga] = useState(0);
  const [desc, setDesc] = useState("");

  // cancel
  const handleCancel = (e) => {
    e.preventDefault();
    Router.push({ pathname: "/admin/produk" });
  };

  // upload file
  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  // add Produk
  const handleTambahProduk = (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${Cookies.get("token")}`);

    var formdata = new FormData();
    formdata.append("nama_product", namaProduk);
    formdata.append("image_url", image);
    formdata.append("stok", parseInt(stok));
    formdata.append("harga", parseInt(harga));
    formdata.append("desc", desc);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://altagp3.online/product", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        // console.log(result);
        Router.push({ pathname: "/admin/produk" });
      })

      .catch((error) => console.log("error", error));
  };

  return (
    <div className="bg-putih">
      <HeaderAdmin />
      <Container className="min-vh-100 pt-3">
        <h4 className="border-bottom  border-3 border-dark text-center">
          Tambah Produk
        </h4>
        <Row>
          <Col xl="7" lg="8" md="10" sm="12" className=" mt-5 mx-auto">
            <Form
              //   onSubmit={(e) => handleSubmit(e)}
              className="border border-lime p-5 bg-putihan text-alpukat rounded-3 border-2"
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nama Produk</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  onChange={(e) => setNamaProduk(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Harga Produk</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  onChange={(e) => setHarga(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Stok</Form.Label>
                <Form.Control
                  type="number"
                  placeholder=""
                  onChange={(e) => setStok(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="my-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Deskiripsi Produk</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder=""
                  onChange={(e) => setDesc(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label>Foto Produk</Form.Label>
                <Form.Control type="file" size="lg" onChange={uploadToClient} />
              </Form.Group>

              <div className="d-flex justify-content-end">
                <Button
                  variant="danger"
                  onClick={(e) => handleCancel(e)}
                  style={{ color: "white" }}
                >
                  Batal
                </Button>
                <Button
                  className="ms-5"
                  variant="lime"
                  type="submit"
                  style={{ color: "white" }}
                  onClick={(e) => handleTambahProduk(e)}
                >
                  Tambahkan
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
