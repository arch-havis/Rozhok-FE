import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { Button } from "react-bootstrap";
import Router from "next/router";
import cookie from "js-cookie";

const HeaderPorter = () => {
    const handleLogOut = async () => {
        await cookie.remove("token");
        await cookie.remove("role");
        await cookie.remove("username");
        await Router.push({ pathname: "/porter" });
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="alpukat" sticky="top">
            <Container>
                <Navbar.Brand>
                    <Link href="/porter/dashboard" onClick={() => Router.push({ pathname: "/porter/dashboard" })}>
                        <a className="text-putih fs-4 fw-bold  text-decoration-none">
                            <img
                                style={{ width: 73, height: 90, marginRight: 6 }}
                                src="https://cdn.discordapp.com/attachments/1017919526748299295/1025400140292444170/unknown.png"
                                alt="logo"
                            />
                            Rhozok.CO
                        </a>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Link href="/porter/penjemputan-rosok">
                            <a className="text-putih fs-5 fw-bold text-decoration-none mx-3 mt-3 mt-lg-0 ">Penjemputan Rosok</a>
                        </Link>
                        <Link href="/porter/junk-station">
                            <a className="text-putih fs-5 fw-bold text-decoration-none mx-3 mt-3 mt-lg-0">Junk Station</a>
                        </Link>
                        <Link href="/porter/transaksi">
                            <a className="text-putih fs-5 fw-bold text-decoration-none mx-3 mt-3 mt-lg-0">Transaksi</a>
                        </Link>

                        <Button style={{ marginTop: -7 }} variant="alpukat" className=" text-putih fs-5 fw-bold text-decoration-none ms-3" onClick={() => handleLogOut()}>
                            Logout
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderPorter;
