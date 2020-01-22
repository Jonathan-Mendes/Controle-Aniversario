import React, { Component } from 'react';
import firebase from '../../BaseDados/firebase';
import {
    Button, Label, FormGroup, Form, Col, Row, Input, Container, Table,
    Modal, ModalHeader, ModalBody, ModalFooter, Spinner
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './convidado.css';
import { FaFlagCheckered, FaRegTrashAlt, FaCheck, FaReply, FaSearch } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

class convidados extends Component {

    loading = false;

    constructor(props) {
        super(props);
        this.state = {
            pesquisar: '',
            convidados: [],
            convidadosPesquisados: [],
            nome: '',
            modal: false,
            unmountOnClose: true
        };

        this.salvar = this.salvar.bind(this);
        this.cadastrar = this.cadastrar.bind(this);
        this.toggle = this.toggle.bind(this);
        // this.excluir = this.excluir.bind(this);
        // this.delete = this.delete.bind(this);
        this.pesquisar = this.pesquisar.bind(this);
    }

    componentDidMount() {
        firebase.app.ref('convidados').on('value', (snapshot) => {
            let state = this.state;
            state.convidados = [];
            snapshot.forEach((childItem) => {
                state.convidados.push({
                    id: childItem.key,
                    nome: childItem.val().nome,
                })
            })
            state.convidadosPesquisados = state.convidados;
            this.setState(state);
        })
        this.loading = true
    }

    salvar(e) {
        e.preventDefault();
        this.cadastrar();
        this.toggle();
    }

    cadastrar = async () => {
        try {
            const { nome } = this.state;
            await firebase.cadastrarConvidados(nome);
        } catch (error) {
            alert("error.message");
        }
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
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
                    })
                }
            })
        } else {
            this.state.convidadosPesquisados = this.state.convidados;
        }
        this.state.pesquisar = ''
        this.setState(this.state);
    }

    render() {
        return this.loading ? (
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
                    <Col md={12} className="mb-2">
                            <Input id='pesquisar' type="text" placeholder="Pesquisar por Nome" value={this.state.pesquisar}
                                onChange={(e) => this.setState({ pesquisar: e.target.value })} />
                    </Col>
                    <Col md={12}>
                        <Button color="warning" className="w-100 mb-3" onClick={() => this.pesquisar()}><FaSearch className="mx-2" />Pesquisar</Button>
                    </Col>
                </Row>

                <Table>
                    <thead>
                        <tr>
                            <th className="text-warning text-center">#</th>
                            <th className="text-warning text-center">Nome</th>
                            <th className="text-warning text-center">Excluir / Confirmar</th>
                            {/* <th className="text-warning text-center">Confirmar</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.convidadosPesquisados.map((convidado, index) => {
                            return (
                                <tr>
                                    <th scope="row" className="text-center text-warning">{index + 1}</th>
                                    <td className="text-center text-white">{convidado.nome}</td>
                                    <td className="text-center">
                                        <Button color="danger mr-1"><FaRegTrashAlt /></Button>
                                    {/* </td>
                                    <td className="text-center"> */}
                                        <Button color="success ml-1"><FaCheck /></Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                
                <div className="d-flex justify-content-end fixed-bottom">
                    <Button color="warning" className="rounded-circle float-right d-flex justify-content-center align-items-center fabAdd m-2"
                        onClick={() => this.toggle()}>
                        <IoMdAdd />
                    </Button>
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}
                    unmountOnClose={this.state.unmountOnClose}>
                    <ModalHeader toggle={this.toggle} className="modalColor textRed">Inserir Convidado</ModalHeader>
                    <ModalBody className="modalColor">
                        <Label for="nomeConvidado" className="textRed">Nome</Label>
                        <Input id="nomeConvidado" type="text" placeholder="Nome do Convidado" className="inputNome"
                            onChange={(e) => this.setState({ nome: e.target.value })} />
                    </ModalBody>
                    <ModalFooter className="modalColor">
                        <Button color="success" onClick={(e) => this.salvar(e)}>Salvar</Button>
                        <Button color="danger" onClick={this.toggle}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        ) : (
                <div id="spinner">
                    <Spinner style={{ width: '6rem', height: '6rem' }} color="warning" />
                </div>)
    }
}
export default convidados;
