import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { BiPurchaseTag } from "react-icons/bi";
import { GiCash } from "react-icons/gi";
import kurir from "../../../assets/kurir.svg";
import Image from "next/image";
import HeaderPorter from "../../../components/HeaderPorter";
import axios from "axios";
import Cookies from "js-cookie";
import Footer from "../../../components/Footer";

const Index = () => {
    const [dataDashboard, setDataDashboard] = useState([]);
    const [filter, setFilter] = useState("");

    const getDataDashboard = async () => {
        try {
            const response = await axios.get(`https://altagp3.online/porter/dashboard?filter=${filter}`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")}`,
                },
            });
            setDataDashboard(response.data.data);
            console.log(dataDashboard);
        } catch (error) {
            if (status === 400) {
                alert(error, "masih ada yang salah");
            }
        }
    };

    useEffect(() => {
        getDataDashboard();
    }, []);

    const formatPembelian = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        currencyDisplay: "symbol",
    }).format(dataDashboard.total_pembelian);

    const formatPenjualan = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        currencyDisplay: "symbol",
    }).format(dataDashboard.total_penjualan);

    const formatLaba = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        currencyDisplay: "symbol",
    }).format(dataDashboard.total_laba);

    return (
        <div>
            <HeaderPorter />
            <div className="container " style={{ marginBottom: "100px" }}>
                <div className="d-flex float-end mt-3 h-5">
                    <Form.Select aria-label="Default select example" className="w-75 flex me-3">
                        <option value="day" onChange={(e) => setFilter(e.target.value)}>
                            Harian
                        </option>
                        <option value="mingguan" onChange={(e) => setFilter(e.target.value)}>
                            Mingguan
                        </option>
                        <option value="month" onChange={(e) => setFilter(e.target.value)}>
                            Bulanan
                        </option>
                        <option value="year" onChange={(e) => setFilter(e.target.value)}>
                            Tahunan
                        </option>
                    </Form.Select>
                    <Button variant="success" className="hover-overlay hover-zoom text-white ">
                        Filter
                    </Button>
                </div>
                <br />
                <br />
                <div className="d-flex justify-content-center justify-content-lg-start justify-content-xl-start">
                    <p className="mt-5 mb-2 text-alpukat fw-bold bg-lime w-25 text-center p-2 rounded-2 shadow">Total Laba: {formatLaba}</p>
                </div>
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
                                            <Card.Text style={{ fontSize: "23px" }}>{formatPembelian}</Card.Text>
                                        </div>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>
                        {/* {dataDashboard.map((data, i) => {
                            return (
                                
                            );
                        })} */}
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
                                            <Card.Text style={{ fontSize: "23px" }}>{formatPenjualan}</Card.Text>
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
            <Footer />
        </div>
    );
};

export default Index;
