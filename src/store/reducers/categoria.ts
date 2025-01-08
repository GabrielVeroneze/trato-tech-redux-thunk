import { createSlice } from '@reduxjs/toolkit'
import { Categoria } from '@/types/Categoria'

const initialState: Categoria[] = []

const categoriasSlice = createSlice({
    name: 'categorias',
    initialState,
    reducers: {
        adicionarCategorias: (state, { payload }) => {
            state.push(...payload)
        }
    },
})

export const { adicionarCategorias } = categoriasSlice.actions

export default categoriasSlice.reducer
