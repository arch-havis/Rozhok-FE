import Cookies from "js-cookie";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { Container, Button, Table, Form } from "react-bootstrap";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiDetail } from "react-icons/bi";

import HeaderAdmin from "../../../components/HeaderAdmin";

const Index = () => {
  const [allJS, setAllJS] = useState([]);
  const [filter, setFilter] = useState("");

  const gotoDetailJunkStation = (id) => {
    Router.push({
      pathname: `/admin/junk-station/detail-junk-station`,
      query: {
        id: id,
      },
    });
  };

  // getAllJunkStation
  useEffect(() => {
    getAllJunkStation();
  }, []);

  const getAllJunkStation = () => {
    var axios = require("axios");
    var data = "";

    var config = {
      method: "get",
      url: `https://altagp3.online/junk-station`,
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data.data));
        setAllJS(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // getFilterJS
  useEffect(() => {
    getFilterJunkStation();
  }, []);

  const getFilterJunkStation = () => {
    var axios = require("axios");
    var data = "";

    var config = {
      method: "get",
      url: `https://altagp3.online/junk-station?status_kemitraan=${filter}`,
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data.data));
        setAllJS(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="bg-putih">
      <HeaderAdmin />
      <Container className="min-vh-100">
        <h4 className="border-bottom  border-3 border-dark text-center mt-3">
          Daftar Junk Station
        </h4>
        <div className=" d-flex justify-content-end mt-5">
          <div>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option onClick={getAllJunkStation}>Semua Junk Station</option>
              <option value="terverifikasi">Terverifikasi</option>
              <option value="belum_terverifikasi">Belum Terverifikasi</option>
              <option value="gagal_verifikasi">Gagal Verifikasi</option>
            </Form.Select>
          </div>
          <Button
            variant="lime"
            className="fw-bold text-putih px-3 ms-2"
            onClick={getFilterJunkStation}
          >
            Filter
          </Button>
        </div>
        <Table responsive="xxl" className="bg-tea mt-3">
          <thead className="bg-alpukat text-putih ">
            <tr className="">
              <th className="text-center">No</th>
              <th>Nama Junk Station</th>
              <th>Nama Pemilik</th>
              <th>No Telp</th>
              <th colSpan={4}>Status</th>
              <th colSpan={2} className=" text-center"></th>
            </tr>
          </thead>
          <tbody>
            {allJS.map((item, index) => {
              return (
                <tr key={item.id_junk_station}>
                  <td className=" text-center"> {index + 1} </td>
                  <td className=" text-capitalize">
                    {" "}
                    {item.junk_station_name}{" "}
                  </td>
                  <td className="text-capitalize">
                    {" "}
                    {item.junk_station_owner}{" "}
                  </td>
                  <td> {item.telp} </td>
                  <td colSpan={4}> {item.status_kemitraan} </td>
                  <td className="text-end ">
                    <button
                      className="p-0 bg-tea border-0 "
                      onClick={() =>
                        gotoDetailJunkStation(item.id_junk_station)
                      }
                    >
                      <BiDetail size={25} className="text-alpukat mx-auto" />
                    </button>
                  </td>
                  <td></td>
                  {/* <td className="text-center ">
                    <button className="p-0 bg-tea border-0  ">
                      <AiTwotoneDelete size={25} className="text-alpukat" />
                    </button>
                  </td> */}
                  {/* <td className="text-center "></td> */}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Index;
