import React, { useState, useEffect } from "react";
import { Card, Row, Button, Form } from "react-bootstrap";
import HeaderPorter from "../../../components/HeaderPorter";
import axios from "axios";
import Router from "next/router";
import Footer from "../../../components/Footer";
import Cookies from "js-cookie";

const Index = () => {
    const [dataProvinsi, setDataProvinsi] = useState([]);
    const [provinsiId, setProvinsiId] = useState("");
    const [dataKotaKab, setDataKotaKab] = useState([]);
    const [dataKecamatan, setDataKecamatan] = useState([]);
    const [kotaId, setKotaId] = useState("");
    const [dataJunkStation, setDataJunkStation] = useState([]);

    useEffect(() => {
        getListJunkStation();
    }, []);

    const getListJunkStation = async () => {
        try {
            const response = await axios.get("https://altagp3.online/junk-station", {
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")}`,
                },
            });
            setDataJunkStation(response.data.data);
            console.log("ini response.data.data", JSON.stringify(response.data.data));
        } catch (error) {
            console.log(error);
        }
    };

    const DetailJunkStation = (item) => {
        Router.push({
            pathname: `/porter/junk-station/${item}`,
            query: {
                item: item,
            },
        });
    };

    // untuk mendapatkan list provinsi
    const getDataProvinsi = async () => {
        try {
            const res1 = await axios.get("https://dev.farizdotid.com/api/daerahindonesia/provinsi");
            setDataProvinsi(res1.data.provinsi);
        } catch (error) {
            alert(error);
        }
    };

    // ini untuk render data API provinsi
    useEffect(() => {
        getDataProvinsi();
    }, []);

    // mendapatkan ID Provinsi
    const handleKotaKab = (event) => {
        const getprovinsiid = event.target.value;
        setProvinsiId(getprovinsiid);
    };

    // untuk mendapatkan list kota/kabupaten
    const getDataKotaKab = async () => {
        try {
            const res2 = await axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinsiId}`);
            setDataKotaKab(res2.data.kota_kabupaten);
        } catch (error) {
            console.log(error);
        }
    };

    // ini untuk render data API Kota Kabupaten
    useEffect(() => {
        getDataKotaKab();
    }, [provinsiId]);

    // mendapatkan ID Kota Kabupaten
    const handleKecamatan = (event) => {
        const getkecamatanid = event.target.value;
        setKotaId(getkecamatanid);
    };

    // untuk mendapatkan list kota/kabupaten
    const getDataKecamatan = async () => {
        try {
            const res2 = await axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${kotaId}`);
            setDataKecamatan(res2.data.kecamatan);
        } catch (error) {
            console.log(error);
        }
    };

    // ini untuk render data API Kota Kabupaten
    useEffect(() => {
        getDataKecamatan();
    }, [kotaId]);

    return (
        <div>
            <HeaderPorter />

            <div className="container" style={{ marginBottom: "100px" }}>
                <h3 className="d-flex float-end text-alpukat fw-bolder mt-5">List Junk Station</h3>
                <br />
                <br />
                <div className="d-flex justify-content-end" style={{ marginTop: "100px" }}>
                    <div className="d-flex flex-sm-row flex-column w-50">
                        <Form.Select aria-label="Default select example" onChange={(e) => handleKotaKab(e)}>
                            <option>Provinsi</option>
                            {dataProvinsi.map((daerah) => {
                                return (
                                    <option value={daerah.id} key={daerah.id}>
                                        {daerah.nama}
                                    </option>
                                );
                            })}
                        </Form.Select>
                        <Form.Select aria-label="Default select example" className="mx-0 mx-sm-2 my-2 my-sm-0" onChange={(e) => handleKecamatan(e)}>
                            <option>Kab/Kota</option>
                            {dataKotaKab.map((daerah) => {
                                return (
                                    <option value={daerah.id} key={daerah.id_provinsi}>
                                        {daerah.nama}
                                    </option>
                                );
                            })}
                        </Form.Select>

                        <Form.Select aria-label="Default select example" onChange={(e) => handleKecamatan(e)}>
                            <option>Kecamatan</option>
                            {dataKecamatan.map((daerah) => {
                                return (
                                    <option value={daerah.id_kota} key={daerah.id_kota}>
                                        {daerah.nama}
                                    </option>
                                );
                            })}
                        </Form.Select>
                        <Button variant="alpukat" className="ms-2 my-2 my-xl-0 my-lg-0">
                            Filter
                        </Button>
                    </div>
                </div>
                <div className="" style={{ marginTop: "80px" }}>
                    {dataJunkStation.map((client) => {
                        return (
                            <Card className="w-100 mb-5 border border-lime" key={client?.id_junk_station}>
                                <Card.Body className="bg-tea shadow-md">
                                    <Card.Title className="mb-4 text-alpukat">Nama: {client?.junk_station_name}</Card.Title>
                                    <Card.Title className="mb-4 text-alpukat">Provinsi: {client?.provinsi}</Card.Title>
                                    <Card.Title className="mb-4 text-alpukat">Kota: {client?.kota}</Card.Title>
                                    <Card.Title className="mb-4 text-alpukat">Kecamatan: {client?.kecamatan}</Card.Title>
                                    <Row>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                            {/* <Card.Title className="text-alpukat">Jalan: {client.jalan}</Card.Title> */}
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-end">
                                            <Button
                                                variant="alpukat"
                                                className="hover-overlay hover-zoom text-white fs-5"
                                                onChange={(e) => e.target.value(e)}
                                                onClick={() => DetailJunkStation(client.id_junk_station)}
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
