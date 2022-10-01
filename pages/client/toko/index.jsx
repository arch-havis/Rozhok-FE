import Router from "next/router";
import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Footer from "../../../components/Footer";
import HeaderClient from "../../../components/HeaderClient";

const Index = () => {
  const harga = "Rp. 100.000";
  const product = "kerajinan-botol";
  const goProductName = () => {
    Router.push({
      pathname: `/client/toko/${product}`,
    });
  };
  return (
    <div>
      <HeaderClient />
      <div className="text-center p-5 text-lime">
        <h1>
          <b>Produk Kami</b>
        </h1>
      </div>
      <div className="pt-0 p-5 me-5 ms-5">
        <div className="border-bottom border-gray border-2 text-end">
          <a href="/client/toko/cart" className="text-alpukat">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </a>
        </div>
      </div>
      <div id="product" className="mb-5">
        <Row className="p-0 m-0">
          <Col
            md={3}
            className="border border-2 border-lime rounded-2 bg-tea pt-2"
          >
            <img
              src="https://cdn-brilio-net.akamaized.net/news/2017/11/02/134250/698323-lampu-hias-botol-bekas.jpg"
              alt=""
              style={{ maxWidth: "100%" }}
              className="rounded-2"
              onClick={goProductName}
            />
            <h6>
              <b>{harga}</b>
            </h6>
            <Button variant="lime border border-alpukat border-2">
              <b className="text-alpukat">Add To Cart</b>
            </Button>
            <p></p>
          </Col>
          <Col
            md={3}
            className="border border-2 border-lime rounded-2 bg-tea pt-2"
          >
            <img
              src="https://cdn-brilio-net.akamaized.net/news/2017/11/02/134250/698323-lampu-hias-botol-bekas.jpg"
              alt=""
              style={{ maxWidth: "100%" }}
              className="rounded-2"
              onClick={goProductName}
            />
            <h6>
              <b>{harga}</b>
            </h6>
            <Button variant="lime border border-alpukat border-2">
              <b className="text-alpukat">Add To Cart</b>
            </Button>
            <p></p>
          </Col>
          <Col
            md={3}
            className="border border-2 border-lime rounded-2 bg-tea pt-2"
          >
            <img
              src="https://cdn-brilio-net.akamaized.net/news/2017/11/02/134250/698323-lampu-hias-botol-bekas.jpg"
              alt=""
              style={{ maxWidth: "100%" }}
              className="rounded-2"
              onClick={goProductName}
            />
            <h6>
              <b>{harga}</b>
            </h6>
            <Button variant="lime border border-alpukat border-2">
              <b className="text-alpukat">Add To Cart</b>
            </Button>
            <p></p>
          </Col>
          <Col
            md={3}
            className="border border-2 border-lime rounded-2 bg-tea pt-2"
          >
            <img
              src="https://cdn-brilio-net.akamaized.net/news/2017/11/02/134250/698323-lampu-hias-botol-bekas.jpg"
              alt=""
              style={{ maxWidth: "100%" }}
              className="rounded-2"
              onClick={goProductName}
            />
            <h6>
              <b>{harga}</b>
            </h6>
            <Button variant="lime border border-alpukat border-2">
              <b className="text-alpukat">Add To Cart</b>
            </Button>
            <p></p>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
