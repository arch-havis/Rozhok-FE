import React from "react";
import { Container, Button, Table } from "react-bootstrap";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiDetail } from "react-icons/bi";

import HeaderAdmin from "../../../components/HeaderAdmin";

const Index = () => {
  const handleDetailProduk = () => {
    location.href = "/admin/produk/detail-produk";
  };

  const gotoTambahProduk = () => {
    location.href = "/admin/produk/tambah-produk";
  };

  return (
    <div className="bg-putih">
      <HeaderAdmin />
      <Container className="min-vh-100">
        <h4 className="border-bottom  border-3 border-dark text-center mt-3">
          Daftar Produk
        </h4>
        <div className=" text-end mt-5">
          <Button
            variant="lime"
            className="fw-bold text-putih px-3"
            onClick={() => gotoTambahProduk()}
          >
            Tambah Produk
          </Button>
        </div>
        <Table responsive="xl" className="bg-tea mt-3">
          <thead className="bg-alpukat text-putih ">
            <tr className="">
              <th className="text-center">No</th>
              <th>Nama Produk</th>
              <th colSpan={4}>Stok</th>
              <th></th>
              <th></th>
              <th></th>
              <th>Harga</th>
              <th colSpan={2} className=" text-center"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" text-center">1</td>
              <td className=" ">Pupuk Organik</td>
              <td colSpan={4}>20</td>
              <td></td>
              <td></td>
              <td></td>
              <td className=" ">Rp 300000</td>
              <td className="text-end ">
                <button
                  className="p-0 bg-tea border-0 "
                  onClick={() => handleDetailProduk()}
                >
                  <BiDetail size={25} className="text-alpukat " />
                </button>
              </td>
              <td className="text-center ">
                <button className="p-0 bg-tea border-0  ">
                  <AiTwotoneDelete size={25} className="text-alpukat" />
                </button>
              </td>
              {/* <td className="text-center "></td> */}
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Index;
