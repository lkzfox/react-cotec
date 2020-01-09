import React, { Component } from 'react';

export class Listagem extends Component {
    render() {
        return (
            <div>
                {
                    this.props.dados.map(item => {
                        return (
                            <div key={item.id}>
                                <p>{item.first_name}</p>
                                <p>{item.email}</p>
                                <hr/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Listagem;
