import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeaderAdmin from "../../../../components/HeaderAdmin";

const Index = () => {
  return (
    <div className="bg-putih">
      <HeaderAdmin />
      <Container className="min-vh-100 pt-5">
        <h2 className="text-end">Detail Produk</h2>
        <div className="pt-5 d-flex flex-column flex-md-row">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1591198619986-ac025da6a1f3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cnViYmlzaHx8fHx8fDE2NjQ3Nzc1Mzc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"
              alt=""
              className="w-100 rounded-3"
            />
          </div>
          <div className=" d-flex flex-column justify-content-center px-md-3 fs-5 mt-3 mt-md-0 mt-lg-5">
            <p className="">Nama Produk</p>
            <p>Harga Produk</p>
            <p>Stok: 20</p>
            <p className="fs-6 border border-1 border-dark p-2 rounded-2 bg-light fs-5">
              Deskripsi Produk Deskripsi Product untuk menggambarkan informasi
              Product lebih detail
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Index;
