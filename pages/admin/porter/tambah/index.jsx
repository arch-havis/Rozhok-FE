import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../../../components/HeaderAdmin";
import Footer from "../../../../components/Footer";
import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";

export const getServerSideProps = async () => {
  const resProv = await axios.get(
    "https://dev.farizdotid.com/api/daerahindonesia/provinsi"
  );
  const provinsi = resProv.data.provinsi;
  return {
    props: {
      provinsi: provinsi,
    },
  };
};

const Index = (props) => {
  //   const getDataProvinsi = async () => {
  //     try {
  //       const res1 = await axios.get(
  //         "https://dev.farizdotid.com/api/daerahindonesia/provinsi"
  //       );
  //       setDataProvinsi(res1.data.provinsi);
  //     } catch (error) {
  //       alert(error);
  //     }
  //   };

  const [provinsi, setProvinsi] = useState();

  const handleProvinsi = (e) => {
    e.preventDefault();
    setProvinsi(e.target.value);
  };

  /////////kabupaten
  const [kab, setKab] = useState([]);
  const [kabId, setKabId] = useState();

  const handleKab = (e) => {
    e.preventDefault();
    setKabId(e.target.value);
  };

  const getKab = async () => {
    axios
      .get(
        `http://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinsi}`
      )
      .then((response) => {
        // console.log(response.data.kota_kabupaten);
        setKab(response.data.kota_kabupaten);
        // console.log(kab);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getKab();
  }, [provinsi]);

  ////////////////kecamatan
  const [kec, setKec] = useState([]);
  const [kecId, setKecId] = useState();
  console.log(kecId);
  const handleKec = (e) => {
    e.preventDefault();
    setKecId(e.target.value);
  };
  const getKec = async () => {
    axios
      .get(
        `http://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${kabId}`
      )
      .then((response) => {
        // console.log(response.data.kecamatan);
        setKec(response.data.kecamatan);
      });
  };
  useEffect(() => {
    getKec();
  }, [kabId]);

  return (
    <div>
      <HeaderAdmin />
      <Row>
        <Col md={2}></Col>
        <Col md={8} className="p-5 bg-putih mt-5 border border-lime rounded-2">
          <Row id="atas">
            <Col>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text"></Form.Control>
                <Form.Label className="mt-2">Harga Klien</Form.Label>
                <Form.Control type="tel"></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"></Form.Control>
                <Form.Label className="mt-2">Password</Form.Label>
                <Form.Control type="password"></Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Row id="tengah" className="mt-5">
            <Row className=" mb-2">
              <Col>
                <Form.Label>Provinsi</Form.Label>
                <Form.Select
                  classname="text-alpukat"
                  onChange={(e) => handleProvinsi(e)}
                >
                  <option selected disabled>
                    Pilih Provinsi
                  </option>
                  {props.provinsi.map((item, index) => {
                    return (
                      <option value={item.id} key={index}>
                        {item.nama}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
              <Col>
                <Form.Label>Kabupaten / Kota</Form.Label>
                <Form.Select
                  className="text-alpukat"
                  onChange={(e) => handleKab(e)}
                >
                  <option selected disabled>
                    Pilih Kab./Kota
                  </option>
                  {kab.map((item, index) => {
                    return (
                      <option value={item.id} key={index}>
                        {item.nama}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
              <Col>
                <Form.Label>Kecamatan</Form.Label>
                <Form.Select
                  className="text-alpukat"
                  onChange={(e) => handleKec(e)}
                >
                  <option selected disabled>
                    Pilih Kec.
                  </option>
                  {kec.map((item, index) => {
                    return (
                      <option value={item.id} key={index}>
                        {item.nama}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Jalan</Form.Label>
              <Form.Control as="textarea" rows={3}></Form.Control>
            </Form.Group>
          </Row>

          <Row id="bawah" className="mt-5">
            <Col>
              <Button variant="lime text-putihan">Tambah</Button>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Col>
        <Col></Col>
      </Row>
      <Footer />
    </div>
  );
};

export default Index;
