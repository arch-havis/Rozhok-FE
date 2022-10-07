import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import HeaderJunkStation from "../../../components/HeaderJunkStation";
import {
  AiFillAlert,
  AiFillBank,
  AiFillPhone,
  AiOutlineLock,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";

// import { HiMapPin } from "react-icons/hi2";
import { BiMap } from "react-icons/bi";
import Cookies from "js-cookie";
import Router, { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const [JS, setJS] = useState([]);

  const gotoPerbarui = () => {
    Router.push({
      pathname: "/junk-station/edit-profile",
    });
  };

  // get Profile
  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();

    var config = {
      method: "get",
      url: "https://altagp3.online/junk-station/profile",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data.data));
        setJS(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="bg-putih min-vh-100">
      <HeaderJunkStation />
      <Container>
        <Row>
          <Col className="text-end d-flex justify-content-end mt-3 ">
            <div className="d-flex bg-lime px-2 rounded-2">
              <AiFillAlert size={40} className="text-alpukat " />
              <p className="fs-4 mt-1 fw-bold ms-1 text-capitalize">
                {JS.status_kemitraan}
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md="7" lg="6" className="">
            <div className="d-flex ">
              <AiFillBank size={30} className="text-alpukat " />
              <p className=" mt-1 ms-1 text-capitalize ">
                {JS.junk_station_name}
              </p>
            </div>
            <div className="d-flex ">
              <AiOutlineUser size={30} className="text-alpukat " />
              <p className=" mt-1 ms-1 text-capitalize ">
                {JS.junk_station_owner}
              </p>
            </div>
            <div className="d-flex ">
              <AiFillPhone size={30} className="text-alpukat " />
              <p className=" mt-1 ms-1 ">{JS.telp}</p>
            </div>
            <div className="d-flex ">
              <BiMap size={30} className="text-alpukat " />
              <p className=" mt-1 fs-6 ms-1 text-capitalize ">
                {JS.jalan} {JS.kecamatan} {JS.kabutapen} {JS.provinsi}
              </p>
            </div>
          </Col>
          <Col className=" d-none d-md-block text-end">
            <img
              src="https://cdn.discordapp.com/attachments/1017919526748299295/1025960762583302266/unknown.png"
              alt="logo"
              className="w-75 mt-0 mt-md-5 mt-lg-0"
            />
          </Col>
        </Row>

        {/* Button Perbarui */}
        <Row>
          <Col className="text-end">
            <Button
              className=" mb-3 fw-bold text-putih"
              variant="lime"
              onClick={() => gotoPerbarui()}
            >
              Perbarui
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
