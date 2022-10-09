import React, { useState, useEffect } from "react";
import HeaderPorter from "../../../components/HeaderPorter";
import { Row, Card, Button } from "react-bootstrap";
import Router, { useRouter } from "next/router";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import Cookies from "js-cookie";

const Index = () => {
    const router = useRouter();
    const [detailList, setDetailList] = useState([]);
    const [barangRosokId, setBarangRosokId] = useState();
    const [barangRosokKategori, setBarangRosokKategori] = useState("");
    const [berat, setBerat] = useState();
    const [harga, setHarga] = useState();
    const [subTotal, setSubTotal] = useState();

    // get data details
    const getDataDetails = async () => {
        try {
            const response = await axios.get(`https://altagp3.online/transaksi/${router.query.idTransaksi}/porter?type_transaction=${router.query.tipeTransaksi}`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")}`,
                },
            });
            setDetailList(response.data.data);
            setBarangRosokId(response.data.data.barang_rosok[0].id);
            setBarangRosokKategori(response.data.data.barang_rosok[0].kategori);
            setHarga(response.data.data.barang_rosok[0].harga_kategori);
            setSubTotal(response.data.data.barang_rosok[0].subtotal);
            setBerat(response.data.data.barang_rosok[0].berat);
        } catch (error) {
            console.log("hayo kenapa", error);
        }
    };

    // put data details
    const putDataDetails = async () => {
        var axios = require("axios");
        var data = {
            barang_rosok: [
                {
                    id_barang_rosok: barangRosokId,
                    berat: berat,
                    subtotal: subTotal,
                },
            ],
        };
        console.log("ini data", data);
        var config = {
            method: "put",
            url: `https://altagp3.online/transaksi/${router.query.idTransaksi}/porter`,
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`,
            },
            data: data,
        };
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                Router.push({ pathname: "/porter/transaksi" });
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    // post data penjemputan rosok
    const postDataTransaksi = async () => {
        var axios = require("axios");

        var config = {
            method: "post",
            url: `https://altagp3.online/transaksi/${router.query.idTransaksi}/porter`,
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`,
            },
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data.data));
                setDetailList(response.data.data);
                Router.push({ pathname: "/porter/transaksi" });
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        getDataDetails();
    }, []);

    return (
        <div>
            <HeaderPorter />
            <div className="container">
                <h3 className="text-alpukat float-end mt-5 fw-bolder">Detail Transaksi</h3>
                <br />
                <br />
                <Row className="" style={{ marginTop: "100px" }}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <h4 className="text-alpukat">Nama: {detailList?.client?.name}</h4>
                        <CgProfile className="text-alpukat" style={{ fontSize: "92.5px" }} />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-grid justify-content-end">
                        <h4 className="text-alpukat">Provinsi: {detailList?.client?.provinsi}</h4>
                        <h4 className="text-alpukat">Kota/Kab: {detailList?.client?.kota}</h4>
                        <h4 className="text-alpukat">Kecamatan: {detailList?.client?.kecamatan}</h4>
                    </div>
                </Row>
                <Card className="w-100 mb-5 shadow-sm mt-5 border border-lime" key={barangRosokId}>
                    <Card.Body className="bg-tea shadow-md">
                        <Row>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <Card.Title className="text-alpukat fs-3">Kategori: {barangRosokKategori} </Card.Title>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-end">
                                {detailList?.status === "dibayar" || detailList?.status === "terjual" ? (
                                    <Card.Title className="text-alpukat fs-5 pt-1 text-center text-white bg-lime rounded-3 w-25">{detailList?.status}</Card.Title>
                                ) : (
                                    <Card.Title className="text-alpukat fs-5 pt-1 text-center text-white bg-danger rounded-3 w-25">{detailList?.status}</Card.Title>
                                )}
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-5">
                                {detailList?.status === "dibayar" || detailList?.status === "terjual" ? (
                                    <Card.Title className="text-alpukat fs-3">{berat}(Kg)</Card.Title>
                                ) : (
                                    <Card.Title className="text-alpukat fs-3">
                                        Berat <input className="w-25" type="number" onChange={(e) => setBerat(parseInt(e.target.value))}></input> (Kg)
                                    </Card.Title>
                                )}
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-end mt-5">
                                {detailList?.status === "dibayar" || detailList?.status === "terjual" ? (
                                    <Card.Title className="text-alpukat fs-3 text-center text-alpukat rounded-3 w-50">
                                        {new Intl.NumberFormat("id-ID", {
                                            style: "currency",
                                            currency: "IDR",
                                            currencyDisplay: "symbol",
                                        }).format(subTotal)}
                                    </Card.Title>
                                ) : (
                                    <Card.Title className="text-alpukat fs-3 text-center text-alpukat rounded-3 w-50">
                                        Rp <input className="w-25" type="number" onChange={(e) => setSubTotal(parseInt(e.target.value))}></input>
                                    </Card.Title>
                                )}
                            </div>
                        </Row>
                    </Card.Body>
                </Card>
                {detailList?.status === "belum_bayar" ? (
                    <Button variant="alpukat" className="hover-overlay hover-zoom text-white fs-5 float-end" onClick={() => putDataDetails()}>
                        Simpan
                    </Button>
                ) : (
                    <>
                        {" "}
                        {detailList?.status === "dibayar" ? (
                            <Button variant="danger" className="hover-overlay hover-zoom text-white fs-5 float-end" onClick={() => postDataTransaksi()}>
                                Jual
                            </Button>
                        ) : null}
                    </>
                )}
                {router.query.status === "Terjual" ? null : null}
            </div>
        </div>
    );
};

export default Index;
