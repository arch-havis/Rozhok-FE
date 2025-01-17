import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";

import HeaderAdmin from "../../../components/HeaderAdmin";
import Footer from "../../../components/Footer";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import Cookies from "js-cookie";

const Index = () => {
  const [kategori, setKategori] = useState([]);
  const router = useRouter();

  // get Kategori
  useEffect(() => {
    getKategori();
  }, []);

  const getKategori = () => {
    var axios = require("axios");
    var data = "";

    var config = {
      method: "get",
      url: "https://rozhok.romodeus.site/categories",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${Cookies}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data.data));
        setKategori(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // delete kategori
  const handleDeleteKategori = (id) => {
    var axios = require("axios");

    var config = {
      method: "delete",
      url: `https://rozhok.romodeus.site/category/${id}`,
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        getKategori();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // goto tambah kategori
  const gotoTambahKategori = () => {
    Router.push({
      pathname: `/admin/kategori/tambah-kategori`,
    });
  };

  // goto edit kategori
  const handleEditKategori = (id) => {
    Router.push({
      pathname: `/admin/kategori/edit-kategori`,
      query: {
        kategori: id,
      },
    });
  };

  return (
    <div>
      <HeaderAdmin />
      <Container>
        <div className="text-end">
          <Button
            variant="lime mt-5 mb-2 fw-bold text-putih "
            onClick={() => gotoTambahKategori()}
          >
            Tambah Kategori
          </Button>
        </div>
        <Table responsive>
          <thead className="bg-alpukat text-putihan">
            <tr>
              <th>No.</th>
              <th>Kategori</th>
              <th>Harga Client</th>
              <th>Harga Mitra</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="border-tea border">
            {kategori.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td> {index + 1} </td>
                  <td>{item.nama}</td>
                  <td>
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      currencyDisplay: "symbol",
                    }).format(item.harga_client)}
                  </td>

                  <td>
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      currencyDisplay: "symbol",
                    }).format(item.harga_mitra)}
                  </td>
                  <td>
                    <Button
                      variant="putihan"
                      className="text-alpukat text-decoration-none p-0"
                      onClick={() => handleEditKategori(item.id)}
                    >
                      Edit
                    </Button>
                    {" | "}
                    <Button
                      variant="putihan"
                      className="text-alpukat text-decoration-none p-0"
                      onClick={() => handleDeleteKategori(item.id)}
                    >
                      Hapus
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
      <Footer />
    </div>
  );
};

export default Index;
