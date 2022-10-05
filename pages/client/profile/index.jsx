import React, { useState } from "react";
import { Row, Col, Button, Table } from "react-bootstrap";
import Footer from "../../../components/Footer";
import HeaderClient from "../../../components/HeaderClient";
import AddModal from "../../../components/client-page/AddClientData";
import { getCookie } from "cookies-next";
import axios from "axios";

const Index = () => {
  const [show, setShow] = useState(false);
  const [nama, setNama] = useState();
  console.log(nama);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [type, setType] = useState();

  let token = getCookie("token");
  console.log(getCookie("token"));

  const handleEditName = () => {
    setType("nama");
    handleShow();
  };

  const handleAddress = () => {
    setType("alamat");
    handleShow();
  };

  const handleInputUpdate = (e) => {
    e.preventDefault();
    setNama(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    var data = JSON.stringify({
      username: nama,
    });

    var config = {
      method: "put",
      url: "https://altagp3.online/client",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await axios
    .delete("https://altagp3.online/client", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response)=>{
      console.log(response.data.message);
      alert(response.data.message)
    })
    .catch((error)=> {
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
          <Row>
            <Col>
              <p>Total Profit</p>
              <p>Rp. 123.456.789</p>
            </Col>
            <Col></Col>
            <Col className="text-start">
              <b>Progress until next reward</b>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped bg-lime"
                  role="progressbar"
                  style={{ width: "70%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </Col>
          </Row>
          <Row className=" mt-3">
            <Col>
              <h3 className="text-alpukat">
                <p>
                  <b>Roronoa Zoro</b>
                </p>
              </h3>
            </Col>
            <Col></Col>
            <Col>
              <Button
                variant="lime text-putih border border-alpukat"
                onClick={(e) => handleEditName(e)}
              >
                Perbarui
              </Button>
            </Col>
          </Row>
          <Row className="p-5">
            <Row className="p-0 m-0">
              <Col></Col>
              <Col></Col>
              <Col className="text-end p-0">
                <Button
                  variant="lime text-putih border border-alpukat"
                  onClick={() => handleAddress()}
                >
                  Tambah Alamat
                </Button>
              </Col>
            </Row>
            <Table className="border border-tea border-1">
              <thead className="bg-alpukat text-putihan">
                <tr>
                  <th>No.</th>
                  <th>Provinsi</th>
                  <th>Kota / Kabupaten</th>
                  <th>Kecamatan</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-alpukat">
                  <td>1</td>
                  <td>Jawa Timur</td>
                  <td>Kediri</td>
                  <td>Ngadiluih</td>
                  <td>Utama</td>
                  <td>
                    <a href="" onClick={() => handleEdit()}>
                      Perbarui
                    </a>{" "}
                    | <a href="">Hapus</a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col>
              <Button
                variant="danger text-putih border border-alpukat mt-3"
                onClick={(e) => handleDelete(e)}
              >
                Hapus Akun
              </Button>
            </Col>
          </Row>
        </Col>
        <Col md={2} className="p-0 m-0"></Col>
      </Row>
      <Footer />
      <AddModal
        show={show}
        handleClose={handleClose}
        type={type}
        handleSubmit={handleSubmit}
        handleInputUpdate={handleInputUpdate}
      />
    </div>
  );
};

export default Index;
