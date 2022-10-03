import Link from "next/link";
import Router from "next/router";
import React from "react";
import { useState } from "react";
import { Col, Row, Form, Button, Container } from "react-bootstrap";

const Index = () => {
    const handlePostLogin = (e) => {
        e.preventDefault();
        Router.push({ pathname: "/porter/dashboard" });
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
                    <h1 className="text-lime fw-bolder text-center">Porter</h1>
                    <Form className="border border-lime p-3 p-md-5 bg-putihan rounded-3 text-alpukat border-2">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Masukkan email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Masukkan password" />
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                            <Button variant="lime" type="submit" style={{ color: "white" }} onClick={(e) => handlePostLogin(e)}>
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
