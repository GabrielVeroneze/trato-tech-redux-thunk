import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Categoria } from '@/types/Categoria'
import categoriasService from '@/services/categorias'

const initialState: Categoria[] = []

export const buscarCategorias = createAsyncThunk(
    'categorias/buscar',
    categoriasService.buscar
)

const categoriasSlice = createSlice({
    name: 'categorias',
    initialState,
    reducers: {
        adicionarCategorias: (state, { payload }) => {
            state.push(...payload)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(buscarCategorias.fulfilled, (state, { payload }) => {
            state.push(...payload)
        })
    },
})

export const { adicionarCategorias } = categoriasSlice.actions

export default categoriasSlice.reducer
