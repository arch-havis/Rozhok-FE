import React from "react";
import { Container, Button, Table, Form } from "react-bootstrap";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiDetail } from "react-icons/bi";

import HeaderAdmin from "../../../components/HeaderAdmin";

const Index = () => {
  const handleDetailJunkStation = () => {
    location.href = "/admin/produk/detail-junk-station";
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
            <Form.Select aria-label="Default select example">
              <option>Semua Kategori</option>
              <option value="1">Terverifikasi</option>
              <option value="2">Gagal Verifikasi</option>
              <option value="3">Verifikasi Tertunda</option>
            </Form.Select>
          </div>
          <Button variant="lime" className="fw-bold text-putih px-3 ms-2">
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
            <tr>
              <td className=" text-center">1</td>
              <td className=" ">TPA Bersih</td>
              <td>Usop</td>
              <td>08080808</td>
              <td colSpan={4}>Terverifikasi</td>
              <td className="text-end ">
                <button
                  className="p-0 bg-tea border-0 "
                  onClick={() => handleDetailJunkStation()}
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
