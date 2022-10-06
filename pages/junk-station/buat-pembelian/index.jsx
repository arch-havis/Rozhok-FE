import React, { useEffect, useState } from "react";
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
import { FiEdit } from "react-icons/fi";
import { AiFillCheckCircle, AiTwotoneDelete } from "react-icons/ai";
import Cookies from "js-cookie";
import Footer from "../../../components/Footer";

const Index = () => {
  const [pembelian, setPembelian] = useState([]);
  const [kategori, setKategori] = useState([]);
  const [idKategori, setIdKategori] = useState(0);
  const [idPembelian, setIdPembelian] = useState(0);
  // const [idPembelianHapus, setIdPembelianHapus] = useState(0);
  const [berat, setBerat] = useState(0);
  const [harga, setHarga] = useState(0);

  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const handleClose = () => setShow(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleCloseAlert = () => setShowAlert(false);
  const handleShow = () => setShow(true);
  const handleShowEdit = (idPembelian) => {
    setIdPembelian(idPembelian);
    setShowEdit(true);
  };
  const handleShowAlert = () => setShowAlert(true);

  // get Kategori
  useEffect(() => {
    getKategori();
  }, []);

  const getKategori = () => {
    var axios = require("axios");
    var data = "";

    var config = {
      method: "get",
      url: "https://altagp3.online/categories",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.data));
        setKategori(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // get pembelian
  useEffect(() => {
    getPembelian();
  }, []);

  const getPembelian = () => {
    var axios = require("axios");
    var data = "";

    var config = {
      method: "get",
      url: "https://altagp3.online/pembelian/junk-station",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.data));
        setPembelian(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // post pembelian
  const tambahPembelian = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      kategori: parseInt(idKategori),
      berat: parseInt(berat),
      harga: parseInt(harga),
    });

    var config = {
      method: "post",
      url: "https://altagp3.online/pembelian/junk-station",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        getPembelian();
        setShow(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // put Pembelian
  const editPembelian = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      kategori: parseInt(idKategori),
      berat: parseInt(berat),
      harga: parseInt(harga),
    });

    var config = {
      method: "put",
      url: `https://altagp3.online/pembelian/${idPembelian}/junk-station`,
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        getPembelian();
        setShowEdit(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const hapusPembelian = (id) => {
    console.log(id);
    var axios = require("axios");

    var config = {
      method: "delete",
      url: `https://altagp3.online/pembelian/${id}/junk-station`,
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        getPembelian();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="bg-putih min-vh-100">
      <HeaderJunkStation />
      <Container className="pt-3">
        <h4 className="border-bottom  border-3 border-dark text-center">
          Daftar Pembelian Rosok
        </h4>
        <div className="text-end mt-5">
          <Button
            variant="lime"
            className="fw-bold text-putih "
            onClick={handleShow}
          >
            Tambah Pembelian
          </Button>
        </div>

        {/* modal tambah pembelian */}
        <Modal show={show} onHide={handleClose}>
          <div className="px-5">
            <h3 className="mx-auto text-center pt-4 pb-1 border-bottom border-3 border-dark">
              Beli Rosok
            </h3>
          </div>
          <Modal.Body>
            <Form
              //   onSubmit={(e) => handleSubmit(e)}
              className=" bg-putihan text-alpukat rounded-3 "
            >
              <div className="mb-3">
                <Form.Label>Kategori</Form.Label>
                <div className="d-flex flex-sm-row flex-column">
                  <Form.Select aria-label="Default select example">
                    <option selected disabled>
                      Pilih Kategori
                    </option>
                    {kategori.map((item) => {
                      return (
                        <option
                          key={item.id}
                          onClick={() => setIdKategori(item.id)}
                        >
                          {item.nama}
                        </option>
                      );
                    })}
                  </Form.Select>
                </div>
              </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Berat (kg)</Form.Label>
                <Form.Control
                  type="number"
                  onChange={(e) => setBerat(e.target.value)}
                  // placeholder="Masukkan no telepon anda"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Harga (Rp)</Form.Label>
                <Form.Control
                  type="number"
                  // placeholder="Masukkan no telepon anda"
                  onChange={(e) => setHarga(e.target.value)}
                />
              </Form.Group>
            </Form>
            <div className="d-flex justify-content-end ">
              <Button
                variant="danger"
                className="me-2 px-3"
                onClick={handleClose}
              >
                Batal
              </Button>
              <Button
                variant="lime"
                className="text-putih"
                onClick={() => tambahPembelian()}
              >
                Tambahkan
              </Button>
            </div>
          </Modal.Body>
        </Modal>

        {/* modal edit pembelian */}
        <Modal show={showEdit} onHide={handleCloseEdit}>
          <div className="px-5">
            <h3 className="mx-auto text-center pt-4 pb-1 border-bottom border-3 border-dark">
              Edit Pembelian Rosok
            </h3>
          </div>
          <Modal.Body>
            <Form
              //   onSubmit={(e) => handleSubmit(e)}
              className=" bg-putihan text-alpukat rounded-3 "
            >
              <div className="mb-3">
                <Form.Label>Kategori</Form.Label>
                <div className="d-flex flex-sm-row flex-column">
                  <Form.Select aria-label="Default select example">
                    <option selected disabled>
                      Pilih Kategori
                    </option>
                    {kategori.map((item) => {
                      return (
                        <option
                          key={item.id}
                          onClick={() => setIdKategori(item.id)}
                        >
                          {item.nama}
                        </option>
                      );
                    })}
                  </Form.Select>
                </div>
              </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Berat (kg)</Form.Label>
                <Form.Control
                  type="number"
                  onChange={(e) => setBerat(e.target.value)}
                  // placeholder="Masukkan no telepon anda"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Harga (Rp)</Form.Label>
                <Form.Control
                  type="number"
                  // placeholder="Masukkan no telepon anda"
                  onChange={(e) => setHarga(e.target.value)}
                />
              </Form.Group>
            </Form>
            <div className="d-flex justify-content-end ">
              <Button
                variant="danger"
                className="me-2 px-3"
                onClick={handleCloseEdit}
              >
                Batal
              </Button>
              <Button
                variant="lime"
                className="text-putih"
                onClick={() => editPembelian()}
              >
                Simpan
              </Button>
            </div>
          </Modal.Body>
        </Modal>

        {/* tabel */}
        <Table responsive="md" className="bg-tea mt-3">
          <thead className="bg-alpukat text-putih ">
            <tr className="">
              <th className="text-center">No</th>
              <th>Kategori</th>
              <th colSpan={2} className=" text-center"></th>
            </tr>
          </thead>
          <tbody>
            {pembelian.map((item, index) => {
              return (
                <tr key={item.id_pembelian}>
                  <td className=" text-center">{index + 1}</td>
                  <td className=" ">{item.kategori}</td>
                  <td className="text-end ">
                    <button
                      className="p-0 bg-tea border-0 "
                      onClick={() => handleShowEdit(item.id_pembelian)}
                    >
                      <FiEdit size={25} className="text-alpukat " />
                    </button>
                  </td>
                  <td className="text-center ">
                    <button
                      className="p-0 bg-tea border-0  "
                      onClick={() => hapusPembelian(item.id_pembelian)}
                    >
                      <AiTwotoneDelete size={25} className="text-alpukat" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <div className="text-end">
          <Button
            variant="alpukat"
            className="px-4"
            onClick={() => setShowAlert(true)}
          >
            Beli
          </Button>
        </div>

        {/* alert */}
        <Modal show={showAlert} onHide={handleCloseAlert}>
          <Modal.Body className="bg-lime rounded-3">
            <div className="text-center">
              <AiFillCheckCircle size={50} className="text-alpukat" />
              <h2 calassName="text-alpukat">Selamat !!!</h2>
              <p className="fs-4">Pembelian rosok berhasil dilakukan</p>
            </div>
          </Modal.Body>
        </Modal>
      </Container>
      <Footer />
    </div>
  );
};

export default Index;
