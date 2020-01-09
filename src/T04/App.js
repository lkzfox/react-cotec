import React, { Component } from 'react';

export class App extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    state = {
        nome: ''
    }

    handleChange(e) {        
        const nome = e.target.value
        this.setState({ nome })
    }

    handleSubmit = e => {
        e.preventDefault();

        console.log(e.target.nome.value);        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='nome'>Nome</label>
                <br/>
                <input id='nome' type='text' value={this.state.nome} onChange={this.handleChange} />
                
            </form>
        );
    }
}

export default App;
