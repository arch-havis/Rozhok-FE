import React from "react";
import { Card, Row, Button } from "react-bootstrap";
import HeaderPorter from "../../../components/HeaderPorter";
import Router from "next/router";

const Index = () => {
    // data dummy
    const customer = [
        { id: 1, nama: "Rudi", provinsi: "Jawa Timur", kota: "Trenggalek", kecamatam: "Panggul", jalan: "Jl. Wiro II Dusun hahaha RT 02/19" },
        { id: 2, nama: "Hyung", provinsi: "Jawa Timur", kota: "Trenggalek", kecamatam: "Munjungan", jalan: "Jl. Wiro II Dusun hahaha RT 02/19" },
    ];
    const DetailRosok = (item) => {
        Router.push({
            pathname: `/porter/penjemputan-rosok/${item.id}`,
            query: {
                id: item.id,
                nama: item.nama,
                provinsi: item.provinsi,
                kota: item.kota,
                kecamatan: item.kecamatan,
                jalan: item.jalan,
            },
        });
    };

    return (
        <div>
            <HeaderPorter />
            <div className="container">
                <h3 className="d-flex float-end text-alpukat fw-bolder mt-5">List Penjemputan</h3>
                <br />
                <br />
                <div className="" style={{ marginTop: "80px" }}>
                    {customer.map((client, i) => {
                        return (
                            <Card className="w-100 mb-5" key={i}>
                                <Card.Body className="bg-tea shadow-md">
                                    <Card.Title className="mb-4 text-alpukat">Nama: {client.nama}</Card.Title>
                                    <Card.Title className="mb-4 text-alpukat">Provinsi: {client.provinsi}</Card.Title>
                                    <Card.Title className="mb-4 text-alpukat">Kota: {client.kota}</Card.Title>
                                    <Card.Title className="mb-4 text-alpukat">Kecamatan: {client.kecamatam}</Card.Title>
                                    <Row>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                            <Card.Title className="text-alpukat">Jalan: {client.jalan}</Card.Title>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-end">
                                            <Button
                                                variant="alpukat"
                                                className="hover-overlay hover-zoom text-white fs-5"
                                                onChange={(e) => e.target.value(e)}
                                                onClick={() => DetailRosok(client.id)}
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
        </div>
    );
};

export default Index;
