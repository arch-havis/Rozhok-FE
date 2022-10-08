import Link from "next/link";
import Router from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import cookie from "js-cookie";

import { Col, Row, Form, Button, Container } from "react-bootstrap";
import axios from "axios";

const Index = () => {
  const [dataProvinsi, setDataProvinsi] = useState([]);
  const [provinsiId, setProvinsiId] = useState("");
  const [dataKotaKab, setDataKotaKab] = useState([]);
  const [dataKecamatan, setDataKecamatan] = useState([]);
  const [kotaId, setKotaId] = useState("");

  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [foto, setFoto] = useState("");
  const [namaJs, setNamaJS] = useState("");
  const [namaPemilikJS, setNamaPemilikJS] = useState("");
  const [prov, setProv] = useState("");
  const [kec, setKec] = useState("");
  const [kab, setKab] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [jalan, setJalan] = useState("");

  const handleCancel = (e) => {
    e.preventDefault();
    Router.push({ pathname: "/junk-station/" });
  };

  // get list provinsi
  const getDataProvinsi = async () => {
    try {
      const res1 = await axios.get(
        "https://dev.farizdotid.com/api/daerahindonesia/provinsi"
      );
      setDataProvinsi(res1.data.provinsi);
    } catch (error) {
      alert(error);
    }
  };

  // render data API provinsi
  useEffect(() => {
    getDataProvinsi();
  }, []);

  // get ID Provinsi
  const handleKotaKab = (event) => {
    const getprovinsiid = event.target.value;
    setProvinsiId(getprovinsiid);
  };

  // get list kota/kabupaten
  const getDataKotaKab = async () => {
    try {
      const res2 = await axios.get(
        `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinsiId}`
      );
      setDataKotaKab(res2.data.kota_kabupaten);
    } catch (error) {
      console.log(error);
    }
  };

  // render data API Kota Kabupaten
  useEffect(() => {
    getDataKotaKab();
  }, [provinsiId]);

  // get ID Kota Kabupaten
  const handleKecamatan = (event) => {
    const getkecamatanid = event.target.value;
    setKotaId(getkecamatanid);
  };

  // get list kota/kabupaten
  const getDataKecamatan = async () => {
    try {
      const res2 = await axios.get(
        `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${kotaId}`
      );
      setDataKecamatan(res2.data.kecamatan);
    } catch (error) {
      console.log(error);
    }
  };

  // ini untuk render data API Kota Kabupaten
  useEffect(() => {
    getDataKecamatan();
  }, [kotaId]);

  const handlePostRegister = (e) => {
    e.preventDefault();
    var axios = require("axios");
    var data = JSON.stringify({
      // foto: foto,
      // email: "usop@gmail.com",
      // password: "usop123",
      // junk_station_name: "TPA BENOWO",
      // junk_station_owner: "usopp",
      // provinsi: "Jawa Timur",
      // kota: "Surabaya",
      // kecamatan: "Benowo",
      // no_telp: "09971250057",
      // jalan: "jl.Doremi",

      foto: foto,
      email: email,
      password: password,
      junk_station_name: namaJs,
      junk_station_owner: namaPemilikJS,
      provinsi: "Jawa Timur",
      kota: "Surabaya",
      kecamatan: "Benowo",
      no_telp: noTelp,
      jalan: jalan,
    });

    var config = {
      method: "post",
      url: "https://altagp3.online/junk-station",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        Router.push({ pathname: "/junk-station/" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Row
      className="p-0 p-lg-5 m-0 d-flex justify-content-center justify-content-xl-start"
      style={{
        backgroundImage: `url("/bg-login.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "60.9rem",
        maxWidth: "100%",
      }}
    >
      <Col xl="7" lg="8" md="10" sm="12" className=" mt-2 ">
        <Form
          //   onSubmit={(e) => handleSubmit(e)}
          className="border border-lime p-5 bg-putihan text-alpukat rounded-3 border-2"
        >
          {/* <p>{dataProvinsi}</p> */}
          {/* <p>{dataKotaKab}</p> */}
          {/* <p>{dataKecamatan}</p> */}
          {/* {foto} */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nama Junk Station</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan nama junk station"
              onChange={(e) => setNamaJS(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nama Pemilik</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan nama pemilik junk station"
              onChange={(e) => setNamaPemilikJS(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Masukkan email anda"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Masukkan password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>No Telepon</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan no telepon anda"
              onChange={(e) => setNoTelp(e.target.value)}
            />
          </Form.Group>
          <div className="mb-3">
            <Form.Label>Alamat</Form.Label>
            <div className="d-flex flex-sm-row flex-column">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => handleKotaKab(e)}
              >
                <option>Provinsi</option>
                {dataProvinsi.map((daerah) => {
                  return (
                    <option value={daerah.id} key={daerah.id}>
                      {daerah.nama}
                    </option>
                  );
                })}
              </Form.Select>
              <Form.Select
                aria-label="Default select example"
                className="mx-0 mx-sm-2 my-2 my-sm-0"
                onChange={(e) => handleKecamatan(e)}
              >
                <option>Kab/Kota</option>
                {dataKotaKab.map((daerah) => {
                  return (
                    <option value={daerah.id} key={daerah.id_provinsi}>
                      {daerah.nama}
                    </option>
                  );
                })}
              </Form.Select>

              <Form.Select
                aria-label="Default select example"
                onChange={(e) => handleKecamatan(e)}
              >
                <option>Kecamatan</option>
                {dataKecamatan.map((daerah) => {
                  return (
                    <option value={daerah.id_kota} key={daerah.id_kota}>
                      {daerah.nama}
                    </option>
                  );
                })}
              </Form.Select>
            </div>
          </div>
          <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Jalan</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Masukkan alamat nama jalan atau desa"
              onChange={(e) => setJalan(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Label>Foto Junk Station</Form.Label>
            <Form.Control
              type="file"
              size="md"
              onChange={(e) => {
                setFoto(URL.createObjectURL(e.target.files[0]));
              }}
            />
          </Form.Group>

          <div className="d-flex justify-content-end">
            <Button
              type="submit"
              variant="danger"
              onClick={(e) => handleCancel(e)}
              style={{ color: "white" }}
            >
              Cancel
            </Button>
            <Button
              className="ms-5"
              variant="lime"
              type="submit"
              style={{ color: "white" }}
              onClick={(e) => handlePostRegister(e)}
            >
              Register
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default Index;
