import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AddClientData = ({
  show,
  handleClose,
  type,
  handleSubmit,
  handleInputUpdate,
}) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            {type === "nama" ? <>Ganti Nama</> : <>Tambah Alamat</>}{" "}
          </Modal.Title>
        </Modal.Header>

        <Form onSubmit={(e) => handleSubmit(e)}>
          <Modal.Body>
            {type === "nama" ? (
              <>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicEmail"
                  // onChange={(e) => handleInput(e)}
                >
                  <Form.Label>Nama Baru</Form.Label>
                  <Form.Control
                    name="username"
                    type="text"
                    onChange={(e) => handleInputUpdate(e)}
                    placeholder="Nama"
                  />
                </Form.Group>
              </>
            ) : (
              <>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicEmail"
                  onChange={(e) => handleInput(e)}
                >
                  <Form.Label>Provinsi</Form.Label>
                  <Form.Control
                    name="username"
                    type="email"
                    placeholder="Provinsi"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicEmail"
                  onChange={(e) => handleInput(e)}
                >
                  <Form.Label>Kabupaten</Form.Label>
                  <Form.Control
                    name="username"
                    type="email"
                    placeholder="Kabupaten"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicEmail"
                  onChange={(e) => handleInput(e)}
                >
                  <Form.Label>Kecamatan</Form.Label>
                  <Form.Control
                    name="username"
                    type="email"
                    placeholder="Kecamatan"
                  />
                </Form.Group>
                <Form.Select aria-label="Default select example">
                  <option selected disabled>
                    Status
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </>
            )}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Batal
            </Button>
            <Button variant="lime text-putihan" type="submit">
              {type === "nama" ? <>Perbarui</> : <>Tambah</>}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AddClientData;
