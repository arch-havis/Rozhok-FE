import React from "react";
import { Row, Card, Button } from "react-bootstrap";
import HeaderPorter from "../../../components/HeaderPorter";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";

const Index = () => {
    const router = useRouter();
    return (
        <div>
            <HeaderPorter />
            <div className="container">
                <h3 className="text-alpukat float-end mt-5 fw-bolder">Detail Rosok</h3>
                <br />
                <br />
                <Row className="" style={{ marginTop: "100px" }}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <h4 className="text-alpukat">Nama: {router.query.nama}</h4>
                        <CgProfile className="text-alpukat" style={{ fontSize: "92.5px" }} />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-grid justify-content-end">
                        <h4 className="text-alpukat">Provinsi: {router.query.provinsi}</h4>
                        <h4 className="text-alpukat">Kota/Kab: {router.query.kota}</h4>
                        <h4 className="text-alpukat">Kecamatan: {router.query.kecamatan}</h4>
                        <h4 className="text-alpukat">Jalan: {router.query.jalan}</h4>
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
