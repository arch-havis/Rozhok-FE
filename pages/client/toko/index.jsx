import Router from "next/router";
import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Footer from "../../../components/Footer";
import HeaderClient from "../../../components/HeaderClient";
import axios from "axios";
import { getCookie } from "cookies-next";
import Link from "next/link";

export const getServerSideProps = async () => {
  const getProduct = await axios.get("https://altagp3.online/products");
  const product = await getProduct;

  return {
    props: {
      produk: product.data,
    },
  };
};

const Index = (props) => {
  const harga = "Rp. 100.000";
  const product = "kerajinan-botol";

  const goProductName = () => {
    Router.push({
      pathname: `/client/toko/${product}`,
    });
  };

  console.log(props.produk.data);

  const token = getCookie("token");
  const [id, setId] = useState();
  console.log(id);
  const handleAdd = async (e) => {
    setId(e);
    await axios({
      method: "post",
      url: "https://altagp3.online/cart",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        id_barang: parseInt(e.target.parentElement.value),
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
      <div className="text-center p-5 text-lime">
        <h1>
          <b>Produk Kami</b>
        </h1>
      </div>
      <div className="pt-0 p-5 me-5 ms-5">
        <div className="border-bottom border-gray border-2 text-end">
          <Link href="/client/toko/cart">
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
          </Link>
        </div>
      </div>
      <div id="product" className="mb-5">
        <Row className="p-0 m-0">
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
                  <b className="text-alpukat">Add Cart</b>
                </Button>
                <p></p>
              </Col>
            );
          })}
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
