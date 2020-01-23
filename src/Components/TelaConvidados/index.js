import React, { Component } from 'react';
import {
    Button, Label, FormGroup, Form, Col, Row, Input, Container
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './telaConvidados.css';
import { FaUserCheck, FaUserPlus, FaFlagCheckered, FaReply } from "react-icons/fa";

class telaConvidados extends Component {

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
                    Convidados
                    <FaFlagCheckered className="iconFlag ml-3" />
                </h1>

                <Row>
                    <Col md={12} sm={12}>
                        <Link to={{ pathname: "/convidados/adicionar-convidados" }}>
                            <Button color="warning" className="w-100 my-2">
                                <FaUserPlus className="iconHome mb-2" />
                                <p className="font-weight-bold">ADICIONAR CONVIDADOS</p>
                            </Button>
                        </Link>
                    </Col>

                    <Col md={12} sm={12}>
                        <Link to={{ pathname: "/convidados/confirmar-convidados" }}>
                            <Button color="warning" className="w-100 my-2">
                                <FaUserCheck className="iconHome mb-2" />
                                <p className="font-weight-bold">CONFIRMAR PRESENÇA</p>
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default telaConvidados;
