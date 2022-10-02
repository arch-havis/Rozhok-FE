import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import HeaderJunkStation from "../../../components/HeaderJunkStation";
import {
  AiFillAlert,
  AiFillBank,
  AiFillPhone,
  AiOutlineLock,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";

// import { HiMapPin } from "react-icons/hi2";
import { BiMap } from "react-icons/bi";

const Index = () => {
  const [status, setStatus] = useState("Terverifikasi");
  const [namaJunkStation, setNamaJunkStation] = useState("TPA Bersih");
  const [namaPemilik, setNamaPemilik] = useState("Mukidi");
  const [email, setEmail] = useState("mukidi@gmail.com");
  const [noTelp, setNoTelp] = useState("09897988");
  const [password, setPassword] = useState("tpa123");
  const [alamat, setAlamat] = useState(
    "Jalan abcde No 67  Kecamatan Selebar Kota Surabaya Jawa Timur"
  );

  return (
    <div className="bg-putih min-vh-100">
      <HeaderJunkStation />
      <Container>
        <Row>
          <Col className="text-end d-flex justify-content-end mt-3 ">
            <div className="d-flex bg-lime px-2 rounded-2">
              <AiFillAlert size={40} className="text-alpukat " />
              <p className="fs-4 mt-1 fw-bold ">{status}</p>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md="7" lg="6" className="">
            <div className="d-flex ">
              <AiFillBank size={30} className="text-alpukat " />
              <p className=" mt-1  ">{namaJunkStation}</p>
            </div>
            <div className="d-flex ">
              <AiOutlineUser size={30} className="text-alpukat " />
              <p className=" mt-1  ">{namaPemilik}</p>
            </div>
            <div className="d-flex ">
              <AiOutlineMail size={30} className="text-alpukat " />
              <p className=" mt-1  ">{email}</p>
            </div>
            <div className="d-flex ">
              <AiFillPhone size={30} className="text-alpukat " />
              <p className=" mt-1  ">{noTelp}</p>
            </div>
            <div className="d-flex ">
              <AiOutlineLock size={30} className="text-alpukat " />
              <p className=" mt-1  ">{password}</p>
            </div>
            <div className="d-flex ">
              <BiMap size={30} className="text-alpukat " />
              <p className=" mt-1 fs-6  ">{alamat}</p>
            </div>
          </Col>
          <Col className=" d-none d-md-block text-end">
            <img
              src="https://cdn.discordapp.com/attachments/1017919526748299295/1025960762583302266/unknown.png"
              alt="logo"
              className="w-75 mt-0 mt-md-5 mt-lg-0"
            />
          </Col>
        </Row>

        {/* Button Perbarui */}
        <Row>
          <Col className="text-end">
            <Button
              className=" mb-3 fw-bold text-putih"
              variant="lime"
              onClick={function () {
                location.href = "/junk-station/edit-profile";
              }}
            >
              Perbarui
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
