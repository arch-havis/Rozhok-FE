import Link from "next/link";
import React from "react";
import { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";

const Index = () => {
  const [Register, setRegister] = useState(false);
  console.log(Register);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegister(!Register);
  };
  const goClient = (e) => {
    e.preventDefault();
    location.href = "/client";
  };

  const goJunkStation = (e) => {
    e.preventDefault();
    location.href = "/junk-station";
  };

  const goAdmin = (e) => {
    e.preventDefault();
    location.href = "/admin";
  };

  const goPorter = (e) => {
    e.preventDefault();
    location.href = "/porter";
  };

  // const handleCancel = (e) => {
  //   e.preventDefault();
  //   location.href = "/";
  // };

  return (
    <div className="justify-content-center">
      <Row
        className="p-5 m-0"
        style={{
          backgroundImage: `url("/bg-login.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "60.9rem",
          maxWidth: "100%",
        }}
      >
        <Col lg={2}></Col>
        <Col
          lg={8}
          className="p-5 mt-5 bg-putihan border border-lime rounded-2"
        >
          <Row>
            <Col lg={6}>
              <img
                src="https://i0.wp.com/www.oakpark.com/wp-content/uploads/2022/06/Recycling_278963590.jpeg?fit=1200%2C800&ssl=1"
                style={{ width: "100%" }}
                className="border border-alpukat border-2"
              ></img>
              <Button
                variant="lime"
                className="text-putihan border-alpukat"
                onClick={(e) => goClient(e)}
              >
                Client
              </Button>
            </Col>
            <Col lg={6}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/09/00_hyundai_porter_3.jpg"
                style={{ width: "100%" }}
                className="border border-alpukat border-2"
              ></img>
              <Button
                variant="lime"
                className="text-putihan border-alpukat"
                onClick={(e) => goPorter(e)}
              >
                Porter
              </Button>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <img
                src="https://cdn-2.tstatic.net/kaltim/foto/bank/images/daur-ulang_20180703_221641.jpg"
                style={{ width: "100%" }}
                className="border border-alpukat border-2"
              ></img>
              <Button
                variant="lime"
                className="text-putihan border-alpukat"
                onClick={(e) => goJunkStation(e)}
              >
                Junk Station
              </Button>
            </Col>
            <Col lg={6}>
              <img
                src="https://glints.com/id/lowongan/wp-content/uploads/2020/08/network-administrator.png"
                style={{ width: "100%" }}
                className="border border-alpukat border-2"
              ></img>
              <Button
                variant="lime"
                className="text-putihan border-alpukat"
                onClick={(e) => goAdmin(e)}
              >
                Admin
              </Button>
            </Col>
          </Row>
        </Col>
        <Col lg={2}></Col>
      </Row>
    </div>
  );
};

export default Index;
