import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


const PaginaInicial = () => {
    return (
        <div>
            Pagina Inicial
            <br/>
            <Link to='/paginadois'>Ir para pagina dois</Link>
        </div>
    )
}

const PaginaDois = () => {
    return (
        <div>
            Pagina Dois
            <br/>
            <Link to='/'>Voltar para inicio</Link>
        </div>
    )
}


export class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={PaginaInicial} />
                    <Route path="/paginadois" exact component={PaginaDois} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
