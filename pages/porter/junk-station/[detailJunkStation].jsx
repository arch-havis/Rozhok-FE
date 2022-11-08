import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import HeaderPorter from "../../../components/HeaderPorter";
// import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";
import Footer from "../../../components/Footer";

const Index = () => {
    const router = useRouter();
    const [dataJunkStation, setDataJunkStation] = useState([]);

    useEffect(() => {
        getDetailJunkStation();
    }, []);

    const getDetailJunkStation = async () => {
        try {
            const response = await axios.get(`https://rozhok.romodeus.site/junk-station/${router.query.item}`, {
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

    return (
        <div>
            <HeaderPorter />
            <div className="container">
                <h3 className="text-alpukat float-end mt-5 fw-bolder rounded-3 bg-tea p-2">Detail Junk Station</h3>
                <br />
                <br />
                <Row className="d-flex justify-content-center" style={{ marginTop: "100px" }}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center">
                        {/* <CgProfile className="text-alpukat" style={{ fontSize: "282.5px" }} /> */}
                        <img src={dataJunkStation?.image_url} className="rounded-5" alt="gambar" style={{ width: "350px", height: "350px" }} />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-grid justify-content-end">
                        <h3 className="text-alpukat fs-sm-5">Nama: {dataJunkStation?.junk_station_name}</h3>
                        <h3 className="text-alpukat fs-sm-5">Status: {dataJunkStation?.status_kemitraan}</h3>
                        <h3 className="text-alpukat fs-sm-5">Telepon: {dataJunkStation?.telp}</h3>
                        <h3 className="text-alpukat fs-sm-5">Provinsi: {dataJunkStation?.provinsi}</h3>
                        <h3 className="text-alpukat fs-sm-5">Kota/Kab: {dataJunkStation?.kota}</h3>
                        <h3 className="text-alpukat fs-sm-5">Kecamatan: {dataJunkStation?.kecamatan}</h3>
                        <h3 className="text-alpukat fs-sm-5">Jalan: {dataJunkStation?.jalan}</h3>

                    </div>
                </Row>
            </div>
            <Footer />
        </div>
    );
};

export default Index;
