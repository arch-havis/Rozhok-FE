import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import HeaderPorter from "../../../components/HeaderPorter";
// import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

const Index = () => {
    const router = useRouter();
    const [dataJunkStation, setDataJunkStation] = useState([]);

    useEffect(() => {
        getDetailJunkStation();
    }, []);

    const getDetailJunkStation = async () => {
        try {
            const response = await axios.get(`https://altagp3.online/junk-station/${router.query.item}`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")}`,
                },
            });
            setDataJunkStation(response.data.data);
            console.log("ini response.data.data", response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <HeaderPorter />
            <div className="container">
                <h3 className="text-alpukat float-end mt-5 fw-bolder">Detail Junk Station</h3>
                <br />
                <br />
                <Row className="d-flex justify-content-center" style={{ marginTop: "100px" }}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center">
                        {/* <CgProfile className="text-alpukat" style={{ fontSize: "282.5px" }} /> */}
                        <img src={dataJunkStation?.image_url} alt="gambar" style={{ width: "150px", height: "150px" }} />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-grid justify-content-end">
                        <h1 className="text-alpukat fs-sm-5">Provinsi: {dataJunkStation?.provinsi}</h1>
                        <h1 className="text-alpukat fs-sm-5">Kota/Kab: {dataJunkStation?.kota}</h1>
                        <h1 className="text-alpukat fs-sm-5">Kecamatan: {dataJunkStation?.kecamatan}</h1>
                        <h1 className="text-alpukat fs-sm-5">Status: {dataJunkStation?.status_kemitraan}</h1>
                    </div>
                </Row>
            </div>
        </div>
    );
};

export default Index;
