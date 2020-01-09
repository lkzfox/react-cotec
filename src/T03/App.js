import React, { Component } from 'react'

// Ciclo Completo https://pt-br.reactjs.org/docs/react-component.html

class Item extends Component {
    state = {
        contador: 0,
        items: [1,2]
    }

    componentDidMount() {
        console.log(`Componente N. ${this.props.numero} Criado!`);
        setTimeout(() => this.setState({ contador: this.state.contador + 1 }), 3000)
    }

    componentDidUpdate() {
        console.log(`Componente N. ${this.props.numero} Atualizado`);          
    }

    componentWillUnmount() {
        console.log(`Componente N. ${this.props.numero} Saindo...`);        
    }

    render() {
        return (
            <div>
                <p>Item N. {this.props.numero}</p>
                <button onClick={() => this.props.close(this.props.numero)}>X</button>
            </div>
        );
    }
}

Item.defaultProps = {
    numero: 100
}

export class App extends Component {
    state = {
        items: [10, 20, 30]
    }

    close = id => {
        const items = this.state.items.filter(ele => ele !== id);
        this.setState({ items })
    }

    renderItems() {
        return this.state.items.map(item => <Item key={item} numero={item} close={this.close} />)
    }

    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        );
    }
}

export default App;
