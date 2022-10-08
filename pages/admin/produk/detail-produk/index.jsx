import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";
import HeaderAdmin from "../../../../components/HeaderAdmin";

const Index = () => {
  const router = useRouter();
  const [detailProduk, setDetailProduk] = useState([]);

  // getDetailProduk
  useEffect(() => {
    getDetailProduk();
  }, []);

  const getDetailProduk = () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: `https://altagp3.online/product/${router.query.id}`,
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data.data));
        setDetailProduk(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="bg-putih">
      <HeaderAdmin />
      <Container className="min-vh-100 pt-5">
        <h2 className="text-end">Detail Produk</h2>
        <div className="pt-5 d-flex flex-column flex-md-row">
          <Col className="">
            <img
              src={detailProduk.image_url}
              alt=""
              className="w-100 rounded-3"
            />
          </Col>
          <Col className=" d-flex flex-column justify-content-center px-md-3 fs-5 mt-3 mt-md-0 mt-lg-5">
            <p className="text-capitalize"> {detailProduk.nama_product} </p>
            <p>
              {" "}
              {Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                currencyDisplay: "symbol",
              }).format(detailProduk?.harga)}{" "}
            </p>
            <p>Stok: {detailProduk.stok}</p>
            <p className="fs-6 border border-1 border-dark p-2 rounded-2 bg-light fs-5">
              {detailProduk.desc}
            </p>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default Index;
