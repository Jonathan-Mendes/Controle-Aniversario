import React, { Component } from 'react';
import {
    Button, Label, FormGroup, Form, Col, Row, Input, Container, Table,
    Modal, ModalHeader, ModalBody, ModalFooter, Spinner
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './mesaConvidados.css';
import { FaFlagCheckered, FaReply } from "react-icons/fa";

class mesaConvidados extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mesa: '',
            loading: false
        };
    }


    componentDidMount() {
        this.setState({ mesa: this.props.match.params, lading: true })
    }

    render() {
        return (
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
                    <Col sm={3} md={3}>
                        <div className="mesa mx-auto d-flex justify-content-center align-items-center my-2">
                            <span className="numMesa">{this.state.mesa}</span>
                        </div>
                    </Col>
                </Row>

            </Container>
        )
    }
}
export default mesaConvidados;
