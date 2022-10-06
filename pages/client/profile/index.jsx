import React, { useState, useEffect } from "react";
import { Row, Col, Button, Table } from "react-bootstrap";
import Footer from "../../../components/Footer";
import HeaderClient from "../../../components/HeaderClient";
import AddModal from "../../../components/client-page/AddClientData";
import EditAlamat from "../../../components/client-page/Alamat";
import { getCookie } from "cookies-next";
import axios from "axios";

export const getServerSideProps = async (context) => {
  const resProv = await axios.get(
    "https://dev.farizdotid.com/api/daerahindonesia/provinsi"
  );
  const provinsi = resProv.data.provinsi;

  const token = getCookie("token", context);
  const alamat = await fetch(`https://altagp3.online/alamats`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const profile = await fetch("https://altagp3.online/client", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    props: {
      provinsi: provinsi,
      listAlamat: await alamat.json(),
      profile: await profile.json(),
    },
  };
};

const Index = (props) => {
  const [show, setShow] = useState(false);
  const [nama, setNama] = useState();
  console.log(nama);

  console.log(props.listAlamat.data);
  console.log(props.profile.data);

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

  const handleEditAdd = () => {
    setType("edit");
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
        alert(JSON.stringify(response.data.message));
        location.reload();
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
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.message);
        alert(response.data.message);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //////////////MODAL ALAMAT//////////////////

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
  const [namaProv, setNamaProv] = useState();
  const [namaKab, setNamaKab] = useState();
  const [namaKec, setNamaKec] = useState();

  console.log(namaProv, namaKab, namaKec);

  const handleProvinsi = (e) => {
    e.preventDefault();
    setNamaProv(e.target.options[e.target.options.selectedIndex].label);
    // console.log(e.target.options[e.target.options.selectedIndex].label);
    setProvinsi(e.target.value);
    // console.log(e.target.value);
  };

  /////////kabupaten
  const [kab, setKab] = useState([]);
  const [kabId, setKabId] = useState();

  const handleKab = (e) => {
    e.preventDefault();
    setNamaKab(e.target.options[e.target.options.selectedIndex].label);
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
  // console.log(kecId);
  const handleKec = (e) => {
    e.preventDefault();
    setNamaKec(e.target.options[e.target.options.selectedIndex].label);
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

  //////////////STATUS///////////////
  const [status, setStatus] = useState();
  console.log(status);

  const handleStatus = (e) => {
    e.preventDefault();
    setStatus(e.target.value);
  };

  //////////////////JALAN/////////////////
  const [jalan, setJalan] = useState();
  console.log(jalan);

  const handleJalan = (e) => {
    e.preventDefault();
    setJalan(e.target.value);
  };

  ////////TAMBAH ALAMAT//////////
  const handleTambahAlamat = async (e) => {
    e.preventDefault();
    await axios({
      method: "post",
      url: "https://altagp3.online/alamat",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        provinsi: namaProv,
        kota: namaKab,
        kecamatan: namaKec,
        status: status,
        jalan: jalan,
      },
    })
      .then((response) => {
        console.log(response.data.message);
        alert(response.data.message);
        location.reload();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  ////////////////EDIT/////////////////
  // const [edit, setEdit] = useState(false);
  // console.log(edit);
  // const editClose = () => setEdit(false);
  // const editShow = () => setEdit(true);
  const [id, setId] = useState();
  console.log(id);
  console.log(namaProv, namaKab, namaKec, status, jalan);
  const handleEditAlamat = async (e) => {
    e.preventDefault();
    await axios({
      method: "put",
      url: `https://altagp3.online/alamat/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        provinsi: namaProv,
        kota: namaKab,
        kecamatan: namaKec,
        status: status,
        jalan: jalan,
      },
    })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleDelAdd = async (e) => {
    await axios({
      method: "delete",
      url: `https://altagp3.online/alamat/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        console.log(error.data.message);
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
              <p>
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  currencyDisplay: "symbol",
                }).format(props.profile.data.total_penjualan)}
              </p>
            </Col>
            <Col></Col>
            <Col className="text-start">
              <b>Progress until next reward</b>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped bg-lime"
                  role="progressbar"
                  style={{ width: `${props.profile.data.bonus_terakhir}%` }}
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
                  <b>{props.listAlamat.data[0].user}</b>
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
            <Row className="p-0 m-0 mb-5">
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
                  <th>Jalan</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {props.listAlamat.data.map((items, index) => {
                  return (
                    <tr className="text-alpukat" key={index}>
                      <td>{index + 1}</td>
                      <td>{items.provinsi}</td>
                      <td>{items.kota}</td>
                      <td>{items.kecamatan}</td>
                      <td>{items.status}</td>
                      <td>{items.jalan}</td>
                      <td>
                        <a
                          onClick={() => {
                            handleEditAdd(), setId(items.id);
                          }}
                        >
                          Perbarui
                        </a>{" "}
                        |{" "}
                        <a
                          onClick={() => {
                            handleDelAdd(), setId(items.id);
                          }}
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
        props={props}
        handleProvinsi={handleProvinsi}
        kab={kab}
        handleKab={handleKab}
        kec={kec}
        handleKec={handleKec}
        handleStatus={handleStatus}
        handleJalan={handleJalan}
        handleTambahAlamat={handleTambahAlamat}
        handleEditAlamat={handleEditAlamat}
      />
      {/* <EditAlamat show={edit} editClose={editClose} /> */}
    </div>
  );
};

export default Index;
