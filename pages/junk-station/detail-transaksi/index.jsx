import React from "react";
import { Container } from "react-bootstrap";
import HeaderJunkStation from "../../../components/HeaderJunkStation";

const Index = () => {
  return (
    <div className="bg-putih min-vh-100">
      <HeaderJunkStation />
      <Container className="py-4">
        <h2 className="text-end">Detail Transaksi</h2>
        <div className="bg-tea mt-5 p-3 rounded-3 shadow-md">
          <h3 className="ms-1">Kategori: Besi</h3>
          <div className="ms-2 ms-sm-5 d-flex justify-content-between mb-3">
            <p>
              Berat <span className="bg-putihan py-1 px-3">10</span> (kg)
            </p>
            <p>
              Rp<span className="bg-putihan py-1 px-3 ms-2"> 100000</span>
            </p>
          </div>
        </div>
        <div className="bg-tea mt-5 p-3 rounded-3 shadow-md">
          <h3 className="ms-1">Kategori: Besi</h3>
          <div className="ms-2 ms-sm-5 d-flex justify-content-between mb-3">
            <p>
              Berat <span className="bg-putihan py-1 px-3">10</span> (kg)
            </p>
            <p>
              Rp<span className="bg-putihan py-1 px-3 ms-2"> 100000</span>
            </p>
          </div>
        </div>
        <div className="bg-alpukat d-flex justify-content-between align-content-center text-putih fw-bold py-2 px-3 rounded-3 mt-5">
          <p>Total</p>
          <p>Rp 200000</p>
        </div>
      </Container>
    </div>
  );
};

export default Index;
