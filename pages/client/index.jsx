import Link from "next/link";
import React from "react";
import { useState, useRef } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import Router, { useRouter } from "next/router";
import axios from "axios";
import { setCookie } from "cookies-next";

const Index = () => {
  const inputRef = useRef(null);
  const onButtonClick = () => {
    // inputRef.current.value = "";
  };
  const router = useRouter();
  const refreshData = () => router.replace(router.asPath);

  const [Register, setRegister] = useState(false);
  console.log(Register);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  console.log(user);

  const [regist, setRegist] = useState({
    email: "",
    password: "",
    username: "",
    telepon: "",
  });
  console.log(regist);

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
    // window.location.reload();
    // refreshData()
    setRegister(!Register);
  };

  const handleRegistMitra = (e) => {
    e.preventDefault();
    Router.push("/");
  };

  const handleCancel = async (e) => {
    e.preventDefault();
    await window.location.reload();
    // setRegister(!Register);
  };

  const handleInput = (e) => {
    let newLogin = { ...user };
    newLogin[e.target.name] = e.target.value;
    setUser(newLogin);
  };

  const handleInputRegister = (e) => {
    let newRegist = { ...regist };
    newRegist[e.target.name] = e.target.value;
    setRegist(newRegist);
  };

  const handlePostRegist = (e) => {
    e.preventDefault();
    postRegister(e);
  };

  const postRegister = async (e) => {
    e.preventDefault();
    await axios({
      method: "post",
      url: "https://altagp3.online/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: regist.email,
        password: regist.password,
        username: regist.username,
        telepon: regist.telepon,
      },
    })
      .then((response) => {
        console.log(response.data);
        alert(response.data.message);
        // setRegister(!Register);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.data);
      });
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
              onSubmit={(e) => handlePostRegist(e)}
              className="border border-lime p-5 bg-putihan text-alpukat rounded-3 border-2"
            >
              <Form.Group className="mb-3" controlId="regist-email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  value={regist.email}
                  onChange={(e) => handleInputRegister(e)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="regist-password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  value={regist.password}
                  onChange={(e) => handleInputRegister(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="regist-username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  name="username"
                  type="text"
                  placeholder="Enter Username"
                  onChange={(e) => handleInputRegister(e)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="regist-tel">
                <Form.Label>Telepon</Form.Label>
                <Form.Control
                  name="telepon"
                  type="tel"
                  placeholder="Enter Phone Number"
                  onChange={(e) => handleInputRegister(e)}
                />
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
                  // ref={inputRef}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  // onfocus="this.value=''"
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
                  <a
                    className="text-lime text-decoration-none"
                    onClick={(e) => handleRegistMitra(e)}
                  >
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
