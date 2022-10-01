import React, { useEffect, useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import Footer from "../../../components/Footer";
import HeaderClient from "../../../components/HeaderClient";

const Cart = () => {
  const harga = 100000;

  const [jumlah, setJumlah] = useState(1);
  let sub = harga * jumlah;

  // const format = Intl.NumberFormat("id", {
  //     style: "currency",
  //     currency: "IDR"
  // })

  // let n = format.format(jumlah)
  // console.log(n);

  const handleDecrease = (e) => {
    e.preventDefault();
    if (jumlah == 1) {
      null;
    } else {
      setJumlah(jumlah - 1);
    }
  };

  const handleIncrease = (e) => {
    e.preventDefault();
    setJumlah(jumlah + 1);
  };

  return (
    <div>
      <HeaderClient />
      <div className="text-center p-5 text-lime">
        <h1>
          <b>Cart</b>
        </h1>
      </div>
      <div className="pt-0 p-5 me-5 ms-5">
        <div className="border-bottom border-gray border-2 text-end"></div>
      </div>
      <div id="product" className="mb-5">
        <Row className="p-0 m-0">
          <Col md={3} />
          <div key={`default-checkbox`} className="col-md-6 mb-3">
            <Form.Check
              type="checkbox"
              id={`default-checkbox`}
              label={
                <>
                  <Row className="border border-2 border-lime rounded-2 bg-tea pt-2 ms-2">
                    <Col md={3}>
                      <img
                        src="https://cdn-brilio-net.akamaized.net/news/2017/11/02/134250/698323-lampu-hias-botol-bekas.jpg"
                        alt=""
                        style={{ maxWidth: "100%", minHeight: "100%" }}
                        className="rounded-2"
                      />
                    </Col>
                    <Col md={9}>
                      <Row className="p-0 m-0">
                        <Col>
                          <h5>Nama Produk</h5>
                          <h6>
                            <b>{harga}</b>
                          </h6>
                          <h6>
                            Sub-Total{" "}
                            {new Intl.NumberFormat("id-ID", {
                              style: "currency",
                              currency: "IDR",
                              currencyDisplay: "symbol",
                            }).format(sub)}
                          </h6>
                        </Col>
                        <Col className="text-center">
                          <p>Jumlah : {jumlah}</p>
                          <div className="mb-2">
                            <Button
                              variant="lime"
                              className="text-putihan me-1"
                              onClick={(e) => handleDecrease(e)}
                            >
                              -
                            </Button>
                            <Button
                              variant="lime"
                              className="text-putihan"
                              onClick={(e) => handleIncrease(e)}
                            >
                              +
                            </Button>
                          </div>
                          <div>
                            <Button variant="danger">
                              <b className="text-putihan">Remove</b>
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <p></p>
                  </Row>
                  <p></p>
                </>
              }
            />
          </div>
        </Row>
        <Row className="p-0 m-0">
          <Col md={3} />
          <div key={`default-checkbox`} className="col-md-6 mb-3">
            <Form.Check
              type="checkbox"
              id={`default-checkbox`}
              label={
                <>
                  <Row className="border border-2 border-lime rounded-2 bg-tea pt-2 ms-2">
                    <Col md={3}>
                      <img
                        src="https://cdn-brilio-net.akamaized.net/news/2017/11/02/134250/698323-lampu-hias-botol-bekas.jpg"
                        alt=""
                        style={{ maxWidth: "100%", minHeight: "100%" }}
                        className="rounded-2"
                      />
                    </Col>
                    <Col md={9}>
                      <Row className="p-0 m-0">
                        <Col>
                          <h5>Nama Produk</h5>
                          <h6>
                            <b>{harga}</b>
                          </h6>
                          <h6>
                            Sub-Total{" "}
                            {new Intl.NumberFormat("id-ID", {
                              style: "currency",
                              currency: "IDR",
                              currencyDisplay: "symbol",
                            }).format(sub)}
                          </h6>
                        </Col>
                        <Col className="text-center">
                          <p>Jumlah : {jumlah}</p>
                          <div className="mb-2">
                            <Button
                              variant="lime"
                              className="text-putihan me-1"
                              onClick={(e) => handleDecrease(e)}
                            >
                              -
                            </Button>
                            <Button
                              variant="lime"
                              className="text-putihan"
                              onClick={(e) => handleIncrease(e)}
                            >
                              +
                            </Button>
                          </div>
                          <div>
                            <Button variant="danger">
                              <b className="text-putihan">Remove</b>
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <p></p>
                  </Row>
                  <p></p>
                </>
              }
            />
          </div>
        </Row>
        <Row className="p-0 m-0">
          <Col md={3} className="text-end">
            <b>Grand Total</b>
          </Col>
          <Col md={6} className="text-end p-0 m-0">
            <Button variant="lime text-putihan">Beli</Button>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
