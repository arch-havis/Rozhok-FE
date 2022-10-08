import axios from "axios";
import Cookies from "js-cookie";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { Col, Row, Form, Button, Container } from "react-bootstrap";

const Index = () => {
  const [namaJs, setNamaJS] = useState("");
  const [namaPemilikJS, setNamaPemilikJS] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [jalan, setJalan] = useState("");

  const [kec, setKec] = useState("");
  const [kab, setKab] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [provinsi, setProvinsi] = useState();
  const [provId, setProvId] = useState();
  const [kabs, setKabs] = useState([]);
  const [kabId, setKabId] = useState();
  const [kecs, setKecs] = useState([]);
  const [kecId, setKecId] = useState();

  const handleCancel = () => {
    Router.push({ pathname: "/junk-station/profile" });
  };

  // Provinsi
  const handleProvinces = (item) => {
    // e.preventDefault();
    console.log("ini item dot id", item.id);
    setProvinsi(item.nama);
    setProvId(item.id);
  };

  const handleKab = (item) => {
    setKabId(item.id);
    setKab(item.nama);
  };

  console.log("ini ID Provinsi", provId);
  const getProv = async () => {
    try {
      const response = await axios.get(
        "https://dev.farizdotid.com/api/daerahindonesia/provinsi"
      );
      setProvinces(response.data.provinsi);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getProv();
  }, []);

  // kabupaten
  const getKab = async () => {
    axios
      .get(
        `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provId}`
      )
      .then((response) => {
        setKabs(response.data.kota_kabupaten);
        console.log(kabs);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getKab();
  }, [provId]);

  // kecamatan
  console.log(kecId);
  const handleKec = (item) => {
    setKecId(item.id);
    setKec(item.nama);
  };
  const getKec = async () => {
    axios
      .get(
        `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${kabId}`
      )
      .then((response) => {
        setKecs(response.data.kecamatan);
      });
  };
  useEffect(() => {
    getKec();
  }, [kabId]);

  const handleEditProfile = (e) => {
    e.preventDefault();
    var axios = require("axios");
    var data = JSON.stringify({
      junk_station_name: namaJs,
      junk_station_owner: namaPemilikJS,
      provinsi: provinsi,
      kota: kab,
      kecamatan: kec,
      no_telp: noTelp,
      jalan: jalan,
    });

    var config = {
      method: "put",
      url: "https://altagp3.online/junk-station/6",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        Router.push({ pathname: "/junk-station/profile" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
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
            {/* <p>
              {provinsi} {kec} {kab}
            </p> */}
            <h2 className="text-center">Edit Profile</h2>
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
                <Form.Select classname="text-alpukat">
                  <option selected disabled>
                    Pilih Provinsi
                  </option>
                  {provinces.map((item, index) => {
                    return (
                      <option
                        value={item}
                        key={index}
                        onClick={() => handleProvinces(item)}
                      >
                        {item.nama}
                      </option>
                    );
                  })}
                </Form.Select>
                <Form.Select className="text-alpukat">
                  <option selected disabled>
                    Pilih Kab./Kota
                  </option>
                  {kabs.map((item, index) => {
                    return (
                      <option
                        value={item}
                        key={index}
                        onClick={() => handleKab(item)}
                      >
                        {item.nama}
                      </option>
                    );
                  })}
                </Form.Select>

                <Form.Select
                  className="text-alpukat"
                  onChange={(e) => handleKec(e)}
                >
                  <option selected disabled>
                    Pilih Kec.
                  </option>
                  {kecs.map((item, index) => {
                    return (
                      <option
                        value={item.id}
                        key={index}
                        onClick={() => handleKec(item)}
                      >
                        {item.nama}
                      </option>
                    );
                  })}
                </Form.Select>
              </div>
            </div>
            <Form.Group
              className="my-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Jalan</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Masukkan alamat nama jalan atau desa"
                onChange={(e) => setJalan(e.target.value)}
              />
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Button
                variant="danger"
                onClick={() => handleCancel()}
                style={{ color: "white" }}
              >
                Cancel
              </Button>
              <Button
                className="ms-5"
                variant="lime"
                type="submit"
                style={{ color: "white" }}
                onClick={(e) => handleEditProfile(e)}
              >
                Simpan
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Index;
