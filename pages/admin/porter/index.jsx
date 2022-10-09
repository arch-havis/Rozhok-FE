import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../../components/HeaderAdmin";
import Footer from "../../../components/Footer";
import { Button, Col, Row, Table } from "react-bootstrap";
import Cookies from "js-cookie";
import axios from "axios";
import Router from "next/router";

const Index = () => {
    const [dataPorters, setDataPorters] = useState([]);

    useEffect(() => {
        getDataPorters();
    }, []);

    // Get Data All Porters
    const getDataPorters = async () => {
        try {
            const response = await axios.get("https://altagp3.online/porters", {
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${Cookies.get("token")}`,
                },
            });
            setDataPorters(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const detailPorters = (idPorter) => {
        Router.push({
            pathname: `/admin/porter/${idPorter}`,
            query: {
                idPorter: idPorter,
            },
        });
    };

    // Delete Porter
    const deleteDataPorters = (idPorter) => {
        console.log(idPorter);
        var axios = require("axios");

        var config = {
            method: "delete",
            url: `https://altagp3.online/porter/${idPorter}`,
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`,
            },
        };

        axios(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                getDataPorters();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // -----------------put api
    const editDataPorters = (idPorter) => {
        Router.push({
            pathname: `/admin/porter/edit`,
            query: {
                idPorter: idPorter,
            },
        });
    };

    const goTambah = () => {
        Router.push({ pathname: "/admin/porter/tambah" });
    };

    // const formatClient = new Intl.NumberFormat("id-ID", {
    //     style: "currency",
    //     currency: "IDR",
    //     currencyDisplay: "symbol",
    // }).format(hargaClient);

    // const formatMitra = new Intl.NumberFormat("id-ID", {
    //     style: "currency",
    //     currency: "IDR",
    //     currencyDisplay: "symbol",
    // }).format(hargaMitra);

    return (
        <div>
            <HeaderAdmin />
            <Row className="m-0 mb-5">
                <Col></Col>
                <Col></Col>
                <Col>
                    <Button variant="lime mt-5 border-alpukat" onClick={() => goTambah()}>
                        Tambah Porter
                    </Button>
                </Col>
            </Row>
            <Row className="m-0 mt-5">
                <Col></Col>
                <Col md={8} className="text-center">
                    <Table>
                        <thead className="bg-alpukat text-putihan">
                            <tr>
                                <th>No.</th>
                                <th>Nama</th>
                                <th>No. Telpon</th>
                                <th>Email</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="border-tea border">
                            {dataPorters.map((porter, i) => {
                                return (
                                    <tr key={porter.id}>
                                        <td>{i + 1}</td>
                                        <td>{porter.name}</td>
                                        <td>{porter.no_telp}</td>
                                        <td>{porter.email}</td>
                                        <td>
                                            <a className="text-alpukat text-decoration-none" onClick={() => editDataPorters(porter.id)}>
                                                Edit
                                            </a>

                                            {" | "}
                                            <a className="text-alpukat text-decoration-none" onClick={() => detailPorters(porter.id)}>
                                                Detail
                                            </a>
                                            {" | "}
                                            <a className="text-alpukat text-decoration-none" onClick={() => deleteDataPorters(porter.id)}>
                                                Hapus
                                            </a>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Col>
                <Col></Col>
            </Row>
            <Footer />
        </div>
    );
};

export default Index;
