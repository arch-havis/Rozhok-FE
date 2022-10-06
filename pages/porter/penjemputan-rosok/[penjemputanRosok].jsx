import React, { useState, useEffect } from "react";
import { Row, Card, Button } from "react-bootstrap";
import HeaderPorter from "../../../components/HeaderPorter";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

const Index = () => {
    const router = useRouter();

    const [dataDetailPenjemputan, setDataDetailPenjemputan] = useState([]);

    // get detail penjemputan rosok
    const detailPenjemputan = async () => {
        var axios = require("axios");

        var config = {
            method: "get",
            url: `https://altagp3.online/pengambilan/${router.query.item}/porter`,
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`,
            },
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data.data));
                setDataDetailPenjemputan(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        detailPenjemputan();
    }, []);

    // post data penjemputan rosok
    const postDataPenjemputan = async () => {
        var axios = require("axios");

        var config = {
            method: "get",
            url: `https://altagp3.online/pengambilan/${router.query.item}/porter`,
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`,
            },
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data.data));
                setDataDetailPenjemputan(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    console.log("ini router", router.query.item);

    return (
        <div>
            <HeaderPorter />
            <div className="container">
                <h3 className="text-alpukat float-end mt-5 fw-bolder">Detail Rosok</h3>
                <br />
                <br />
                {/* Code ga ada yang tak ubah wallahi */}
                <Row className="" style={{ marginTop: "100px" }}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <h4 className="text-alpukat">Nama: {dataDetailPenjemputan.client.name}</h4>
                        <CgProfile className="text-alpukat" style={{ fontSize: "92.5px" }} />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-grid justify-content-end">
                        <h4 className="text-alpukat">Provinsi: {dataDetailPenjemputan.client.provinsi}</h4>
                        <h4 className="text-alpukat">Kota/Kab: {dataDetailPenjemputan.client.kota}</h4>
                        <h4 className="text-alpukat">Kecamatan: {dataDetailPenjemputan.client.kecamatan}</h4>
                    </div>
                </Row>
                <Card className="w-100 mt-5 shadow-sm">
                    <Card.Body className="bg-tea ">
                        <div className="d-flex">
                            <Card.Title className="mb-4 text-alpukat">No</Card.Title>
                            <Card.Title className="mb-4 text-alpukat ms-4">Kategori</Card.Title>
                        </div>
                        <div className="d-flex">
                            <Card.Title className="mb-4 text-alpukat">{dataDetailPenjemputan.barang_rosok.id}</Card.Title>
                            <Card.Title className="mb-4 text-alpukat ms-5">{dataDetailPenjemputan.barang_rosok.kategori}</Card.Title>
                        </div>
                    </Card.Body>
                </Card>
                <Button variant="alpukat fw-bolder mt-4 float-end" onClick={() => postDataPenjemputan()}>
                    Ambil
                </Button>
            </div>
        </div>
    );
};

export default Index;
