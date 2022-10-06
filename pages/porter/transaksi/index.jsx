import React, { useEffect, useState } from "react";
import HeaderPorter from "../../../components/HeaderPorter";
import { Form, Button, Table } from "react-bootstrap";
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";
import Router from "next/router";
import Cookies from "js-cookie";
import axios from "axios";
import Footer from "../../../components/Footer";

const Index = () => {
    const [dataTransaksi, setDataTransaksi] = useState([]);

    const getDataTransaksi = async () => {
        try {
            const response = await axios.get("https://altagp3.online/transaksi/porter", {
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")}`,
                },
            });
            setDataTransaksi(response.data.data);
            console.log(dataTransaksi);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDataTransaksi();
    }, []);

    const DetailTransaksi = (item) => {
        Router.push({
            pathname: `/porter/transaksi/${item.id}`,
            query: {
                id: item.id,
                nama: item.nama,
                provinsi: item.provinsi,
                kota: item.kota,
                kecamatan: item.kecamatan,
                jalan: item.jalan,
                status: item.status,
            },
        });
    };

    return (
        <div>
            <HeaderPorter />
            <div className="container" style={{ marginBottom: "100px" }}>
                <h3 className="d-flex float-end text-alpukat fw-bolder mt-5">List Transaksi</h3>
                <br />
                <br />
                <div className="d-flex justify-content-end" style={{ marginTop: "80px" }}>
                    <div className="d-flex flex-sm-row flex-column w-50">
                        <Form.Select aria-label="Default select example" onChange={(e) => handleKotaKab(e)}>
                            <option>Tipe Transaksi</option>
                            <option value="pembelian">Pembelian</option>
                            <option value="penjualan">Penjualan</option>
                        </Form.Select>
                        <Form.Select aria-label="Default select example" className="mx-0 mx-sm-2 my-2 my-sm-0" onChange={(e) => handleKecamatan(e)}>
                            <option>Status</option>
                            <option value="sudah_bayar">Sudah Bayar</option>
                            <option value="belum_bayar">Belum Bayar</option>
                        </Form.Select>
                        <Button variant="alpukat" className="ms-2">
                            Filter
                        </Button>
                    </div>
                </div>
                <Table className="mt-5 rounded rounded-3 overflow-hidden mx-auto">
                    <thead variant="alpukat" className="bg-alpukat text-white">
                        <tr>
                            <th>No</th>
                            <th>Tipe Transaksi</th>
                            <th>Status</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="bg-tea">
                        {dataTransaksi.map((data) => {
                            return (
                                <tr key={data.id_transaksi}>
                                    <td>{data.id_transaksi}</td>
                                    <td>{data.tipe_transaksi}</td>
                                    <td>{data.status}</td>
                                    <td>
                                        <AiTwotoneEdit className="fs-4 text-lime user-select-auto" onChange={(e) => e.target.value(e)} onClick={() => DetailTransaksi(data)} />
                                        <AiTwotoneDelete className="fs-4 text-danger ms-4 user-select-auto" />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
            <Footer />
        </div>
    );
};

export default Index;
