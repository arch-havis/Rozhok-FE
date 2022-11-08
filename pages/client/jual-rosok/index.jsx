import axios from "axios";
import { getCookie } from "cookies-next";
import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Table,
  Modal,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import Footer from "../../../components/Footer";
import HeaderClient from "../../../components/HeaderClient";

export const getServerSideProps = async (context) => {
  const token = getCookie("token", context);
  const getList = await fetch("https://rozhok.romodeus.site/penjualan/client", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const list = await getList.json();

  const getKat = await fetch("https://rozhok.romodeus.site/categories");
  const kat = await getKat.json();
  return {
    props: {
      listRosok: list.data,
      kat: kat.data,
    },
  };
};

const Index = (props) => {
  const token = getCookie("token");

  const [status, setStatus] = useState();
  const [idJual, setIdJual] = useState();

  const [show, setShow] = useState(false);
  const [berat, setBerat] = useState();
  const [id, setId] = useState();
  const [harga, setHarga] = useState();
  let est = harga * berat;
  console.log(idJual);
  // console.log(props.listRosok);
  // console.log(props.kat);
  // console.log(harga, berat);
  // console.log(est);
  // console.log(status);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleBerat = (e) => {
    e.preventDefault();
    setBerat(e.target.value);
  };

  const handleTambah = async () => {
    await axios({
      method: "post",
      url: "https://rozhok.romodeus.site/penjualan/client",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        id_kategori: parseInt(id),
      },
    })
      .then((response) => {
        console.log(response.data.message);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleUpdate = async () => {
    await axios({
      method: "put",
      url: `https://rozhok.romodeus.site/penjualan/${idJual}/client`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        id_kategori: parseInt(id),
      },
    })
      .then((response) => {
        console.log(response.data.message);
        alert(response.data.message);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleDelete = async () => {
    await axios({
      method: "delete",
      url: `https://rozhok.romodeus.site/penjualan/${idJual}/client`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data.message);
        alert(response.data.message);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleProses = async () => {
    await axios({
      method: "post",
      url: `https://rozhok.romodeus.site/transaksi/client`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data.message);
        alert(response.data.message);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <HeaderClient />
      <Row className="p-0 m-0">
        <Col md={2} className="p-0 m-0"></Col>
        <Col
          md={8}
          className="p-5 mt-5 mb-5 border border-2 border-alpukat rounded-2"
        >
          <Row className="p-5">
            <Row className="p-0 m-0 mb-5">
              <Col></Col>
              <Col></Col>
              <Col className="text-end p-0">
                <Button
                  variant="lime text-putihan border border-alpukat"
                  onClick={() => {
                    setStatus("tambah"), handleShow();
                  }}
                >
                  Tambah Transaksi
                </Button>
              </Col>
            </Row>
            <Row lassName="p-0 m-0 mb-5">
              <Table className="border border-tea border-1">
                <thead className="bg-lime text-putihan text-center">
                  <tr>
                    <th>No.</th>
                    <th>Kategori</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {props.listRosok.map((items, index) => {
                    return (
                      <tr className="text-alpukat text-center" key={index}>
                        <td>{index + 1}</td>
                        <td className="text-uppercase">{items.kategori}</td>
                        <td>
                          <a
                            onClick={() => {
                              setStatus("edit"),
                                handleShow(),
                                setIdJual(items.id_penjualan);
                            }}
                            className="text-alpukat"
                          >
                            Perbarui
                          </a>{" "}
                          |{" "}
                          <a
                            onClick={() => {
                              handleDelete(), setIdJual(items.id_penjualan);
                            }}
                            className="text-alpukat"
                          >
                            Hapus
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Row>
            <Row className="p-0 m-0 mb-5">
              <Col></Col>
              <Col></Col>
              <Col className="pe-0 me-0 text-end">
                <Button
                  variant="lime text-putihan border border-alpukat mt-3"
                  onClick={handleProses}
                >
                  Proses Transaksi
                </Button>
              </Col>
            </Row>
          </Row>
        </Col>
        <Col md={2} className="p-0 m-0"></Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Transaksi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-2">
            <Form.Label>
              <b>Kategori</b>
            </Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                setId(e.target.value),
                  setHarga(
                    props.kat[e.target.options.selectedIndex - 1].harga_client
                  );
              }}
            >
              <option disabled selected>
                Kategori
              </option>
              {props.kat.map((items, index) => {
                return (
                  <option value={items.id} key={index}>
                    {items.nama}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>
              <b>Berat (kg)</b>
            </Form.Label>
            <FloatingLabel
              controlId="floatingInput"
              label="Berat Barang"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="3"
                onChange={(e) => handleBerat(e)}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>
              <b>Estimasi</b>
            </Form.Label>
            <FloatingLabel
              controlId="floatingInput"
              label="Estimasi Harga"
              className="mb-3"
            >
              <Form.Control
                type="text"
                disabled
                value={new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  currencyDisplay: "symbol",
                }).format(est)}
              />
            </FloatingLabel>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={status === "tambah" ? handleTambah : handleUpdate}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </div>
  );
};

export default Index;
