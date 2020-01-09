import React, { Component } from 'react'
import './Estilo.scss'

const Linguagem = props => {
    console.log(props);
    
    return (
        <div className="ling">
            {props.nome}
            <br/>
            {props.nota}
        </div>
    )
}

class Contador extends Component {
    state = {
        contador: 0
    }

    render() {
        setTimeout(() => this.setState({contador: this.state.contador + 1}), 2000)
        console.log(this.state);
        
        return (
            <div>
                Contador atualmente em: {this.state.contador}
            </div>
        );
    }
}



export class App extends Component {
    render() {
        return (
            <div>
                <Linguagem nome='JS' nota={5} />
                <Linguagem nome='C' nota={8} />
                <Contador />
            </div>
        );
    }
}

export default App;
