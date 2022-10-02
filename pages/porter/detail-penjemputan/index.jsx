import React from "react";
import { Row, Card, Button } from "react-bootstrap";
import HeaderPorter from "../../../components/HeaderPorter";
import { CgProfile } from "react-icons/cg";

const Index = () => {
    return (
        <div>
            <HeaderPorter />
            <div className="container">
                <h3 className="text-alpukat float-end mt-5 fw-bolder">Detail Rosok</h3>
                <br />
                <br />
                <Row className="" style={{ marginTop: "100px" }}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <h4 className="text-alpukat">Nama: Rudi</h4>
                        <CgProfile className="text-alpukat" style={{ fontSize: "92.5px" }} />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-grid justify-content-end">
                        <h4 className="text-alpukat">Provinsi: Jawa Timur</h4>
                        <h4 className="text-alpukat">Kota/Kab: Trenggalek</h4>
                        <h4 className="text-alpukat">Kecamatan: Panggul</h4>
                        <h4 className="text-alpukat">Jalan: Jl. Wiro II Dusun hahaha RT 02/19</h4>
                    </div>
                </Row>
                <Card className="w-100 mt-5 shadow-sm">
                    <Card.Body className="bg-tea ">
                        <div className="d-flex">
                            <Card.Title className="mb-4 text-alpukat">No</Card.Title>
                            <Card.Title className="mb-4 text-alpukat ms-4">Kategori</Card.Title>
                        </div>
                        <div className="d-flex">
                            <Card.Title className="mb-4 text-alpukat">1</Card.Title>
                            <Card.Title className="mb-4 text-alpukat ms-5">Besi</Card.Title>
                        </div>
                    </Card.Body>
                </Card>
                <Button variant="alpukat fw-bolder mt-4 float-end">Ambil</Button>
            </div>
        </div>
    );
};

export default Index;
