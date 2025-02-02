import { configureStore } from '@reduxjs/toolkit'
import categoriasSlice from './reducers/categoria'
import itensSlice from './reducers/itens'
import carrinhoSlice from './reducers/carrinho'
import buscaSlice from './reducers/busca'

const store = configureStore({
    reducer: {
        categorias: categoriasSlice,
        itens: itensSlice,
        carrinho: carrinhoSlice,
        busca: buscaSlice,
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
