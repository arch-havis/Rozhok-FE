import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import Cookies from "js-cookie";

import { Container } from "react-bootstrap";
import HeaderJunkStation from "../../../components/HeaderJunkStation";

const Index = () => {
  const router = useRouter();
  const [detailTransaksi, setDetailTransaksi] = useState([]);
  const [barangRosok, setBarangRosok] = useState([]);

  // get detail transaksi
  useEffect(() => {
    getDetailTransaksi();
  }, []);

  const getDetailTransaksi = () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: `https://altagp3.online/transaksi/${router.query.transaksi_Id}/junk-station`,
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.data.barang_rosok));
        setDetailTransaksi(response.data.data);
        setBarangRosok(response.data.data.barang_rosok);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="bg-putih min-vh-100">
      <HeaderJunkStation />
      <Container className="py-4">
        <h2 className="text-end">Detail Transaksi</h2>

        {barangRosok.map((item) => {
          return (
            <div className="bg-tea mt-5 p-3 rounded-3 shadow-md" key={item?.id}>
              <h3 className="ms-1">Kategori: {item?.kategori}</h3>
              <div className="ms-2 ms-sm-5 d-flex justify-content-between mb-3">
                <p>
                  Berat{" "}
                  <span className="bg-putihan py-1 px-3"> {item?.berat} </span>{" "}
                  (kg)
                </p>
                <p>
                  Rp
                  <span className="bg-putihan py-1 px-3 ms-2">
                    {" "}
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      currencyDisplay: "symbol",
                    }).format(item?.harga)}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
        <div className="bg-alpukat d-flex justify-content-between align-content-center text-putih fw-bold py-2 px-3 rounded-3 mt-5">
          <p>Total</p>
          <p>
            {Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              currencyDisplay: "symbol",
            }).format(detailTransaksi.grand_total)}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Index;
