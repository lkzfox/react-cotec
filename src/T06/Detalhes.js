import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Detalhes extends Component {
    render() {
        console.log(this.props);
        
        if (!this.props.selecionado.texto) {
            return <span>Nada selecionado</span>
        }

        return (
            <div>
                <h2>DETALHES DO SELECIONADO</h2>
                {this.props.selecionado.texto}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selecionado: state.selecionado
    }
}

export default connect(mapStateToProps)(Detalhes);
