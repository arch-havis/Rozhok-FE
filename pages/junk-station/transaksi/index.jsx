import React, { useState } from "react";
import Router, { useRouter } from "next/router";
import {
  Modal,
  Button,
  Container,
  Row,
  Form,
  Table,
  Alert,
} from "react-bootstrap";
import HeaderJunkStation from "../../../components/HeaderJunkStation";

const Index = () => {
  const router = useRouter();

  // get Detail Transaksi
  const getDetailTransaksi = (transaksiId) => {
    // console.log(menteeId);
    Router.push({
      pathname: `/junk-station/detail-transaksi`,
      query: {
        transaksiId: transaksiId,
      },
    });
  };

  return (
    <div className="bg-putih min-vh-100">
      <HeaderJunkStation />
      <Container className="pt-3">
        <h4 className="border-bottom  border-3 border-dark text-center">
          Daftar Transaksi
        </h4>
        <div className=" mt-5 d-flex flex-column flex-sm-row justify-content-end">
          <input type="date" className="rounded-2 border-1 border-dark" />
          <input
            type="date"
            className="rounded-2 border-1 border-dark mx-0 mx-sm-2 my-1 my-sm-0"
          />
          <Button variant="lime" className="fw-bold text-putih px-3">
            Filter
          </Button>
        </div>
        <Table responsive="xl" className="bg-tea mt-3">
          <thead className="bg-alpukat text-putih ">
            <tr className="">
              <th className="text-center">No</th>
              <th>Kode Transaksi</th>
              <th>Biaya Transaksi</th>
              <th>Tanggal Transaksi</th>
              {/* <th></th>
              <th></th> */}
              <th colSpan={2} className=" text-center"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" text-center">1</td>
              <td className=" ">TF-192740</td>
              <td className=" ">Rp 300000</td>
              <td>2022-01-02</td>
              {/* <td></td>
              <td></td> */}
              <td className="text-end ">
                <button
                  className="p-0 bg-tea border-0 text-decoration-underline "
                  onClick={() => getDetailTransaksi(1)}
                >
                  Detail
                </button>
              </td>
              <td className="text-center "></td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Index;
