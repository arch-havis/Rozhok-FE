import Link from "next/link";
import Router from "next/router";
import React from "react";
import { useState } from "react";
import cookie from "js-cookie";

import { Col, Row, Form, Button, Container } from "react-bootstrap";
import axios from "axios";

const Index = () => {
  const [Register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //   };

  const handleToRegister = () => {
    setRegister(!Register);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setRegister(!Register);
  };

  const handlePostRegister = (e) => {
    e.preventDefault();
    setRegister(!Register);
  };

  const handlePostLogin = async (e) => {
    e.preventDefault();
    var axios = require("axios");
    var data = JSON.stringify({
      email: email,
      password: password,

      // email: "hashirama@gmail.com",
      // password: "usoop123",
    });

    var config = {
      method: "post",
      url: "https://altagp3.online/login",
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
      {Register ? (
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
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nama Junk Station</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan nama junk station"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nama Pemilik</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan nama pemilik junk station"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Masukkan email anda" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Masukkan password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>No Telepon</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Masukkan no telepon anda"
                />
              </Form.Group>
              <div className="mb-3">
                <Form.Label>Alamat</Form.Label>
                <div className="d-flex flex-sm-row flex-column">
                  <Form.Select aria-label="Default select example">
                    <option>Provinsi</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Select
                    aria-label="Default select example"
                    className="mx-0 mx-sm-2 my-2 my-sm-0"
                  >
                    <option>Kab/Kota</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Select aria-label="Default select example">
                    <option>Kecamatan</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
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
                />
              </Form.Group>
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label>Foto Junk Station</Form.Label>
                <Form.Control type="file" size="md" />
              </Form.Group>

              <div className="d-flex justify-content-end">
                <Button
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
      ) : (
        // form login
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
                <a
                  style={{ cursor: "pointer" }}
                  className="text-lime text-decoration-none "
                  onClick={() => handleToRegister()}
                >
                  {" "}
                  <b>Register !</b>
                </a>
              </p>
            </Form>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Index;
