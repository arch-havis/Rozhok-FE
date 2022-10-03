import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  AiFillAlert,
  AiFillBank,
  AiFillPhone,
  AiOutlineLock,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import HeaderAdmin from "../../../../components/HeaderAdmin";

const Index = () => {
  const [namaJunkStation, setNamaJunkStation] = useState("TPA Bersih");
  const [namaPemilik, setNamaPemilik] = useState("Mukidi");
  const [email, setEmail] = useState("mukidi@gmail.com");
  const [noTelp, setNoTelp] = useState("09897988");
  const [alamat, setAlamat] = useState(
    "Jalan abcde No 67  Kecamatan Selebar Kota Surabaya Jawa Timur"
  );
  return (
    <div className="bg-putih">
      <HeaderAdmin />
      <Container className="min-vh-100 pt-5">
        <h2 className="text-end">Detail Junk Station</h2>
        <div className="pt-5 d-flex flex-column flex-md-row">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1591198619986-ac025da6a1f3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cnViYmlzaHx8fHx8fDE2NjQ3Nzc1Mzc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"
              alt=""
              className="w-100 rounded-3"
            />
          </div>
          <div className=" d-flex flex-column justify-content-center px-md-3 fs-5 mt-3 mt-md-0 mt-lg-5">
            <div className="d-flex ">
              <AiFillBank size={30} className="text-alpukat " />
              <p className="ms-1 mt-1  ">{namaJunkStation}</p>
            </div>
            <div className="d-flex ">
              <AiOutlineUser size={30} className="text-alpukat " />
              <p className="ms-1 mt-1  ">{namaPemilik}</p>
            </div>
            <div className="d-flex ">
              <AiOutlineMail size={30} className="text-alpukat " />
              <p className="ms-1 mt-1  ">{email}</p>
            </div>
            <div className="d-flex ">
              <AiFillPhone size={30} className="text-alpukat " />
              <p className="ms-1 mt-1  ">{noTelp}</p>
            </div>
            <div className="d-flex ">
              <BiMap size={30} className="text-alpukat " />
              <p className=" ms-1 mt-1 fs-6  ">{alamat}</p>
            </div>
          </div>
        </div>

        <div className="mt-5 pb-5 text-end">
          <Button variant="danger" className="fw-bold text-putih px-3 ms-2">
            Tolak Kemitraan
          </Button>
          <Button variant="lime" className="fw-bold text-putih px-3 ms-3">
            Verifikasi
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Index;
