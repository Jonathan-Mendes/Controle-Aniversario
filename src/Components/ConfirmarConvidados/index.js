import React, { Component } from 'react';
import firebase from '../../BaseDados/firebase';
import {
    Button, Col, Row, Input, Container, Spinner, Table
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './confirmarConvidados.css';
import { FaFlagCheckered, FaCheck, FaReply, FaSearch, FaMinus } from "react-icons/fa";
import { FiGift, FiUserCheck } from "react-icons/fi";
import { MdFilterList } from "react-icons/md";

class confirmarConvidados extends Component {

    loading = false;

    constructor(props) {
        super(props);
        this.state = {
            lembrancinha: false,
            filter: false,
            pesquisar: '',
            convidados: [],
            convidadosPesquisados: [],
        };
        this.confirmar = this.confirmar.bind(this);
        this.pesquisar = this.pesquisar.bind(this);
        this.todos = this.todos.bind(this);
        this.naoConfirmados = this.naoConfirmados.bind(this);
        this.confirmados = this.confirmados.bind(this);
        this.lembrancinha = this.lembrancinha.bind(this);
    }

    componentDidMount() {
        firebase.app.ref('convidados').on('value', (snapshot) => {
            let state = this.state;
            state.convidados = [];
            snapshot.forEach((childItem) => {
                state.convidados.push({
                    id: childItem.key,
                    nome: childItem.val().nome,
                    lembrancinha: childItem.val().lembrancinha,
                    confirmado: childItem.val().confirmado
                })
            })
            state.convidadosPesquisados = state.convidados;
            this.setState(state);
        })
        this.loading = true
    }

    confirmar = async (key) => {
        try {
            await firebase.confirmarPresenca(key);
        } catch (error) {
            alert("error.message");
        }
    }

    pesquisar() {
        this.state.convidadosPesquisados = [];
        if (this.state.pesquisar !== '') {
            this.state.convidados.map((convidado) => {
                let result = convidado.nome.toUpperCase().indexOf(this.state.pesquisar.toUpperCase())
                if (result > -1) {
                    this.state.convidadosPesquisados.push({
                        id: convidado.id,
                        nome: convidado.nome,
                        lembrancinha: convidado.lembrancinha,
                        confirmado: convidado.confirmardo
                    })
                }
            })
        } else {
            this.state.convidadosPesquisados = this.state.convidados;
        }
        this.state.pesquisar = ''
        this.setState(this.state);
    }

    todos() {
        this.setState({
            convidadosPesquisados: this.state.convidados
        })
    }

    naoConfirmados() {
        this.state.convidadosPesquisados = [];
        this.state.convidados.map((convidado) => {
            if (!convidado.confirmado) {
                this.state.convidadosPesquisados.push({
                    id: convidado.id,
                    nome: convidado.nome,
                    lembrancinha: convidado.lembrancinha,
                    confirmado: convidado.confirmado
                })
            }
        })
        this.setState(this.state);
    }

    confirmados() {
        this.state.convidadosPesquisados = [];
        this.state.convidados.map((convidado) => {
            if (convidado.confirmado) {
                this.state.convidadosPesquisados.push({
                    id: convidado.id,
                    nome: convidado.nome,
                    lembrancinha: convidado.lembrancinha,
                    confirmado: convidado.confirmado
                })
            }
        })
        this.setState(this.state);
    }

    lembrancinha() {
        this.state.convidadosPesquisados = [];
        this.state.convidados.map((convidado) => {
            if (convidado.lembrancinha) {
                this.state.convidadosPesquisados.push({
                    id: convidado.id,
                    nome: convidado.nome,
                    lembrancinha: convidado.lembrancinha,
                    confirmado: convidado.confirmado
                })
            }
        })
        this.setState(this.state);
    }

    render() {
        return this.loading ? (
            <Container className="container">
                <Link to={{ pathname: "/convidados" }}>
                    <p className="text-warning font-weight-bolder" >
                        <FaReply className="iconBack" />
                        <Button className="font-weight-bolder noneDecoration text-warning"
                            color="link">Voltar</Button>
                    </p>
                </Link>

                <h1 className="text-warning text-center my-5 title">
                    <FaFlagCheckered className="iconFlag mr-3" />
                    Confirmar Presença
                    <FaFlagCheckered className="iconFlag ml-3" />
                </h1>


                <Row>
                    <Col md={12} className="mb-2">
                        <Input id='pesquisar' type="text" placeholder="Pesquisar por Nome" value={this.state.pesquisar}
                            onChange={(e) => this.setState({ pesquisar: e.target.value })} />
                    </Col>
                    <Col md={12}>
                        <Button color="warning" className="w-100 mb-3" onClick={() => this.pesquisar()}><FaSearch className="mx-2" />Pesquisar</Button>
                    </Col>
                </Row>

                {this.state.filter ?
                    (
                        <Row className="mb-2">
                            <Col md={4}>
                                <Button className="w-100 my-1" color="success" onClick={() => this.todos()}>Todos</Button>
                            </Col>
                            <Col md={4}>
                                <Button className="w-100 my-1" color="success" onClick={() => this.naoConfirmados()}>Não Confirmados</Button>
                            </Col>
                            <Col md={4}>
                                <Button className="w-100 my-1" color="success" onClick={() => this.confirmados()}>Todos Confirmados</Button>
                            </Col>
                            <Col md={4}>
                                <Button className="w-100 my-1" color="success" onClick={() => this.lembrancinha()}>Lembrancinha</Button>
                            </Col>
                        </Row>
                    ) : null
                }
                <Row>
                    <Col md={12}>
                        <Button className="w-100 mb-2" color="warning" onClick={() => this.setState({ filter: !this.state.filter })}>
                            <MdFilterList className="iconFilter" />
                        </Button>
                    </Col>
                </Row>
                <Table>
                    <thead>
                        <tr>
                            <th className="text-warning text-center">#</th>
                            <th className="text-warning text-center">Nome</th>
                            <th className="text-warning text-center">Lembrança</th>
                            <th className="text-warning text-center">Confirmar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.convidadosPesquisados.map((convidado, index) => {
                            return (
                                <tr>
                                    <th scope="row" className="text-center text-warning">{index + 1}</th>
                                    <td className="text-center text-white">{convidado.nome}</td>
                                    <td className="text-center text-white">
                                        {convidado.lembrancinha ? <FiGift className="iconLembrancinha" /> : <FaMinus />}
                                    </td>
                                    <td className="text-center text-white">
                                        {convidado.confirmado ?
                                            <FiUserCheck className="iconConfirmados" />
                                            :
                                            <Button color="success" onClick={() => this.confirmar(convidado.id)}><FaCheck /></Button>
                                        }
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>
        ) : (
                <div id="spinner">
                    <Spinner style={{ width: '6rem', height: '6rem' }} color="warning" />
                </div>)
    }
}
export default confirmarConvidados;
