import axios from "axios";
import { getCookie } from "cookies-next";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import Footer from "../../../components/Footer";
import HeaderClient from "../../../components/HeaderClient";

export const getServerSideProps = async (context) => {
  const token = getCookie("token", context);
  const getCart = await axios.get("https://rozhok.romodeus.site/carts", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const cart = await getCart;

  return {
    props: {
      cart: cart.data,
    },
  };
};

const Cart = (props) => {
  const harga = 100000;

  const token = getCookie("token");

  const [jumlah, setJumlah] = useState(1);
  let sub = harga * jumlah;

  // console.log(props.cart.data.filter((items) => items.checklist === true));
  // const format = Intl.NumberFormat("id", {
  //     style: "currency",
  //     currency: "IDR"
  // })

  // let n = format.format(jumlah)
  // console.log(n);

  // const handleDecrease = (e) => {
  //   e.preventDefault();
  //   if (jumlah == 1) {
  //     null;
  //   } else {
  //     setJumlah(jumlah - 1);
  //   }
  // };

  // const handleIncrease = (e) => {
  //   e.preventDefault();
  //   setJumlah(jumlah + 1);
  // };

  const handleBuy = async (e) => {
    // await axios({
    //   method: "post",
    //   url: "https://rozhok.romodeus.site/transaksi/client",
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // })
    //   .then((respons) => {
    //     alert(response.data.message);
    //   })
    //   .catch((error) => {
    //     console.log(error.data.message);
    //   });
    Router.push({
      pathname: "/client/toko/checkout",
      query: {
        total: grand,
      },
    });
  };

  const [stat, setStat] = useState(false);
  // console.log(stat);

  const [id, setId] = useState();
  // console.log(id);

  const handleDelete = async (e) => {
    setId(),
      await axios({
        method: "delete",
        url: `https://rozhok.romodeus.site/cart/${e.target.parentElement.value}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          alert(response.data.message);
          window.location.reload();
        })
        .catch((error) => {
          console.log(error.data.message);
        });
  };

  const [counter, setCounter] = useState();
  const [checklist, setChecklist] = useState(false);

  // console.log(checklist);

  const handleCheck = async (e) => {
    // e.preventDefault();
    // setChecklist(!checklist);
    // console.log(e);
    await setData({
      counter: counter,
      checklist: !checklist,
    });
    console.log("data is :" + checklist);
    // handleUpdate(e);
    // handleUpdate();
  };

  const [data, setData] = useState({
    counter: counter,
    checklist: checklist,
  });

  // console.log(data);
  // const handleData = () => [

  // ]

  const handleUpdate = async (e) => {
    // e.preventDefault();
    // data.preventDefault();
    // setData({
    //   counter: counter,
    //   checklist: !checklist,
    // });
    // console.log("data is " + data.checklist);
    await axios({
      method: "put",
      url: `https://rozhok.romodeus.site/cart/${parseInt(e.target.value)}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        checklist: e.target.checked,
      },
    })
      .then((response) => {
        alert(response.data.message);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.data.message);
      });
  };

  const handleDecrease = async (e) => {
    console.log(e.target);
    await axios({
      method: "put",
      url: `https://rozhok.romodeus.site/cart/${parseInt(e.target.value)}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        // checklist:
        //   e.target.parentElement.parentElement.parentElement.parentElement
        //     .parentElement.parentElement.previousElementSibling.checked,
        counter: e.target.id,
      },
    })
      .then((response) => {
        alert(response.data.message);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.data.message);
      });
  };

  const handleIncrease = async (e) => {
    console.log(e.target);
    await axios({
      method: "put",
      url: `https://rozhok.romodeus.site/cart/${parseInt(e.target.value)}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        // checklist:
        //   e.target.parentElement.parentElement.parentElement.parentElement
        //     .parentElement.parentElement.previousElementSibling.checked,
        counter: e.target.id,
      },
    })
      .then((response) => {
        alert(response.data.message);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.data.message);
      });
  };
  let grand = 0;
  let grandData;
  if (props.cart.data !== null) {
    grandData = props.cart.data.filter((items) => items.checklist === true);
    grandData.map((items) => {
      grand += items.price * items.qty;
    });
  }
  console.log(grandData);
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
        {props.cart.data === null ? (
          <></>
        ) : (
          props.cart.data.map((items, index) => {
            return (
              <Row className="p-0 m-0" key={index}>
                <Col md={3} />
                <div key={`default-checkbox`} className="col-md-6 mb-3">
                  {items.checklist === false ? (
                    <Form.Check
                      type="checkbox"
                      onChange={(e) => handleUpdate(e)}
                      id={items.qty}
                      value={items.id_cart}
                      label={
                        <>
                          <Row className="border border-2 border-lime rounded-2 bg-tea pt-2 ms-2">
                            <Col md={3}>
                              <img
                                src={items.image_url}
                                alt=""
                                style={{ maxWidth: "100%", minHeight: "100%" }}
                                className="rounded-2"
                              />
                            </Col>
                            <Col md={9}>
                              <Row className="p-0 m-0">
                                <Col>
                                  <h5>{items.product_name}</h5>
                                  <h6>
                                    <b>
                                      {new Intl.NumberFormat("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                        currencyDisplay: "symbol",
                                        minimumFractionDigits: 0,
                                      }).format(items.price)}
                                    </b>
                                  </h6>
                                  <h6>
                                    Sub-Total{" "}
                                    {new Intl.NumberFormat("id-ID", {
                                      style: "currency",
                                      currency: "IDR",
                                      currencyDisplay: "symbol",
                                      minimumFractionDigits: 0,
                                    }).format(items.qty * items.price)}
                                  </h6>
                                </Col>
                                <Col className="text-center">
                                  <p id="2">Jumlah : {items.qty}</p>
                                  <div className="mb-2">
                                    <Button
                                      variant="lime"
                                      className="text-putihan me-1"
                                      value={items.id_cart}
                                      id="decrement"
                                      onClick={(e) => handleDecrease(e)}
                                    >
                                      -
                                    </Button>
                                    <Button
                                      variant="lime"
                                      className="text-putihan"
                                      id="increment"
                                      value={items.id_cart}
                                      onClick={(e) => handleIncrease(e)}
                                    >
                                      +
                                    </Button>
                                  </div>
                                  <div>
                                    <Button
                                      variant="danger"
                                      value={items.id_cart}
                                      onClick={(e) => {
                                        handleDelete(e);
                                      }}
                                    >
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
                  ) : (
                    // {total =+ (items.price*items.qty)}
                    <Form.Check
                      type="checkbox"
                      // onChange={(e) => handleUpdate(e)}
                      id={items.qty * items.price}
                      value={items.id_cart}
                      onChange={(e) => handleUpdate(e)}
                      defaultChecked
                      label={
                        <>
                          <Row className="border border-2 border-lime rounded-2 bg-tea pt-2 ms-2">
                            <Col md={3}>
                              <img
                                src={items.image_url}
                                alt=""
                                style={{ maxWidth: "100%", minHeight: "100%" }}
                                className="rounded-2"
                              />
                            </Col>
                            <Col md={9}>
                              <Row className="p-0 m-0">
                                <Col>
                                  <h5>{items.product_name}</h5>
                                  <h6>
                                    <b>
                                      {new Intl.NumberFormat("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                        currencyDisplay: "symbol",
                                        minimumFractionDigits: 0,
                                      }).format(items.price)}
                                    </b>
                                  </h6>
                                  <h6>
                                    Sub-Total{" "}
                                    {new Intl.NumberFormat("id-ID", {
                                      style: "currency",
                                      currency: "IDR",
                                      currencyDisplay: "symbol",
                                      minimumFractionDigits: 0,
                                    }).format(items.qty * items.price)}
                                  </h6>
                                </Col>
                                <Col className="text-center">
                                  <p id="2">Jumlah : {items.qty}</p>
                                  <div className="mb-2">
                                    <Button
                                      variant="lime"
                                      className="text-putihan me-1"
                                      value={items.id_cart}
                                      id={items.qty}
                                      onClick={(e) => handleDecrease(e)}
                                    >
                                      -
                                    </Button>
                                    <Button
                                      variant="lime"
                                      className="text-putihan"
                                      id="increment"
                                      value={items.id_cart}
                                      onClick={(e) => handleIncrease(e)}
                                    >
                                      +
                                    </Button>
                                  </div>
                                  <div>
                                    <Button
                                      variant="danger"
                                      value={items.id_cart}
                                      onClick={(e) => {
                                        handleDelete(e);
                                      }}
                                    >
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
                  )}
                </div>
              </Row>
            );
          })
        )}
        <Row className="p-0 m-0">
          <Col md={3} className="text-end">
            <b>
              Grand Total{" "}
              {Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                currencyDisplay: "symbol",
                minimumFractionDigits: 0,
              }).format(grand)}
            </b>
          </Col>
          <Col md={6} className="text-end p-0 m-0">
            <Button variant="lime text-putihan" onClick={(e) => handleBuy(e)}>
              Beli
            </Button>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
