import React, { Component } from 'react';

import Select from './Select'
import './estilos.css'
import Paginator from './Paginator';
import axios from 'axios';
import Listagem from './Listagem';

const dados = [
    { id: 1,	nome: 'Drake Stokes', profissao: 'caminhoneiro' },
    { id: 2,	nome: 'Vernon Mclaughlin', profissao: 'caminhoneiro' },
    { id: 3,	nome: 'Wallace Stanley', profissao: 'caminhoneiro' },
    { id: 4,	nome: 'Neil Chan', profissao: 'caminhoneiro' },
    { id: 5,	nome: 'Carlos Hood', profissao: 'caminhoneiro' },
    { id: 6,	nome: 'Alden Mitchell', profissao: 'caminhoneiro' },
    { id: 7,	nome: 'Ulric Buckner', profissao: 'caminhoneiro' },
    { id: 8,	nome: 'Griffith Holman', profissao: 'caminhoneiro' },
    { id: 9,	nome: 'Lyle Summers', profissao: 'caminhoneiro' },
    { id: 10,	nome: 'Dale Harper', profissao: 'caminhoneiro' },
    { id: 11,	nome: 'Rajah Dale', profissao: 'alfaiate' },
    { id: 12,	nome: 'Merritt Stanton', profissao: 'alfaiate' },
    { id: 13,	nome: 'Warren Jones', profissao: 'alfaiate' },
    { id: 14,	nome: 'Plato West', profissao: 'alfaiate' },
    { id: 15,	nome: 'Elton Burris', profissao: 'alfaiate' },
    { id: 16,	nome: 'Caleb Sparks', profissao: 'alfaiate' },
    { id: 17,	nome: 'Flynn Sharp', profissao: 'alfaiate' },
    { id: 18,	nome: 'Perry Bullock', profissao: 'alfaiate' },
    { id: 19,	nome: 'Hayes Spence', profissao: 'alfaiate' },
    { id: 20,	nome: 'Grant Woodward', profissao: 'alfaiate' },
    { id: 21,	nome: 'Brennan Brown', profissao: 'carpinteiro' },
    { id: 22,	nome: 'Jonah Preston', profissao: 'carpinteiro' },
    { id: 23,	nome: 'Grant Graham', profissao: 'carpinteiro' },
    { id: 24,	nome: 'Bruno Burns', profissao: 'carpinteiro' },
    { id: 25,	nome: 'Octavius Morse', profissao: 'carpinteiro' },
    { id: 26,	nome: 'Jermaine Barnett', profissao: 'carpinteiro' },
    { id: 27,	nome: 'Chester Bond', profissao: 'carpinteiro' },
    { id: 28,	nome: 'Ulysses Huffman', profissao: 'carpinteiro' },
    { id: 29,	nome: 'Garrett Patrick', profissao: 'carpinteiro' },
    { id: 30,	nome: 'Eagan Ward', profissao: 'carpinteiro' }
]

export class App extends Component {

    state = {
        dadosConteudo1: [],
        dadosConteudo2: [],
    }
    buscarConteudo1 = page => {
        axios.get('https://reqres.in/api/users', {
            params: {
                page,
            }
        })
        .then(res => this.setState({ dadosConteudo1: res.data.data}) )
    }
    
    buscarConteudo2 = page => {
        axios.get('https://reqres.in/api/users', {
            params: {
                page,
            }
        })
        .then(res => this.setState({ dadosConteudo2: res.data.data}) )

    }

    render() {
        return (
            <div>
                <div className="selects">
                    <Select dados={dados} label="Selecione um Caminhoneiro" id="selCM" chave="id" texto="nome" filtro={i => i.profissao === 'caminhoneiro'} />
                    <Select dados={dados} label="Selecione um Carpinteiro" id="selCP" chave="id" texto="nome" filtro={i => i.profissao === 'carpinteiro'} />
                    <Select dados={dados} label="Selecione um Alfaiate" id="selAL" chave="id" texto="nome" filtro={i => i.profissao === 'alfaiate'} />
                </div>
                <div>
                    <h2>Conteudo 1</h2>
                    <Listagem dados={this.state.dadosConteudo1} />
                    <Paginator quantidadeItens={100} itensPagina={5} paginaSelecionada={this.buscarConteudo1} />
                </div>
                <div>
                    <h2>Conteudo 2</h2>
                    <Listagem dados={this.state.dadosConteudo2} />
                    <Paginator quantidadeItens={100} itensPagina={20} paginaSelecionada={this.buscarConteudo2} />
                </div>
            </div>
        );
    }
}

export default App;
