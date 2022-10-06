import Router, { useRouter } from "next/router";
import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Footer from "../../../components/Footer";
import HeaderClient from "../../../components/HeaderClient";
import axios from "axios";
import { getCookie } from "cookies-next";

export const getServerSideProps = async (context) => {
  const id = getCookie("idProduk", context);
  const getProduct = await axios.get(`https://altagp3.online/product/${id}`);
  const product = await getProduct;

  return {
    props: {
      produk: product.data,
    },
  };
};

const Detail = (props) => {
  const harga = 100000;
  const product = "kerajinan-botol";
  console.log(Router.query);
  console.log(props.produk);
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
          <b>{props.produk.data.nama_product}</b>
        </h1>
      </div>
      <div className="pt-0 p-5 me-5 ms-5">
        <div className="border-bottom border-gray border-2 text-end"></div>
      </div>
      <div id="product" className="mb-5">
        <Row className="p-0 m-0">
          <Col md={2}></Col>
          <Col md={8}>
            <Row className="p-0 m-0">
              <Col md={3} />
              <Row className="border border-2 border-lime rounded-2 bg-tea pt-2 ms-0">
                <Col md={3}>
                  <img
                    src="https://cdn-brilio-net.akamaized.net/news/2017/11/02/134250/698323-lampu-hias-botol-bekas.jpg"
                    alt=""
                    style={{ maxWidth: "100%", minHeight: "100%" }}
                    className="rounded-2"
                  />
                </Col>
                <Col md={9}>
                  <Row className="p-0 m-0">
                    <Col>
                      <h5>{props.produk.data.nama_product}</h5>
                      <br />
                      <h6>{props.produk.data.desc}</h6>

                      <h6>
                        <b>
                          {new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            currencyDisplay: "symbol",
                            minimumFractionDigits: 0,
                          }).format(props.produk.data.harga)}
                        </b>
                      </h6>
                      <h6>Stok : {props.produk.data.stok}</h6>
                    </Col>
                    <Col className="text-center">
                      <Button variant="lime">
                        <b className="text-putihan">Remove</b>
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <p></p>
              </Row>
              <p></p>
            </Row>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
