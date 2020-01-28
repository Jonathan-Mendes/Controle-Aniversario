import React, { Component } from 'react';
import {
    Button, Label, FormGroup, Form, Col, Row, Input, Container, Table,
    Modal, ModalHeader, ModalBody, ModalFooter, Spinner
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './mesaConvidados.css';
import { FaFlagCheckered, FaReply } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

class mesaConvidados extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mesa: '',
            loading: false
        };
    }


    componentDidMount() {
        this.setState({ mesa: this.props.match.params.mesa, lading: true })
    }

    render() {
        return true ? (
            <Container className="container">
                <Link to={{ pathname: "/mesas" }}>
                    <p className="text-warning font-weight-bolder" >
                        <FaReply className="iconBack" />
                        <Button className="font-weight-bolder noneDecoration text-warning"
                            color="link">Voltar</Button>
                    </p>
                </Link>

                <h1 className="text-warning text-center my-5 title">
                    <FaFlagCheckered className="iconFlag mr-3" />
                    Mesa {this.state.mesa}
                    <FaFlagCheckered className="iconFlag ml-3" />
                </h1>

                <Row>
                    <Col md={12}>
                        <h2 className="text-warning text-center mb-5">Convidados da Mesa</h2>
                    </Col>

                    <Col md={12} className="text-center my-2 d-flex align-items-center justify-content-center">
                        <span className="text-white font-weight-bold mr-2 idConvidadoMesa">1</span>
                        <IoIosAddCircle className="text-warning iconFlag addConvidadoMesa" />
                        <select className="inputAddConvidadoMesa" id="convidado1">
                            <option className="option" value="volvo">Volvo</option>
                        </select>
                    </Col>

                    <Col md={12} className="text-center my-2 d-flex align-items-center justify-content-center">
                        <span className="text-white font-weight-bold mr-2 idConvidadoMesa">2</span>
                        <IoIosAddCircle className="text-warning iconFlag addConvidadoMesa" />
                        <select className="inputAddConvidadoMesa">
                            <option className="option" value="volvo">Volvo</option>
                        </select>
                    </Col>

                    <Col md={12} className="text-center my-2 d-flex align-items-center justify-content-center">
                        <span className="text-white font-weight-bold mr-2 idConvidadoMesa">4</span>
                        <IoIosAddCircle className="text-warning iconFlag addConvidadoMesa" />
                        <select className="inputAddConvidadoMesa">
                            <option className="option" value="volvo">Volvo</option>
                        </select>
                    </Col>

                    <Col md={12} className="text-center my-2 d-flex align-items-center justify-content-center">
                        <span className="text-white font-weight-bold mr-2 idConvidadoMesa">3</span>
                        <IoIosAddCircle className="text-warning iconFlag addConvidadoMesa" />
                        <select className="inputAddConvidadoMesa">
                            <option className="option" value="volvo">Volvo</option>
                        </select>
                    </Col>

                    <Col md={12} className="justify-content-center mt-5">
                        <Button color="success" className="w-100">Salvar</Button>
                    </Col>
                </Row>

            </Container>
        ) : (
                <div id="spinner">
                    <Spinner style={{ width: '6rem', height: '6rem' }} color="warning" />
                </div>
            )
    }
}
export default mesaConvidados;
