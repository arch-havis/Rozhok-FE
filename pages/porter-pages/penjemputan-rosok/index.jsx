import React from "react";
import { Card, Row, Button } from "react-bootstrap";
import HeaderPorter from "../../../components/HeaderPorter";
import Router from "next/router";

const Index = () => {
    return (
        <div>
            <HeaderPorter />
            <div className="container">
                <h3 className="d-flex float-end text-alpukat fw-bolder mt-5">List Penjemputan</h3>
                <br />
                <br />
                <div className="" style={{ marginTop: "80px" }}>
                    <Card className="w-100">
                        <Card.Body className="bg-tea shadow-md">
                            <Card.Title className="mb-4 text-alpukat">Nama: Rudi</Card.Title>
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
                            <Card.Title className="mb-4 text-alpukat">Nama: Hyung</Card.Title>
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
