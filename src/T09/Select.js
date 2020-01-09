import React, { Component } from 'react';

export class Select extends Component {
    render() {
        return (
            <div>
                <label htmlFor={`select_${this.props.id}`}>{this.props.label}</label>
                <br/>
                <select name={`select_${this.props.id}`} id={this.props.id}>
                    {
                        this.props.dados.filter(d => this.props.filtro(d)).map(i => {
                            return <option key={i[this.props.chave]} value={i[this.props.chave]}>{i[this.props.texto]}</option>
                        })
                    }
                </select>
            </div>
        );
    }
}

export default Select;
