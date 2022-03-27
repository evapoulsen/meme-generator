import React from "react";
import {Bullseye} from "react-bootstrap-icons";
import {Col, Row} from "react-bootstrap";
import "./Header.css";


function Header() {
    return(
        <header>
            <Row>
                <Col>
                    <span className="title">MEME GENERATOR&nbsp;&nbsp;</span>
                    <Bullseye className="logo" />
                </Col>
            </Row>
        </header>
    )
}

export default Header;
