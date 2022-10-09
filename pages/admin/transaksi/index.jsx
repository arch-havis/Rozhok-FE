import React, { useState, useEffect } from "react";
import HeaderAdmin from "../../../components/HeaderAdmin";
import { Form, Button, Table } from "react-bootstrap";
import { AiTwotoneEdit } from "react-icons/ai";
import Router from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

const Index = () => {
  const [dataTransaksi, setDataTransaksi] = useState([]);

  useEffect(() => {
    getDataTransaksi();
  }, []);

  const getDataTransaksi = async () => {
    try {
      const response = await axios.get(
        "https://altagp3.online/transaksi/admin",
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      setDataTransaksi(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Push params use Router
  const DetailTransaksi = (item) => {
    Router.push({
      pathname: `/admin/transaksi/${item}`,
      query: {
        item: item,
      },
    });
  };

  return (
    <div>
      <HeaderAdmin />
      <div className="container">
        <h3 className="d-flex justify-content-center mt-5">Daftar Transaksi</h3>
        <div className="border border-2 border-alpukat"></div>
        {/* <div className="d-flex justify-content-end" style={{ marginTop: "50px" }}>
                    <div className=" mt-5 d-flex flex-column flex-sm-row justify-content-end">
                        <Form.Select aria-label="Default select example" className="w-50 me-2 border-1 border-lime float-end mb-1">
                            <option>Status</option>
                            <option value="sudah bayar">Sudah bayar</option>
                            <option value="belum bayar">Belum bayar</option>
                            <option value="dikirim">Dikirim</option>
                        </Form.Select>
                        <input type="date" className="rounded-2 border-1 border-lime" />
                        <input type="date" className="rounded-2 border-1 border-lime mx-0 mx-sm-2 my-1 my-sm-0" />
                        <Button variant="lime" className="fw-bold text-putih px-3">
                            Filter
                        </Button>
                    </div>
                </div> */}
        <Table className="mt-5 rounded rounded-3 overflow-hidden w-100 mx-auto">
          <thead variant="alpukat" className="bg-alpukat text-white">
            <tr>
              <th>No</th>
              <th>Kode Transaksi</th>
              <th>Biaya Transaksi</th>
              {/* <th>Tanggal dibuat</th> */}
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-tea">
            {dataTransaksi.map((data, i) => {
              const total = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                currencyDisplay: "symbol",
              }).format(data.grand_total);
              return (
                <tr key={data.id_transaksi}>
                  <td>{i + 1}</td>
                  <td>{data.kode_transaksi}</td>
                  <td>{total}</td>
                  <td>{data.status}</td>
                  <td>
                    <AiTwotoneEdit
                      className="fs-4 text-lime user-select-auto"
                      onClick={() => DetailTransaksi(data.id_transaksi)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Index;
