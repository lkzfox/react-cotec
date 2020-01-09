import React, { Component } from 'react';
import { connect } from 'react-redux'

import { adicionarElemento } from './actions'

export class Adicionar extends Component {

    state = {
        titulo: '',
        texto: '',
        autor: ''
    }

    handleChange = e => {
        let _obj = {}
        _obj[e.target.name] = e.target.value

        this.setState(_obj)
        
    }

    handleSubmit = e => {
        e.preventDefault()

        this.props.adicionarElemento(this.state)
        this.setState({
            titulo: '',
            texto: '',
            autor: ''
        })
        
    }
    
    render() {
        
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="titulo">Titulo</label>
                <br/>
                <input id="titulo" name="titulo" type="text" onChange={this.handleChange} value={this.state.titulo}/>
                <br/>
                
                <label htmlFor="texto">Texto</label>
                <br/>
                <textarea id="texto" name="texto" type="text" onChange={this.handleChange} value={this.state.texto}/>
                <br/>

                <label htmlFor="autor">Autor</label>
                <br/>
                <input id="autor" name="autor" type="text" onChange={this.handleChange} value={this.state.autor}/>

                <button type="submit" onClick={this.handleSubmit}>Adicionar</button>

            </form>
        );
    }
}

export default connect(null, { adicionarElemento })(Adicionar);
