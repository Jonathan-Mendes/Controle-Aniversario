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
        this.state = {
            mesas: []
        };
        this.navigation = this.navigation.bind(this);
    }

    componentDidMount() {
        for (let i = 1; i <= 20; i++) {
            this.state.mesas.push(i)
        }
        this.setState(this.state)
    }

    navigation(mesa){
        this.props.history.replace(`/mesas/mesa-convidados/${mesa}`)
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
                    {this.state.mesas.map((mesa) => {
                        return (
                            <Col sm={3} md={3}>
                                <div className="mesa mx-auto d-flex justify-content-center align-items-center my-2"
                                onClick={() => this.navigation(mesa)}>
                                    <span className="numMesa">{mesa}</span>
                                </div>
                            </Col>
                        )
                    })}
                </Row>

            </Container>
        )
    }
}
export default mesas;
