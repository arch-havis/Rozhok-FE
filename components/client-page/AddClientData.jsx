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
  props,
  kab,
  kec,
  handleProvinsi,
  handleKab,
  handleKec,
  handleStatus,
  handleJalan,
  handleTambahAlamat,
  handleEditAlamat
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
            {type === "nama" && "Ganti Nama" || type === "alamat" && "Tambah Alamat" || type === "edit" && "Edit Alamat"}{" "}
          </Modal.Title>
        </Modal.Header>

        <Form
          onSubmit={
            type === "nama"
              && ((e) => handleSubmit(e))
              || type === "alamat" && ((e) => handleTambahAlamat(e))
              || type === "edit" &&  ((e) => handleEditAlamat(e))
          }
        >
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
                  // controlId="formBasicEmail"
                  // onChange={(e) => handleInput(e)}
                >
                  <Form.Label>Provinsi</Form.Label>
                  <Form.Select
                    classname="text-alpukat"
                    onChange={(e) => handleProvinsi(e)}
                  >
                    <option selected disabled>
                      Pilih Provinsi
                    </option>
                    {props.provinsi.map((item, index) => {
                      return (
                        <option value={item.id} label={item.nama} key={index}>
                          {item.nama}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicEmail"
                  // onChange={(e) => handleInput(e)}
                >
                  <Form.Label>Kabupaten</Form.Label>
                  <Form.Select
                    className="text-alpukat"
                    onChange={(e) => handleKab(e)}
                  >
                    <option selected disabled>
                      Pilih Kab./Kota
                    </option>
                    {kab.map((item, index) => {
                      return (
                        <option value={item.id} key={index}>
                          {item.nama}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicEmail"
                  // onChange={(e) => handleInput(e)}
                >
                  <Form.Label>Kecamatan</Form.Label>
                  <Form.Select
                    className="text-alpukat"
                    onChange={(e) => handleKec(e)}
                  >
                    <option selected disabled>
                      Pilih Kec.
                    </option>
                    {kec.map((item, index) => {
                      return (
                        <option value={item.id} key={index}>
                          {item.nama}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => handleStatus(e)}
                  >
                    <option selected disabled>
                      Status
                    </option>
                    <option value="Utama">Utama</option>
                    <option value="Cadangan">Cadangan</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Jalan</Form.Label>
                  <Form.Control
                    as="textarea"
                    onChange={(e) => handleJalan(e)}
                  ></Form.Control>
                </Form.Group>
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
