const adicionarElemento = elemento => {
   
    return {
        type: 'ADICIONAR_ITEM',
        payload: elemento
    }
}

const selecionarElemento = elemento => {
   
    return {
        type: 'SELECIONAR_ITEM',
        payload: elemento
    }
}


export { adicionarElemento, selecionarElemento }