import React from "react";
import { Row, Col, Carousel, Table, Button } from "react-bootstrap";
import HeaderClient from "../../../components/HeaderClient";
import Footer from "../../../components/Footer"

const Index = () => {
  const harga = "Rp. 100.000";
  return (
    <div>
      <HeaderClient />
      <Row className="pt-5 mt-5 pe-0 me-0 ps-0 ms-0 mb-5">
        <Col md={3}></Col>
        <Col md={6} className="border border-lime rounded-2 text-alpukat p-5">
          <p>
            Nobis molestiae nihil autem laborum earum. Rerum ducimus expedita
            modi dolor molestias aut. Vero doloribus rerum quis voluptas fugiat
            accusamus minima. Soluta temporibus consequatur quaerat omnis dolore
            qui. Inventore ut sed maiores.
          </p>
          <p>
            Nemo eum iste quo ut. Sapiente porro rerum pariatur necessitatibus
            et. Dicta a aut est eos ipsam ut voluptatibus. Maxime facere dolorem
            dolores fuga ipsum nihil et ipsam. Laudantium corporis deserunt
            illum molestiae. Quasi ducimus ut in veritatis magni sed ut.
          </p>
          <p>
            Porro aut labore amet sapiente recusandae. Recusandae veniam sit
            nihil repellendus distinctio. Voluptates et dignissimos quo.
            Voluptas fugiat perferendis facere voluptates. Iste omnis suscipit
            numquam dolores dolor molestiae in.
          </p>
          <p>
            Occaecati omnis est et qui veniam deleniti. Cumque dolorem magnam
            recusandae. Ipsam in quo et id hic laboriosam suscipit.
          </p>
          <p>
            Omnis neque qui eum occaecati dolor. Est voluptas sit rerum id
            praesentium. Qui atque in tenetur cumque dolorem. Dolore aut debitis
            sequi qui et asperiores.
          </p>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Carousel id="carousel" variant="dark" className="border-top-dark p-5 bg-tea mb-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ maxHeight: "500px" }}
            src="https://i0.wp.com/www.oakpark.com/wp-content/uploads/2022/06/Recycling_278963590.jpeg?fit=1200%2C800&ssl=1/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ maxHeight: "500px" }}
            src="https://i0.wp.com/www.oakpark.com/wp-content/uploads/2022/06/Recycling_278963590.jpeg?fit=1200%2C800&ssl=1/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ maxHeight: "500px" }}
            src="https://i0.wp.com/www.oakpark.com/wp-content/uploads/2022/06/Recycling_278963590.jpeg?fit=1200%2C800&ssl=1/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div id="produk" className="mt-5 mb-5 ps-5 pe-5 pt-5">
        <Row className="border border-lime text-alpukat rounded-2">
          <div
            id="banner"
            className="position-relative top-50 start-50 translate-middle text-center bg-tea w-50 border border-lime m-0 p-0 rounded-2"
          >
            <div>
              <Table>
                <thead>
                  <tr>
                    <th>Penjemputan</th>
                    <th>Fast Respond</th>
                    <th>Cash Tunai</th>
                  </tr>
                </thead>
                <tbody className="fs-6">
                  <td>100% tepat waktu</td>
                  <td>24 / 7 Support</td>
                  <td>100%</td>
                </tbody>
              </Table>
            </div>
          </div>
          <div className="text-center">
            <h1>
              <b>Produk Kami</b>
            </h1>
          </div>
          <div className="mb-5">
            <Row className="ps-5 pe-5">
              <Col
                md={3}
                className="border border-2 border-lime rounded-2 bg-tea pt-2"
              >
                <img
                  src="https://cdn-brilio-net.akamaized.net/news/2017/11/02/134250/698323-lampu-hias-botol-bekas.jpg"
                  alt=""
                  style={{ maxWidth: "100%" }}
                  className="rounded-2"
                />
                <h6>
                  <b>{harga}</b>
                </h6>
                <Button variant="lime border border-alpukat border-2">
                  <b className="text-alpukat">Add Cart</b>
                </Button>
                <p></p>
              </Col>
              <Col
                md={3}
                className="border border-2 border-lime rounded-2 bg-tea pt-2"
              >
                <img
                  src="https://cdn-brilio-net.akamaized.net/news/2017/11/02/134250/698323-lampu-hias-botol-bekas.jpg"
                  alt=""
                  style={{ maxWidth: "100%" }}
                  className="rounded-2"
                />
                <h6>
                  <b>{harga}</b>
                </h6>
                <Button variant="lime border border-alpukat border-2">
                  <b className="text-alpukat">Add Cart</b>
                </Button>
                <p></p>
              </Col>
              <Col
                md={3}
                className="border border-2 border-lime rounded-2 bg-tea pt-2"
              >
                <img
                  src="https://cdn-brilio-net.akamaized.net/news/2017/11/02/134250/698323-lampu-hias-botol-bekas.jpg"
                  alt=""
                  style={{ maxWidth: "100%" }}
                  className="rounded-2"
                />
                <h6>
                  <b>{harga}</b>
                </h6>
                <Button variant="lime border border-alpukat border-2">
                  <b className="text-alpukat">Add Cart</b>
                </Button>
                <p></p>
              </Col>
              <Col
                md={3}
                className="border border-2 border-lime rounded-2 bg-tea pt-2"
              >
                <img
                  src="https://cdn-brilio-net.akamaized.net/news/2017/11/02/134250/698323-lampu-hias-botol-bekas.jpg"
                  alt=""
                  style={{ maxWidth: "100%" }}
                  className="rounded-2"
                />
                <h6>
                  <b>{harga}</b>
                </h6>
                <Button variant="lime border border-alpukat border-2">
                  <b className="text-alpukat">Add Cart</b>
                </Button>
                <p></p>
              </Col>
            </Row>
          </div>
        </Row>
      </div>
      <Footer/>
    </div>
  );
};

export default Index;
