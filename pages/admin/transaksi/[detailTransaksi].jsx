import Router, { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import HeaderAdmin from "../../../components/HeaderAdmin";
import { Card, Row, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "js-cookie";

const Index = () => {
  const router = useRouter();

  const [detailTransaksi, setDetailTransaksi] = useState([]);
  const [detailProduk, setDetailProduk] = useState([]);

  useEffect(() => {
    getDetailTransaksi();
  }, []);

  const getDetailTransaksi = async () => {
    try {
      const response = await axios.get(
        `https://altagp3.online/transaksi/${router.query.item}/admin`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      setDetailTransaksi(response.data.data);
      setDetailProduk(response.data.data.produk[0]);
      console.log(detailProduk);
    } catch (error) {
      console.log(error);
    }
  };

  const putDetailTransaksi = async () => {
    var axios = require("axios");

    var config = {
      method: "put",
      url: `https://altagp3.online/transaksi/${router.query.item}/admin`,
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setDetailTransaksi(response.data.data);
        Router.push({ pathname: "/admin/transaksi" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <HeaderAdmin />
      <div className="container">
        <h3 className="text-alpukat float-end mt-5 fw-bolder">
          Detail Transaksi
        </h3>
        <br />
        <br />
        <Row className="" style={{ marginTop: "100px" }}>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mt-4">
            <h4 className="text-alpukat mb-3">
              Kode Transaksi: {detailTransaksi?.kode_transaksi}
            </h4>
            <h4 className="text-alpukat mb-3">
              Total Harga:{" "}
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                currencyDisplay: "symbol",
              }).format(detailTransaksi?.grand_total)}
            </h4>{" "}
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-grid justify-content-end">
            <Card className="bg-lime border-1 border-lime shadow-sm">
              <Card.Body>
                <h4 className="text-alpukat">
                  Nama Pembeli: {detailTransaksi?.client?.name}
                </h4>
                <h4 className="text-alpukat">
                  Nomor HP: {detailTransaksi?.client?.no_telp}
                </h4>
                <h4 className="text-alpukat">
                  Domisili: Kecamatan {detailTransaksi?.client?.kecamatan},
                  Kota/Kab {detailTransaksi?.client?.kota}, Provinsi{" "}
                  {detailTransaksi?.client?.provinsi}
                </h4>
              </Card.Body>
            </Card>
          </div>
        </Row>
        <Card className="w-100 mt-4 bg-tea border-1 border-lime">
          <Row>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-flex">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                <Card.Img
                  src={detailProduk?.image_url}
                  className="img-fluid mt-4 ms-2"
                  style={{ height: "100px" }}
                />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                <Card.Body className="mt-3">
                  <Card.Title>
                    Nama Produk: {detailProduk?.product_name}
                  </Card.Title>
                  <Card.Title>Qty: {detailProduk?.qty}</Card.Title>
                  <Card.Title>
                    Harga produk:{" "}
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      currencyDisplay: "symbol",
                    }).format(detailProduk?.subtotal)}{" "}
                  </Card.Title>
                </Card.Body>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 "
              style={{ marginTop: "50px" }}
            >
              {detailTransaksi.status === "dibayar" ? (
                <h4 className="bg-lime text-white d-flex float-end text-center py-2 px-2 rounded-3 me-2">
                  {detailTransaksi.status}
                </h4>
              ) : (
                <>
                  {detailTransaksi.status === "belum_dibayar" ? (
                    <h4 className="bg-danger text-white d-flex float-end text-center py-2 px-2 rounded-3 me-2">
                      {detailTransaksi.status}
                    </h4>
                  ) : (
                    <h4 className="bg-info text-white d-flex float-end text-center py-2 px-2 rounded-3 me-2">
                      {detailTransaksi.status}
                    </h4>
                  )}
                </>
              )}
            </div>
          </Row>
        </Card>

        {detailTransaksi.status === "dibayar" ? (
          <Button
            variant="alpukat"
            className="text-white fw-bolder float-end mt-3"
            onClick={() => putDetailTransaksi()}
          >
            Kirim
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default Index;
