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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleToRegister = () => {
    Router.push({
      pathname: `/junk-station/register`,
    });
  };

  // login
  const handlePostLogin = async (e) => {
    e.preventDefault();
    var axios = require("axios");
    var data = JSON.stringify({
      email: email,
      password: password,
    });

    var config = {
      method: "post",
      url: "https://rozhok.romodeus.site/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.data));
        cookie.set("token", response.data.data.token);
        cookie.set("role", response.data.data.role);
        cookie.set("username", response.data.data.username);
        data.role === "admin"
          ? Router.push({ pathname: "/admin/dashboard" })
          : null;
        Router.push({ pathname: "/junk-station/dashboard" });
      })
      .catch(function (error) {
        console.log(error);
        alert("email atau password tidak sesuai");
      });
  };

  return (
    <div className="">
      <Row
        className="pt-5 p-lg-5  d-flex justify-content-center "
        style={{
          backgroundImage: `url("/bg-login.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "60.9rem",
          maxWidth: "100%",
        }}
      >
        <Col xxl={6} xl="5" lg="6" md="8" sm="9" className="pt-5 ">
          <Form
            // onSubmit={(e) => handle(e)}
            className="border border-lime p-3 p-md-5 bg-putihan rounded-3 text-alpukat border-2"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label></Form.Label>
              <Form.Control
                type="email"
                placeholder="Masukkan email"
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
            <div className="d-flex justify-content-end">
              <Button
                variant="lime"
                type="submit"
                style={{ color: "white" }}
                onClick={(e) => handlePostLogin(e)}
              >
                Login
              </Button>
            </div>
            <br></br>
            <p>
              Belum punya akun?{" "}
              <Button
                style={{ cursor: "pointer" }}
                className="text-lime text-decoration-none bg-putihan "
                onClick={(e) => handleToRegister(e)}
              >
                {" "}
                <b>Register !</b>
              </Button>
            </p>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Index;
