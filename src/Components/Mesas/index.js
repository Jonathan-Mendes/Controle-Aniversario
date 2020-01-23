import React, { Component } from 'react';
import {
    Button, Label, FormGroup, Form, Col, Row, Input, Container, Table,
    Modal, ModalHeader, ModalBody, ModalFooter, Spinner
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './mesas.css';
import { FaFlagCheckered, FaReply } from "react-icons/fa";

class mesas extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <Container className="container">
                <Link to={{ pathname: "/" }}>
                    <p className="text-warning font-weight-bolder" >
                        <FaReply className="iconBack" />
                        <Button className="font-weight-bolder noneDecoration text-warning"
                            color="link">Voltar</Button>
                    </p>
                </Link>

                <h1 className="text-warning text-center my-5 title">
                    <FaFlagCheckered className="iconFlag mr-3" />
                    Mesas
                    <FaFlagCheckered className="iconFlag ml-3" />
                </h1>

                <Row>
                    <Col md={12}>
                        <div className="mesa mx-auto d-flex justify-content-center align-items-center">
                            <span className="numMesa">1</span>
                        </div>
                    </Col>
                </Row>

            </Container>
        )
    }
}
export default mesas;
