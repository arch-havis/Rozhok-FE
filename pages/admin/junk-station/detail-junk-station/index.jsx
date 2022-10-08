import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  AiFillAlert,
  AiFillBank,
  AiFillPhone,
  AiOutlineLock,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import HeaderAdmin from "../../../../components/HeaderAdmin";

const Index = () => {
  const router = useRouter();
  const [status, setStatus] = useState("");
  const [detailJS, setDetailJS] = useState([]);

  // get Detail JS
  useEffect(() => {
    getDetailJS();
  }, []);

  const getDetailJS = () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: `https://altagp3.online/junk-station/${router.query.id}`,
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.data));
        setDetailJS(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // edit StatusJS
  const editStatusJS = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      status_kemitraan: status,
    });

    var config = {
      method: "put",
      url: `https://altagp3.online/kemitraan/${router.query.id}`,
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        getDetailJS();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleTolakKemitraan = () => {
    setStatus("gagal_verifikasi");
    editStatusJS();
  };

  const handleTerimaKemitraan = () => {
    setStatus("tervirifikasi");
    editStatusJS();
  };

  return (
    <div className="bg-putih">
      <HeaderAdmin />
      <Container className="min-vh-100 pt-5">
        <h2 className="text-end">Detail Junk Station</h2>
        <div className="pt-5 d-flex flex-column flex-md-row">
          <Col className="">
            <img src={detailJS.image_url} alt="" className="w-100 rounded-3" />
          </Col>
          <Col className=" d-flex flex-column justify-content-center px-md-3 fs-5 mt-3 mt-md-0 mt-lg-5">
            <div className="d-flex ">
              <AiFillBank size={30} className="text-alpukat " />
              <p className="ms-1 mt-1  ">{detailJS.junk_station_name}</p>
            </div>
            <div className="d-flex ">
              <AiOutlineUser size={30} className="text-alpukat " />
              <p className="ms-1 mt-1  ">{detailJS.junk_station_owner}</p>
            </div>
            <div className="d-flex ">
              <AiFillPhone size={30} className="text-alpukat " />
              <p className="ms-1 mt-1  ">{detailJS.telp}</p>
            </div>
            <div className="d-flex ">
              <BiMap size={30} className="text-alpukat " />
              <p className=" ms-1 mt-1 fs-6  ">
                jalan {detailJS.jalan} Kecamatan {detailJS.kecamatan}{" "}
                {detailJS.kota} Provinsi {detailJS.provinsi}
              </p>
            </div>
          </Col>
        </div>

        <div className="mt-5 pb-5 text-end">
          <Button
            variant="danger"
            className="fw-bold text-putih px-3 ms-2"
            onClick={() => handleTolakKemitraan()}
          >
            Tolak Kemitraan
          </Button>
          <Button
            variant="lime"
            className="fw-bold text-putih px-3 ms-3"
            onClick={() => handleTerimaKemitraan()}
          >
            Verifikasi
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Index;
