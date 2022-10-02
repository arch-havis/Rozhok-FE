import React from "react";
import Form from "react-bootstrap/Form";
import { Button, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { BiPurchaseTag } from "react-icons/bi";
import { GiCash } from "react-icons/gi";
import kurir from "../../../assets/kurir.svg";
import Image from "next/image";
import HeaderPorter from "../../../components/HeaderPorter";
// import Footer from "../../../components/Footer";

const Index = () => {
    return (
        <div>
            <HeaderPorter />
            <div className="container">
                <div className="d-flex float-end mt-3 h-5">
                    <Form.Select aria-label="Default select example" className="w-75 flex me-3">
                        <option value="harian">Harian</option>
                        <option value="mingguan">Mingguan</option>
                        <option value="bulanan">Bulanan</option>
                        <option value="tahunan">Tahunan</option>
                    </Form.Select>
                    <Button variant="success" className="hover-overlay hover-zoom text-white ">
                        Filter
                    </Button>
                </div>
                <br />
                <br />
                <Row className="mt-5">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center justify-content-xl-start justify-content-lg-start">
                        <Card style={{ width: "25rem" }} className="bg-tea shadow border border-lime">
                            <Card.Body>
                                <Row>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                        <Card.Title className="text-alpukat pt-4">
                                            <BiPurchaseTag style={{ fontSize: "90px" }} />
                                        </Card.Title>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="mt-4 fw-bolder text-alpukat">
                                            <Card.Text style={{ fontSize: "23px" }}>Total Pembelian</Card.Text>
                                            <Card.Text style={{ fontSize: "23px" }}>Rp 50.000,00</Card.Text>
                                        </div>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-xl-end justify-content-lg-end justify-content-center">
                        <Card style={{ width: "25rem" }} className="mt-md-3 mt-3 mt-xl-0 mt-lg-0 bg-tea shadow border border-lime">
                            <Card.Body>
                                <Row>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                        <Card.Title className="text-alpukat pt-4">
                                            <GiCash style={{ fontSize: "90px" }} />
                                        </Card.Title>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="mt-4 fw-bolder text-alpukat">
                                            <Card.Text style={{ fontSize: "23px" }}>Total Penjualan</Card.Text>
                                            <Card.Text style={{ fontSize: "23px" }}>Rp 50.000,00</Card.Text>
                                        </div>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
                <div className="d-flex justify-content-center mt-5">
                    {/* <img src="kurir.svg" alt="kurir" /> */}
                    <Image src={kurir} height={350} width={1250} />
                </div>
            </div>
            {/* <Footer style={{ marginTop: "1410px" }} /> */}
        </div>
    );
};

export default Index;
