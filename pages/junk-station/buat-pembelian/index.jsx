import React, { useState } from "react";
import {
  Modal,
  Button,
  Container,
  Row,
  Form,
  Table,
  Alert,
} from "react-bootstrap";
import HeaderJunkStation from "../../../components/HeaderJunkStation";
import { FiEdit } from "react-icons/fi";
import { AiFillCheckCircle, AiTwotoneDelete } from "react-icons/ai";

const Index = () => {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const handleClose = () => setShow(false);
  const handleCloseAlert = () => setShowAlert(false);
  const handleShow = () => setShow(true);
  const handleShowAlert = () => setShowAlert(true);

  return (
    <div className="bg-putih min-vh-100">
      <HeaderJunkStation />
      <Container className="pt-3">
        <h4 className="border-bottom  border-3 border-dark text-center">
          Daftar Pembelian Rosok
        </h4>
        <div className="text-end mt-5">
          <Button
            variant="lime"
            className="fw-bold text-putih "
            onClick={handleShow}
          >
            Tambah Pembelian
          </Button>
        </div>

        {/* modal */}
        <Modal show={show} onHide={handleClose}>
          <div className="px-5">
            <h3 className="mx-auto text-center pt-4 pb-1 border-bottom border-3 border-dark">
              Beli Rosok
            </h3>
          </div>
          <Modal.Body>
            <Form
              //   onSubmit={(e) => handleSubmit(e)}
              className=" bg-putihan text-alpukat rounded-3 "
            >
              <div className="mb-3">
                <Form.Label>Kategori</Form.Label>
                <div className="d-flex flex-sm-row flex-column">
                  <Form.Select aria-label="Default select example">
                    <option>Pilih Kategori</option>
                    <option value="1">Besi</option>
                    <option value="2">Plastik</option>
                    <option value="3">Organik</option>
                  </Form.Select>
                </div>
              </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Berat (kg)</Form.Label>
                <Form.Control
                  type="number"
                  // placeholder="Masukkan no telepon anda"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Harga (Rp)</Form.Label>
                <Form.Control
                  type="number"
                  // placeholder="Masukkan no telepon anda"
                />
              </Form.Group>
            </Form>
            <div className="d-flex justify-content-end ">
              <Button
                variant="danger"
                className="me-2 px-3"
                onClick={handleClose}
              >
                Batal
              </Button>
              <Button
                variant="lime"
                className="text-putih"
                onClick={handleClose}
              >
                Tambahkan
              </Button>
            </div>
          </Modal.Body>
        </Modal>

        {/* tabel */}
        <Table responsive="md" className="bg-tea mt-3">
          <thead className="bg-alpukat text-putih ">
            <tr className="">
              <th className="text-center">No</th>
              <th>Kategori</th>
              <th colSpan={2} className=" text-center"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" text-center">1</td>
              <td className=" ">Besi</td>
              <td className="text-end ">
                <button className="p-0 bg-tea border-0 " onClick={handleShow}>
                  <FiEdit size={25} className="text-alpukat " />
                </button>
              </td>
              <td className="text-center ">
                <button className="p-0 bg-tea border-0  ">
                  <AiTwotoneDelete size={25} className="text-alpukat" />
                </button>
              </td>
            </tr>
          </tbody>
        </Table>

        <div className="text-end">
          <Button
            variant="alpukat"
            className="px-4"
            onClick={() => setShowAlert(true)}
          >
            Beli
          </Button>
        </div>

        {/* alert */}
        <Modal show={showAlert} onHide={handleCloseAlert}>
          <Modal.Body className="bg-lime rounded-3">
            <div className="text-center">
              <AiFillCheckCircle size={50} className="text-alpukat" />
              <h2 calassName="text-alpukat">Selamat !!!</h2>
              <p className="fs-4">Pembelian rosok berhasil dilakukan</p>
            </div>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default Index;
