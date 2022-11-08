import React, { useState } from "react";
import { Row, Col, Carousel, Table, Button } from "react-bootstrap";
import HeaderClient from "../../../components/HeaderClient";
import Footer from "../../../components/Footer";
import { setCookie, getCookie } from "cookies-next";
import axios from "axios";
import Router from "next/router";
// import { propTypes } from "react-bootstrap/esm/Image";

export const getServerSideProps = async () => {
  const response = await axios.get("https://rozhok.romodeus.site/categories");
  const categories = await response;

  const getProduct = await axios.get("https://rozhok.romodeus.site/products");
  const product = await getProduct;

  return {
    props: {
      kategori: categories.data,
      produk: product.data,
    },
  };
};

const Index = (props) => {
  const harga = "Rp. 100.000";
  console.log(props.kategori.data);
  console.log(props.produk.data);

  const token = getCookie("token");

  console.log(getCookie("token"));

  const [id, setId] = useState();
  console.log(id);

  const handleAdd = async (e) => {
    await axios({
      method: "post",
      url: "https://rozhok.romodeus.site/cart",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        id_barang: parseInt(e.target.id),
      },
    })
      .then((response) => {
        console.log(response.data.message);
        alert(response.data.message);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  return (
    <div>
      <HeaderClient />
      {/* ////////////////APA ITU ROZHOK///////////////////////////       */}
      <Row className="pt-5 mt-5 pe-0 me-0 ps-0 ms-0 mb-5">
        <Col md={3}></Col>
        <Col md={6} className="border border-lime rounded-2 text-alpukat p-5">
          <Row>
            <h1>
              <b>Apa itu Rozhok ?</b>
            </h1>
            <p>
              Rozhok adalah sebuah platform untuk menghubungkan masyarakat
              dengan pengepul untuk menjual barang yang tidak terpakai.
            </p>
          </Row>

          {/* /////////////LATAR MASALAH////////////////// */}

          <Row className="text-end bg-tea">
            <h3>
              <b>Latar Masalah</b>
            </h3>
            <Row>
              <Col className="">
                Sampah yang terbengkalai dan tidak tahu mau dijual kemana
              </Col>
              <Col md={1}>
                <h4>
                  <b>01</b>
                </h4>
              </Col>
            </Row>
            <Row>
              <Col className="">
                Ingin mendatangi pengepul, namun tidak punya banyak waktu luang
              </Col>
              <Col md={1}>
                <h4>
                  <b>02</b>
                </h4>
              </Col>
            </Row>
            <Row>
              <Col className="">
                Pengepul sering berkeliling namun ditolak dan tidak efektif
              </Col>
              <Col md={1}>
                <h4>
                  <b>03</b>
                </h4>
              </Col>
            </Row>
            <Row>
              <Col>
                Mempermudah pendaur ulang sampah untuk memilah dan
                mengkategorikan sampah
              </Col>
              <Col md={1}>
                <h4>
                  <b>04</b>
                </h4>
              </Col>
            </Row>
          </Row>

          <Row className="mt-3">
            <h1>
              <b>Solusi ?</b>
            </h1>
            <h3>Rozhok datang untuk menjawab.</h3>
            <p>
              Rozhok sebuah platform untuk mempertemukan masyarakat, pengepul
              dan juga tempat pembuangan sampah untuk bersama membangun saling
              berintegrasi menyelesaikan masalah pengelolaan sampah
            </p>
          </Row>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Carousel
        id="carousel"
        variant="dark"
        className="border-top-dark p-5 bg-tea mb-5"
      >
        {props.kategori.data.map((items, index) => {
          return (
            <Carousel.Item key={index} className="text-alpukat">
              <img
                className="d-block w-100"
                style={{ maxHeight: "500px" }}
                src="https://i0.wp.com/www.oakpark.com/wp-content/uploads/2022/06/Recycling_278963590.jpeg?fit=1200%2C800&ssl=1/800x400?text=First slide&bg=373940"
                alt="First slide"
              />
              <Carousel.Caption className="bg-tea border rounded-2 border-lime">
                <h3 className="text-uppercase">{items.nama}</h3>
                <p>
                  Harga Client :{" "}
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    currencyDisplay: "symbol",
                    minimumFractionDigits: 0,
                  }).format(items.harga_client)}{" "}
                  || Harga Mitra :{" "}
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    currencyDisplay: "symbol",
                    minimumFractionDigits: 0,
                  }).format(items.harga_mitra)}
                </p>
                <p>{items.desc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div id="produk" className="mt-5 mb-5 ps-5 pe-5 pt-5">
        <Row className="border border-lime text-alpukat rounded-2">
          <div
            id="banner"
            className="position-relative top-50 start-50 translate-middle text-center bg-tea w-50 border border-lime m-0 p-0 rounded-2"
          >
            <div>
              <Table>
                <thead>
                  <tr>
                    <th>Penjemputan</th>
                    <th>Fast Respond</th>
                    <th>Cash Tunai</th>
                  </tr>
                </thead>
                <tbody className="fs-6">
                  <td>100% tepat waktu</td>
                  <td>24 / 7 Support</td>
                  <td>100%</td>
                </tbody>
              </Table>
            </div>
          </div>
          <div className="text-center">
            <h1>
              <b>Produk Kami</b>
            </h1>
          </div>
          <div className="mb-5">
            <Row className="ps-5 pe-5">
              {props.produk.data.map((items, index) => {
                return (
                  <Col
                    md={3}
                    className="border border-2 border-lime rounded-2 bg-tea pt-2"
                    key={index}
                  >
                    <a
                      onClick={() => {
                        setCookie("idProduk", items.id),
                          Router.push({
                            pathname: `/client/toko/${items.nama_product}`,
                            query: {
                              id: items.id,
                            },
                          });
                      }}
                    >
                      <img
                        src={items.image_url}
                        alt=""
                        style={{ maxWidth: "100%" }}
                        className="rounded-2"
                      />
                    </a>
                    <h4>
                      <b>{items.nama_product}</b>
                    </h4>
                    <h5>
                      <b>Stok : {items.stok}</b>
                      <br></br>
                      <b>
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          currencyDisplay: "symbol",
                          minimumFractionDigits: 0,
                        }).format(items.harga)}
                      </b>
                    </h5>
                    <b>{items.desc}</b>
                    <br></br>
                    <Button
                      variant="lime border border-alpukat border-2"
                      value={items.id}
                      onClick={(e) => {
                        handleAdd(e);
                      }}
                    >
                      <b className="text-alpukat" id={items.id}>
                        Add Cart
                      </b>
                    </Button>
                    <p></p>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
