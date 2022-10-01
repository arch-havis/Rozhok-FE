import React from "react";
import { Card, Row, Button, Form } from "react-bootstrap";
import HeaderPorter from "../../../components/HeaderPorter";
import Router from "next/router";

const Index = () => {
    return (
        <div>
            <HeaderPorter />
            <div className="container">
                <h3 className="d-flex float-end text-alpukat fw-bolder mt-5">List Junk Station</h3>
                <br />
                <br />
                <div className="d-flex justify-content-end" style={{ marginTop: "100px" }}>
                    <div className="d-flex flex-sm-row flex-column w-50">
                        <Form.Select aria-label="Default select example">
                            <option>Provinsi</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Form.Select aria-label="Default select example" className="mx-0 mx-sm-2 my-2 my-sm-0">
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
                <div className="" style={{ marginTop: "80px" }}>
                    <Card className="w-100">
                        <Card.Body className="bg-tea shadow-md">
                            <Card.Title className="mb-4 text-alpukat">Nama: Rosok CBA</Card.Title>
                            <Card.Title className="mb-4 text-alpukat">Provinsi: Jawa Timur</Card.Title>
                            <Card.Title className="mb-4 text-alpukat">Kota: Trenggalek</Card.Title>
                            <Card.Title className="mb-4 text-alpukat">Kecamatan: Panggul</Card.Title>
                            <Row>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                    <Card.Title className="text-alpukat">Jalan: Jl. Wiro II Dusun hahaha RT 02/19</Card.Title>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-end">
                                    <Button
                                        variant="alpukat"
                                        className="hover-overlay hover-zoom text-white fs-5"
                                        onClick={() => Router.push({ pathname: "/porter-pages/detail-penjemputan" })}
                                    >
                                        lihat
                                    </Button>
                                </div>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className="w-100 mt-5">
                        <Card.Body className="bg-tea shadow-md">
                            <Card.Title className="mb-4 text-alpukat">Nama: Rosok ABC</Card.Title>
                            <Card.Title className="mb-4 text-alpukat">Provinsi: Jawa Timur</Card.Title>
                            <Card.Title className="mb-4 text-alpukat">Kota: Trenggalek</Card.Title>
                            <Card.Title className="mb-4 text-alpukat">Kecamatan: Munjungan</Card.Title>
                            <Row>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                    <Card.Title className="text-alpukat">Jalan: Jl. Wiro I Dusun hehehe RT 03/19</Card.Title>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-end">
                                    <Button variant="alpukat" className="hover-overlay hover-zoom text-white fs-5">
                                        lihat
                                    </Button>
                                </div>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Index;
