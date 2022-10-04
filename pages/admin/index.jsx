import React, { useState } from "react";
import axios from "axios";
import Router from "next/router";
import cookie from "js-cookie";
import { Row, Col, Form, Button } from "react-bootstrap";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function untuk login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "post",
        url: "https://altagp3.online/login",
        data: {
          email: email,
          password: password,
        },
      });
      cookie.set("token", data.data.token);
      cookie.set("role", data.data.role);
      cookie.set("username", data.data.username);
      data.data.role === "admin"
        ? Router.push({ pathname: "/admin/dashboard" })
        : null;
    } catch (err) {
      // untuk handle error
      if (err.response.status === 400) {
        alert("email atau password tidak sesuai");
      } else {
        console.log(err.message);
      }
    }
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
            className="border border-lime p-3 p-md-5 bg-putihan rounded-3 text-alpukat border-2"
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
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
                onClick={handleSubmit}
              >
                Login
              </Button>
            </div>
            <br></br>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Index;
