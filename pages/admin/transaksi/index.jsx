import React from "react";
import HeaderAdmin from "../../../components/HeaderAdmin";
import { Form, Button, Table } from "react-bootstrap";
import { AiTwotoneEdit } from "react-icons/ai";
import Router from "next/router";

const Index = () => {
    // data dummy
    const transaksi = [
        {
            id: 1,
            nama: "Herbayu",
            hp: "0833456789",
            jalan: "Jl. Dedede RT 08/02",
            provinsi: "Jawa Timur",
            kota: "Trenggalek",
            kecamatan: "Munjungan",
            kodeTransaksi: "TF-194270",
            biayaTransaksi: "Rp 30.000",
            tanggalDibuat: "12/02/2022",
            status: "belum bayar",
            kurir: "JNT",
        },
        {
            id: 2,
            nama: "Rudi",
            hp: "08334566612",
            jalan: "Jl. Dududu RT 02/02",
            provinsi: "Jakarta",
            kota: "Jakarta Timur",
            kecamatan: "Cililitan",
            kodeTransaksi: "TF-194271",
            biayaTransaksi: "Rp 30.000",
            tanggalDibuat: "04/03/2022",
            status: "sudah bayar",
            kurir: "Sicepat",
        },
        {
            id: 3,
            nama: "Andrew",
            hp: "0813456789",
            jalan: "Jl. Dododo RT 08/02",
            provinsi: "Jakarta",
            kota: "Jakarta Selatan",
            kecamatan: "Pasar Minggu",
            kodeTransaksi: "TF-194272",
            biayaTransaksi: "Rp 30.000",
            tanggalDibuat: "01/11/2022",
            status: "dikirim",
            kurir: "Sicepat",
        },
        {
            id: 4,
            nama: "Bayu",
            hp: "0813356999",
            jalan: "Jl. Dididi RT 01/02",
            provinsi: "Jawa Barat",
            kota: "Depok",
            kecamatan: "Cinere",
            kodeTransaksi: "TF-194273",
            biayaTransaksi: "Rp 30.000",
            tanggalDibuat: "01/08/2022",
            status: "dikirim",
            kurir: "JNT",
        },
        {
            id: 5,
            nama: "Ways",
            hp: "0821456789",
            jalan: "Jl. Dadada RT 01/12",
            provinsi: "Jogjakarta",
            kota: "Sleman",
            kecamatan: "Ngemplak",
            kodeTransaksi: "TF-194274",
            biayaTransaksi: "Rp 30.000",
            tanggalDibuat: "03/09/2022",
            status: "dikirim",
            kurir: "JNE",
        },
    ];

    // Push params use Router
    const DetailTransaksi = (item) => {
        Router.push({
            pathname: `/admin/transaksi/${item.id}`,
            query: {
                id: item.id,
                nama: item.nama,
                provinsi: item.provinsi,
                kota: item.kota,
                kecamatan: item.kecamatan,
                jalan: item.jalan,
                kodeTransaksi: item.kodeTransaksi,
                biayaTransaksi: item.biayaTransaksi,
                hp: item.hp,
                kurir: item.kurir,
                status: item.status,
            },
        });
    };

    return (
        <div>
            <HeaderAdmin />
            <div className="container">
                <h3 className="d-flex justify-content-center mt-5">Daftar Transaksi</h3>
                <div className="border border-2 border-alpukat"></div>
                <div className="d-flex justify-content-end" style={{ marginTop: "50px" }}>
                    <div className=" mt-5 d-flex flex-column flex-sm-row justify-content-end">
                        <Form.Select aria-label="Default select example" className="w-50 me-2 border-1 border-lime float-end mb-1">
                            <option>Status</option>
                            <option value="sudah bayar">Sudah bayar</option>
                            <option value="belum bayar">Belum bayar</option>
                            <option value="dikirim">Dikirim</option>
                        </Form.Select>
                        <input type="date" className="rounded-2 border-1 border-lime" />
                        <input type="date" className="rounded-2 border-1 border-lime mx-0 mx-sm-2 my-1 my-sm-0" />
                        <Button variant="lime" className="fw-bold text-putih px-3">
                            Filter
                        </Button>
                    </div>
                </div>
                <Table className="mt-5 rounded rounded-3 overflow-hidden w-100 mx-auto">
                    <thead variant="alpukat" className="bg-alpukat text-white">
                        <tr>
                            <th>No</th>
                            <th>Kode Transaksi</th>
                            <th>Biaya Transaksi</th>
                            <th>Tanggal dibuat</th>
                            <th>Status</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="bg-tea">
                        {transaksi.map((data) => {
                            return (
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.kodeTransaksi}</td>
                                    <td>{data.biayaTransaksi}</td>
                                    <td>{data.tanggalDibuat}</td>
                                    <td>{data.status}</td>
                                    <td>
                                        <AiTwotoneEdit className="fs-4 text-lime user-select-auto" onChange={(e) => e.target.value(e)} onClick={() => DetailTransaksi(data)} />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Index;
