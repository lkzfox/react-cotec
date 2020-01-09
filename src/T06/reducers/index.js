const lista = (state = [], action) => {
    
    if (action.type === 'ADICIONAR_ITEM') {
        return [...state, action.payload]
    }

    return state;
}

const selecionado = (state = {}, action) => {

    if (action.type === 'SELECIONAR_ITEM') {
        return action.payload
    }

    return state;
}


export default {
    lista,
    selecionado
}