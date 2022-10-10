import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../../components/HeaderAdmin";
import Footer from "../../../components/Footer";
import { Row, Col } from "react-bootstrap";
import Cookies from "js-cookie";

const Index = () => {
  const [dataDashboard, setDataDashboard] = useState([]);

  // getDashboard
  useEffect(() => {
    getDashboard();
  }, []);

  const getDashboard = () => {
    var axios = require("axios");
    var data = "";

    var config = {
      method: "get",
      url: "https://altagp3.online/admin",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.data));
        setDataDashboard(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <HeaderAdmin />
      <Row className="text-alpukat mt-5 m-0 text-center">
        <Col md={1}></Col>
        <Col
          id="kiri"
          md={4}
          className="p-2 border border-alpukat rounded-2 bg-tea"
        >
          <Col>
            <h6>Total Junk Station</h6>
          </Col>
          <Col>
            <h4>
              <b> {dataDashboard.total_junk_station} </b>
            </h4>
          </Col>
        </Col>
        <Col md={2}></Col>
        <Col
          id="kanan"
          md={4}
          className="p-2 border border-alpukat rounded-2 bg-tea"
        >
          <Col>
            <h6>Total Client</h6>
          </Col>
          <Col>
            <h4>
              <b> {dataDashboard.total_client} </b>
            </h4>
          </Col>
        </Col>
        <Col md={1}></Col>
      </Row>
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
