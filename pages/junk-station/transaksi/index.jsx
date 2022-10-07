import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import {
  Modal,
  Button,
  Container,
  Row,
  Form,
  Table,
  Alert,
} from "react-bootstrap";
import HeaderJunkStation from "../../../components/HeaderJunkStation";
import Cookies from "js-cookie";

const Index = () => {
  const router = useRouter();

  const [allTransaksi, setAllTransaksi] = useState([]);

  useEffect(() => {
    getAllTransaksi();
  }, []);

  // get All Transaksi
  const getAllTransaksi = () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://altagp3.online/transaksi/junk-station",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data.data));
        setAllTransaksi(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // get Detail Transaksi
  const getDetailTransaksi = (transaksiId) => {
    Router.push({
      pathname: `/junk-station/detail-transaksi`,
      query: {
        transaksi_Id: transaksiId,
      },
    });
  };

  return (
    <div className="bg-putih min-vh-100">
      <HeaderJunkStation />
      <Container className="pt-3">
        <h4 className="border-bottom  border-3 border-dark text-center">
          Daftar Transaksi
        </h4>
        <div className=" mt-5 d-flex flex-column flex-sm-row justify-content-end">
          <input type="date" className="rounded-2 border-1 border-dark" />
          <input
            type="date"
            className="rounded-2 border-1 border-dark mx-0 mx-sm-2 my-1 my-sm-0"
          />
          <Button variant="lime" className="fw-bold text-putih px-3">
            Filter
          </Button>
        </div>
        <Table responsive="xl" className="bg-tea mt-3">
          <thead className="bg-alpukat text-putih ">
            <tr className="">
              <th className="text-center">No</th>
              <th>Kode Transaksi</th>
              <th>Biaya Transaksi</th>
              <th>Tanggal Transaksi</th>
              <th colSpan={2} className=" text-center"></th>
            </tr>
          </thead>
          <tbody>
            {allTransaksi.map((item, index) => {
              return (
                <tr key={item.id_transaksi}>
                  <td className=" text-center"> {index + 1} </td>
                  <td className=" ">{item.kode_tf}</td>
                  <td className=" ">
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      currencyDisplay: "symbol",
                    }).format(item.harga_transaksi)}
                  </td>
                  <td>{item.tanggal_dibuat}</td>
                  <td className="text-end ">
                    <button
                      className="p-0 bg-tea border-0 text-decoration-underline text-alpukat"
                      onClick={() => getDetailTransaksi(item.id_transaksi)}
                    >
                      Detail
                    </button>
                  </td>
                  <td className="text-center "></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Index;
