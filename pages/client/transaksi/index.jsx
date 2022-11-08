import React, { useState } from "react";
import HeaderClient from "../../../components/HeaderClient";
import Footer from "../../../components/Footer";
import { Row, Col, Form, Button, Table } from "react-bootstrap";
import axios from "axios";
import { getCookie } from "cookies-next";
import Router from "next/router";

export const getServerSideProps = async (context) => {
  const token = getCookie("token", context);
  const response = await fetch("https://rozhok.romodeus.site/transaksi/client", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  return {
    props: {
      data: data,
    },
  };
};

const Index = (props) => {
  console.log(props.data);
  ////////////////////////TEST///////////////////////////
  const token = getCookie("token");
  const [data, setData] = useState(props.data);
  const handleClick = (e) => {
    if (data === undefined) {
      getData(e);
    } else {
      setData();
    }
  };
  const getData = async (e) => {
    e.preventDefault();
    await axios({
      method: "get",
      url: "https://rozhok.romodeus.site/transaksi/client",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  ////////////////////// START ///////////////////////////////
  const [tipe, setTipe] = useState();
  const [status, setStatus] = useState();
  console.log(tipe, status);

  const handleFilter = async (e) => {
    e.preventDefault();
    await axios({
      method: "get",
      url: "https://rozhok.romodeus.site/transaksi/client",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        type_transaction: tipe,
        status: status,
      },
    })
      .then((response) => {
        console.log(response.data.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <HeaderClient />
      <div className="text-center p-5 text-lime">
        <h1>
          <b>Transaksi Anda</b>
        </h1>
      </div>
      <div className="pt-0 p-5 me-5 ms-5">
        <div className="border-bottom border-tea border-2 text-end"></div>
      </div>

      {/* //////////////////////////////TEST//////////////////////////////// */}
      {/* <Button onClick={(e) => handleClick(e)}>
        {data === undefined ? <>Kosong</> : <>Ada</>}
      </Button> */}

      <Row className="p-0 m-0">
        <Col md={2}></Col>
        <Col md={8}>
          {" "}
          <Row>
            <Col>
              <Form.Group className="mb-2">
                <Form.Label>
                  <b>Tipe Transaksi</b>
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setTipe(e.target.value)}
                >
                  <option disabled selected>
                    Tipe Transaksi
                  </option>
                  <option value="penjualan">Penjualan</option>
                  <option value="pembelian">Pembelian</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-2">
                <Form.Label>
                  <b>Status</b>
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option disabled selected>
                    Status
                  </option>
                  <option value="dikirim">Dikirim</option>
                  <option value="belum_bayar">Belum Bayar</option>
                  <option value="dibayar">Dibayar</option>
                  <option value="dalam_perjalanan">Dalam Perjalanan</option>
                  <option value="dibatalkan">Dibatalkan</option>
                  <option value="diterima">Diterima</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col className="text-center">
              <Button
                variant="lime w-50 text-white"
                onClick={(e) => handleFilter(e)}
              >
                Filter
              </Button>
              <div>
                <Button
                  variant="danger w-50"
                  onClick={() => window.location.reload()}
                >
                  Reset
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
        <Col></Col>
      </Row>

      <Row className="mt-5 text-alpukat text-center p-0 m-0">
        <Col md={1}></Col>
        <Col md={10}>
          <Table>
            <thead className="bg-lime">
              <tr>
                <th>No.</th>
                <th>Kode Transaksi</th>
                <th>Tipe Transaksi</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody className="border-lime border">
              {data === undefined ? (
                <></>
              ) : (
                data.data.map((items, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{items.kode_transaksi}</td>
                      <td>
                        {items.tipe_transaksi.charAt(0).toUpperCase() +
                          items.tipe_transaksi.slice(1)}
                      </td>
                      <td>
                        {items.status.split("_").map((items) => {
                          return (
                            items.charAt(0).toUpperCase() + items.slice(1) + " "
                          );
                        })}
                      </td>
                      <td>
                        <a
                          // href="/client/transaksi/penjualan"
                          className="text-alpukat text-decoration-none"
                          onClick={() =>
                            Router.push({
                              pathname: `/client/transaksi/${items.tipe_transaksi}`,
                              query: {
                                id: items.id_transaksi,
                                tipe: items.tipe_transaksi,
                              },
                            })
                          }
                        >
                          Detail
                        </a>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </Table>
        </Col>
        <Col></Col>
      </Row>

      <Footer />
    </div>
  );
};

export default Index;
