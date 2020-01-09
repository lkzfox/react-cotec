import React, { Component } from 'react';
import { connect } from 'react-redux'

import { selecionarElemento } from './actions'

class Item extends Component {
    
    handleMaisDetalhes = () => {
        this.props.selecionarElemento(this.props.item)
    }

    render() {
        const { titulo, autor } = this.props.item;
        return (
            <section>
                <h3>{titulo}</h3>
                <h5>{autor}</h5>
                <button onClick={this.handleMaisDetalhes}>Mais Detalhes</button>
            </section>
        )
    }
}

let ItemCon = connect(null, { selecionarElemento })(Item)

export class Lista extends Component {

    render() {
        // console.log(this.state);
        console.log(this.props);
        
        return (
            <div>
                {
                    this.props.lista.map((item, i) => <ItemCon key={i} item={item} />)
                }
            </div>
        );
    }
}

const mapStateToProps = ({ lista }) => {
    return { lista };
}

export default connect(mapStateToProps)(Lista);
