import app from 'firebase/app'
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyC2YRpTAgJr0aKi-ssKsPZAC5SRQ03QiRE",
    authDomain: "aniversario-heitor.firebaseapp.com",
    databaseURL: "https://aniversario-heitor.firebaseio.com",
    projectId: "aniversario-heitor",
    storageBucket: "aniversario-heitor.appspot.com",
    messagingSenderId: "51797297373",
    appId: "1:51797297373:web:62aeb7b274f069668c7334"
};

class Firebase {

    constructor() {
        app.initializeApp(firebaseConfig);
        this.app = app.database();
    }

    // CADASTRO 
    async cadastrarConvidados(nome) {
        let ref = app.database().ref('convidados/');
        let key = ref.push().key
        return ref.child(key).set({
            nome
        })
    }

    // async cadastrarAnotcao(titulo, anotacao) {
    //     let ref = app.database().ref('anotacoes/');
    //     let key = ref.push().key
    //     return ref.child(key).set({
    //         titulo,
    //         anotacao
    //     })
    // }

    // async cadastrarOrdens(motivo, cliente, data, hora) {
    //     let ref = app.database().ref('ordens/');
    //     let key = ref.push().key
    //     return ref.child(key).set({
    //         motivo,
    //         cliente,
    //         data,
    //         hora,
    //         status: 'aguardando',
    //     })
    // }

    // async addMsg(nome, msg, uid, data, hora) {
    //     let ref = app.database().ref('chat/');
    //     let key = ref.push().key
    //     return ref.child(key).set({
    //         nome,
    //         msg,
    //         uid,
    //         data,
    //         hora
    //     })
    // }

    // // UPDATE
    // async updateSolucao(key, quemResolveu, solucao, dataResolucao, horaResolucao) {
    //     await app.database().ref('manutencao/').child(key).child("status").set('resolvido');
    //     await app.database().ref('manutencao/').child(key).child("quemResolveu").set(quemResolveu);
    //     await app.database().ref('manutencao/').child(key).child("solucao").set(solucao);
    //     await app.database().ref('manutencao/').child(key).child("dataResolucao").set(dataResolucao);
    //     await app.database().ref('manutencao/').child(key).child("horaResolucao").set(horaResolucao);
    // }

    // async updateAnotacao(key, titulo, anotacao) {
    //     await app.database().ref('anotacoes/').child(key).child("titulo").set(titulo);
    //     await app.database().ref('anotacoes/').child(key).child("anotacao").set(anotacao);
    // }

    // async updateSatusOrdem(key, status) {
    //     await app.database().ref('ordens/').child(key).child("status").set(status);
    // }

    // async updateOrdem(key, motivo, cliente, data, hora) {
    //     await app.database().ref('ordens/').child(key).child("motivo").set(motivo);
    //     await app.database().ref('ordens/').child(key).child("cliente").set(cliente);
    //     await app.database().ref('ordens/').child(key).child("data").set(data);
    //     await app.database().ref('ordens/').child(key).child("hora").set(hora);
    // }

    // // DELETE
    // async deletarManuntencao(key) {
    //     await app.database().ref('manutencao/').child(key).remove();
    // }

    // async deletarAnotacao(key) {
    //     await app.database().ref('anotacoes/').child(key).remove();
    // }

    // async deletarOrdem(key) {
    //     await app.database().ref('ordens/').child(key).remove();
    // }

    // async deletarMsg(key) {
    //     await app.database().ref('chat/').child(key).remove();
    // }
}

export default new Firebase();