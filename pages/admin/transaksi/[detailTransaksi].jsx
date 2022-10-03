import { useRouter } from "next/router";
import React from "react";
import HeaderAdmin from "../../../components/HeaderAdmin";
import { Card, Row, Button } from "react-bootstrap";

const Index = () => {
    const router = useRouter();
    return (
        <div>
            <HeaderAdmin />
            <div className="container">
                <h3 className="text-alpukat float-end mt-5 fw-bolder">Detail Transaksi</h3>
                <br />
                <br />
                <Row className="" style={{ marginTop: "100px" }}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mt-4">
                        <h4 className="text-alpukat mb-3">Kode Transaksi: {router.query.kodeTransaksi}</h4>
                        <h4 className="text-alpukat mb-3">Total Harga: {router.query.biayaTransaksi}</h4>
                        <h4 className="text-alpukat mb-3">Kurir: {router.query.kurir}</h4>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-grid justify-content-end">
                        <Card className="bg-lime border-1 border-lime shadow-sm">
                            <Card.Body>
                                <h4 className="text-alpukat">Nama Pembeli: {router.query.nama}</h4>
                                <h4 className="text-alpukat">Nomor HP: {router.query.hp}</h4>
                                <h4 className="text-alpukat">
                                    {router.query.jalan}, Kecamatan {router.query.kecamatan}, Kota/Kab {router.query.kota}, Provinsi {router.query.provinsi}
                                </h4>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
                <Card className="w-100 mt-4 bg-tea border-1 border-lime">
                    <Row>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-flex">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                <Card.Img src="https://jete.id/wp-content/uploads/2021/10/casing-hp-2-762x400.jpg" className="img-fluid mt-4 ms-2" style={{ height: "100px" }} />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                <Card.Body className="mt-3">
                                    <Card.Title>Nama Produk: Casing HP</Card.Title>
                                    <Card.Title>Qty: 5</Card.Title>
                                    <Card.Title>Harga produk: Rp 50.000</Card.Title>
                                </Card.Body>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 " style={{ marginTop: "50px" }}>
                            {router.query.status === "sudah bayar" || router.query.status === "dikirim" ? (
                                <h4 className="bg-lime text-white d-flex float-end text-center py-2 px-2 rounded-3 me-2">{router.query.status}</h4>
                            ) : (
                                <h4 className="bg-danger text-white d-flex float-end text-center py-2 px-2 rounded-3 me-2">{router.query.status}</h4>
                            )}
                        </div>
                    </Row>
                </Card>

                {router.query.status === "sudah bayar" || router.query.status === "dikirim" ? null : (
                    <Button variant="alpukat" className="text-white fw-bolder float-end mt-3">
                        Kirim
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Index;
