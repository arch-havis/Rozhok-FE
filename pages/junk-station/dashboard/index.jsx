import React, { useEffect, useState } from "react";
import { Button, Carousel, Col, Container, Form, Row } from "react-bootstrap";
import { AiOutlineBell } from "react-icons/ai";
import Cookies from "js-cookie";

import HeaderJunkStation from "../../../components/HeaderJunkStation";

const Index = () => {
  const [index, setIndex] = useState(0);
  const [totalPembelian, setTotalPembelian] = useState(500000);
  const [kategori, setKategori] = useState([]);
  const [filter, setFilter] = useState("year");

  // get Kategori
  useEffect(() => {
    getKategori();
    getTotalPembelian();
  }, []);

  const getKategori = () => {
    var axios = require("axios");
    var data = "";

    var config = {
      method: "get",
      url: "https://altagp3.online/categories",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${Cookies}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data.data));
        setKategori(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // get totalPembelian
  const getTotalPembelian = () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: `https://altagp3.online/junk-station/dashboard?filter=${filter}`,
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.data.total_pembelian));
        setTotalPembelian(response.data.data.total_pembelian);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="bg-putih pb-5">
      <HeaderJunkStation />
      <Container>
        <Row style={{ marginTop: 30 }}>
          <Col xs="12" sm="8" md="6" lg="4" className="d-flex">
            <Form.Select aria-label="Default select example">
              <option disabled>Semua Pembelian</option>
              <option onClick={() => setFilter("year")}>Tahunan</option>
              <option onClick={() => setFilter("month")}>Bulanan</option>
              <option onClick={() => setFilter("day")}>Harian</option>
            </Form.Select>
            <Button variant="lime" className="ms-2 px-4">
              Filter
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="7" md="8" lg="6" className="bg-tea mt-4 rounded-2 ">
            <div className="d-flex align-items-center">
              <AiOutlineBell size={50} />
              <p className="mt-3 fs-4">Total Pembelian</p>
            </div>
            <p className="fs-2 fw-bold text-end me-5 my-3">
              {Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                currencyDisplay: "symbol",
              }).format(totalPembelian)}
            </p>
          </Col>
        </Row>

        {/* Carousel */}
        <Row className=" my-5">
          <Col xs="12" md="11" lg="10" className="m-auto bg-tea rounded-2">
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              variant="dark"
            >
              {kategori.map((item) => {
                return (
                  <Carousel.Item
                    className="my-5 px-5 text-center "
                    key={item.id}
                  >
                    <h3 className="text-center fs-1">
                      {item.nama}
                      <span className="fs-5 ms-1">
                        (
                        {Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          currencyDisplay: "symbol",
                        }).format(item.harga_mitra)}
                        )
                      </span>
                    </h3>
                    <p>{item.desc}</p>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
