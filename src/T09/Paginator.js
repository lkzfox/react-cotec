import React, { Component } from 'react';

export class Paginator extends Component {
    
    state = {
        selecionada: 3
    }

    selecionar(selecionada) {
        this.setState({ selecionada })
        this.props.paginaSelecionada(selecionada)
    }

    calcularRange() {
        const { quantidadeItens, range, itensPagina } = this.props
        const { selecionada } = this.state

        let inicio = 1, fim = 1
        let total = Math.ceil(quantidadeItens / itensPagina)
        let faltamExibir = total - selecionada
        let jaExibidas = selecionada - 1
        let media = Math.floor(range / 2)
        
        if (faltamExibir >= media) {
            inicio = Math.max(selecionada - media, 1);
            fim = Math.min(total, selecionada + media);
        } else {
            inicio = Math.max(selecionada - (media + (media - faltamExibir)), 1);
            fim = Math.min(total, selecionada + media);
        }

        if (jaExibidas < media) { 
            fim = Math.min(total, selecionada + media + (media - jaExibidas));
        }

        let paginas = []
        for(let i = inicio; i <= fim; i++) {
            paginas.push(i)
        }

        return paginas.map(pagina => {
            return <span key={pagina} 
                        onClick={() => this.selecionar(pagina)} 
                        className={`item-pagina ${selecionada === pagina ? 'pagina-selecionada' : ''}`}
                    >
                        {pagina}
                    </span>
        })
    }

    render() {        
        return (
            <div>
                {
                    this.calcularRange()
                }
            </div>
        );
    }
}

Paginator.defaultProps = {
    range: 5,
    quantidadeItens: 35,
    itensPagina: 10,
}

export default Paginator;
