import React, { useEffect, useState } from "react";
import { Card, Row, Button } from "react-bootstrap";
import HeaderPorter from "../../../components/HeaderPorter";
import Router from "next/router";
import Cookies from "js-cookie";
import axios from "axios";
import Footer from "../../../components/Footer";

const Index = () => {
    // const router = useRouter();

    const [dataListPenjemputan, setDataListPenjemputan] = useState([]);

    const getDataPenjemputan = async () => {
        try {
            const response = await axios.get("https://altagp3.online/pengambilan/porter", {
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")}`,
                },
            });
            setDataListPenjemputan(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            if (error === "400") {
                alert("masih ada yang salah");
            }
        }
    };

    useEffect(() => {
        getDataPenjemputan();
    }, []);

    const DetailPenjemputan = (item) => {
        Router.push({
            pathname: `/porter/penjemputan-rosok/${item}`,
            query: {
                item: item,
            },
        });
    };

    return (
        <div>
            <HeaderPorter />
            <div className="container" style={{ marginBottom: "100px" }}>
                <h3 className="d-flex float-end text-alpukat fw-bolder mt-5">List Penjemputan</h3>
                <br />
                <br />
                <div className="" style={{ marginTop: "80px" }}>
                    {dataListPenjemputan.map((customer) => {
                        return (
                            <Card className="w-100 mb-5 border border-lime" key={customer.id_penjualan}>
                                <Card.Body className="bg-tea shadow-md">
                                    <Card.Title className="mb-4 text-alpukat">Nama: {customer.client.name}</Card.Title>
                                    <Card.Title className="mb-4 text-alpukat">Provinsi: {customer.client.provinsi}</Card.Title>
                                    <Card.Title className="mb-4 text-alpukat">Kota: {customer.client.kota}</Card.Title>
                                    <Card.Title className="mb-4 text-alpukat">Kecamatan: {customer.client.kecamatan}</Card.Title>
                                    <Row>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                            <Card.Title className="text-alpukat"></Card.Title>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-end">
                                            <Button
                                                variant="alpukat"
                                                className="hover-overlay hover-zoom text-white fs-5"
                                                onChange={(e) => e.target.value(e)}
                                                onClick={() => DetailPenjemputan(customer.id_penjualan)}
                                            >
                                                lihat
                                            </Button>
                                        </div>
                                    </Row>
                                </Card.Body>
                            </Card>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Index;
