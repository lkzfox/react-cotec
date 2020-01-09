import React from 'react'

const Funcional = () => {
    return (
        <div>
            <span>Componente Funcional</span>
        </div>
    )
}

class Classe extends React.Component {
    render() {
        return (
            <div>
                <h2>Classe</h2>
                <Funcional />
            </div>
        )
    }
}

export default Classe