import React from "react";
import { Col, Row, Form, Button, Container } from "react-bootstrap";
const Index = () => {
  const handleCancel = () => {
    location.href = "/junk-station/profile";
  };

  const handleEditProfile = (e) => {
    e.preventDefault();
    location.href = "/junk-station/profile";
  };

  return (
    <div>
      <Row
        className="p-0 p-lg-5 m-0 d-flex justify-content-center justify-content-xl-start"
        style={{
          backgroundImage: `url("/bg-login.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "60.9rem",
          maxWidth: "100%",
        }}
      >
        <Col xl="7" lg="8" md="10" sm="12" className=" mt-2 ">
          <Form
            //   onSubmit={(e) => handleSubmit(e)}
            className="border border-lime p-5 bg-putihan text-alpukat rounded-3 border-2"
          >
            <h2 className="text-center">Edit Profile</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nama Junk Station</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan nama junk station"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nama Pemilik</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan nama pemilik junk station"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>No Telepon</Form.Label>
              <Form.Control
                type="number"
                placeholder="Masukkan no telepon anda"
              />
            </Form.Group>
            <div className="mb-3">
              <Form.Label>Alamat</Form.Label>
              <div className="d-flex flex-sm-row flex-column">
                <Form.Select aria-label="Default select example">
                  <option>Provinsi</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                  aria-label="Default select example"
                  className="mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  <option>Kab/Kota</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select aria-label="Default select example">
                  <option>Kecamatan</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>
            <Form.Group
              className="my-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Jalan</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Masukkan alamat nama jalan atau desa"
              />
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Button
                variant="danger"
                onClick={() => handleCancel()}
                style={{ color: "white" }}
              >
                Cancel
              </Button>
              <Button
                className="ms-5"
                variant="lime"
                type="submit"
                style={{ color: "white" }}
                onClick={(e) => handleEditProfile(e)}
              >
                Simpan
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Index;
