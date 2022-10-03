import Link from "next/link";
import React from "react";
import { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import Router from "next/router";
import axios from "axios";
import { setCookie } from "cookies-next";

const Index = () => {
  const [Register, setRegister] = useState(false);
  console.log(Register);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    postLogin(e);
  };

  const postLogin = async (e) => {
    e.preventDefault();

    await axios({
      method: "post",
      url: "https://altagp3.online/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: user.email,
        password: user.password,
      },
    })
      .then((response) => {
        alert(response.data.message);
        setCookie("token", response.data.data.token);
        Router.push({
          pathname: `/client/dashboard`,
          query: {
            email: user.email,
            password: user.password,
          },
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleRegist = (e) => {
    e.preventDefault();
    setRegister(!Register);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setRegister(!Register);
  };

  const handleInput = (e) => {
    let newLogin = { ...user };
    newLogin[e.target.name] = e.target.value;
    setUser(newLogin);
  };

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
        <Col lg></Col>
        <Col lg className="pt-5 mt-5">
          {Register ? (
            <Form
              onSubmit={(e) => handleRegist(e)}
              className="border border-lime p-5 bg-putihan text-alpukat rounded-3 border-2"
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Telepon</Form.Label>
                <Form.Control type="email" placeholder="Enter Phone Number" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Enter Username" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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
                >
                  Register
                </Button>
              </div>
            </Form>
          ) : (
            <Form
              onSubmit={(e) => handleSubmit(e)}
              className="border border-lime p-5 bg-putihan rounded-3 text-alpukat border-2"
            >
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                onChange={(e) => handleInput(e)}
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => handleInput(e)}
                />
              </Form.Group>
              <div className="d-flex justify-content-end">
                <Button variant="lime" type="submit" style={{ color: "white" }}>
                  Submit
                </Button>
              </div>
              <br></br>
              <p>
                Belum punya akun?{" "}
                <a
                  id="register"
                  className="text-lime text-decoration-none"
                  onClick={(e) => handleRegist(e)}
                >
                  {" "}
                  <b>Register !</b>
                </a>
              </p>
              <p>
                Apakah mau jadi mitra kami?
                <Link href="/client-page" className="text-decoration-none">
                  <a className="text-lime text-decoration-none">
                    {" "}
                    <b>Daftar Sekarang !</b>
                  </a>
                </Link>
              </p>
            </Form>
          )}
        </Col>
        <Col lg></Col>
      </Row>
    </div>
  );
};

export default Index;
