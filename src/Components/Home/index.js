import React, { Component } from 'react';
import {
    Button, Label, FormGroup, Form, Col, Row, Input, Container, Table,
    Modal, ModalHeader, ModalBody, ModalFooter, Spinner
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './home.css';
import { FaFlagCheckered, FaUsers } from "react-icons/fa";
import { GiRoundTable } from "react-icons/gi";

class home extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){

    }

    render() {
        return (
            <Container className="container">
                <h1 className="text-warning text-center my-5 title">
                    <FaFlagCheckered className="iconFlag mr-3"/>
                    Heitor 2 Anos
                    <FaFlagCheckered className="iconFlag ml-3"/>
                </h1>

                <Row>
                    <Col md={12} sm={12}>
                        <Link to={{ pathname: "/convidados" }}>
                            <Button color="warning" className="w-100 my-2">
                                <FaUsers className="iconHome mb-2"/>
                                <p className="font-weight-bold">CONVIDADOS</p>
                            </Button>
                        </Link>
                    </Col>

                    <Col md={12} sm={12}>
                        <Link to={{ pathname: "/mesas" }}>
                            <Button color="warning" className="w-100 my-2">
                                <GiRoundTable className="iconHome mb-2"/>
                                <p className="font-weight-bold">MESAS</p>
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default home;
