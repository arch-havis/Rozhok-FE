import Cookies from "js-cookie";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { Container, Button, Table } from "react-bootstrap";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiDetail } from "react-icons/bi";

import HeaderAdmin from "../../../components/HeaderAdmin";

const Index = () => {
  const [allProduk, setAllProduk] = useState([]);

  const gotoDetailProduk = () => {
    Router.push({ pathname: "/admin/produk/detail-produk" });
  };

  const gotoTambahProduk = () => {
    Router.push({ pathname: "/admin/produk/tambah-produk" });
  };

  // getAllProduk
  useEffect(() => {
    getAllProduk();
  }, []);

  const getAllProduk = () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://altagp3.online/products",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.data));
        setAllProduk(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // deleteProduk
  const handleDeleteProduk = (id) => {
    var axios = require("axios");

    var config = {
      method: "delete",
      url: `https://altagp3.online/product/${id}`,
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        getAllProduk();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="bg-putih">
      <HeaderAdmin />
      <Container className="min-vh-100">
        <h4 className="border-bottom  border-3 border-dark text-center mt-3">
          Daftar Produk
        </h4>
        <div className=" text-end mt-5">
          <Button
            variant="lime"
            className="fw-bold text-putih px-3"
            onClick={() => gotoTambahProduk()}
          >
            Tambah Produk
          </Button>
        </div>
        <Table responsive="xl" className="bg-tea mt-3">
          <thead className="bg-alpukat text-putih ">
            <tr className="">
              <th className="text-center">No</th>
              <th>Nama Produk</th>
              <th colSpan={4} className="text-center">
                Stok
              </th>
              <th></th>
              <th></th>
              <th></th>
              <th>Harga</th>
              <th colSpan={2} className=" text-center"></th>
            </tr>
          </thead>
          <tbody>
            {allProduk.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td className=" text-center"> {index + 1} </td>
                  <td className=" ">{item.nama_product}</td>
                  <td colSpan={4} className="text-center">
                    {item.stok}
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className=" ">{item.harga}</td>
                  <td className="text-end ">
                    <button
                      className="p-0 bg-tea border-0 "
                      onClick={() => gotoDetailProduk(item.id)}
                    >
                      <BiDetail size={25} className="text-alpukat " />
                    </button>
                  </td>
                  <td className="text-center ">
                    <button
                      className="p-0 bg-tea border-0  "
                      onClick={() => handleDeleteProduk(item.id)}
                    >
                      <AiTwotoneDelete size={25} className="text-alpukat" />
                    </button>
                  </td>
                  {/* <td className="text-center "></td> */}
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
