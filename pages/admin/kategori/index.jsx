import React from "react";
import Router, { useRouter } from "next/router";

import HeaderAdmin from "../../../components/HeaderAdmin";
import Footer from "../../../components/Footer";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

const Index = () => {
  const router = useRouter();
  const hargaClient = 666666;
  const hargaMitra = 7777777;

  const gotoTambahKategori = () => {
    Router.push({
      pathname: `/admin/kategori/tambah-kategori`,
      // query: {
      //   transaksiId: transaksiId,
      // },
    });
  };

  const handleEditKategori = () => {
    Router.push({
      pathname: `/admin/kategori/edit-kategori`,
      // query: {
      //   transaksiId: transaksiId,
      // },
    });
  };

  const formatClient = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    currencyDisplay: "symbol",
  }).format(hargaClient);

  const formatMitra = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    currencyDisplay: "symbol",
  }).format(hargaMitra);

  return (
    <div>
      <HeaderAdmin />
      <Container>
        <div className="text-end">
          <Button
            variant="lime mt-5 mb-2 fw-bold text-putih "
            onClick={() => gotoTambahKategori()}
          >
            Tambah Kategori
          </Button>
        </div>
        <Table responsive>
          <thead className="bg-alpukat text-putihan">
            <tr>
              <th>No.</th>
              <th>Kategori</th>
              <th>Harga Client</th>
              <th>Harga Mitra</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="border-tea border">
            <tr>
              <td>1</td>
              <td>Besi</td>
              <td>{formatClient}</td>
              <td>{formatMitra}</td>
              <td>
                <Button
                  variant="putihan"
                  className="text-alpukat text-decoration-none p-0"
                  onClick={() => handleEditKategori()}
                >
                  Edit
                </Button>
                {" | "}
                {/* <a href="" className="text-alpukat text-decoration-none"> */}
                Hapus
                {/* </a> */}
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <Footer />
    </div>
  );
};

export default Index;
