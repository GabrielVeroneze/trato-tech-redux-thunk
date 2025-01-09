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
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(buscarCategorias.fulfilled, (state, { payload }) => {
                console.log('categorias carregadas!')
                return payload
            })
            .addCase(buscarCategorias.pending, (state, { payload }) => {
                console.log('carregando categorias')
            })
            .addCase(buscarCategorias.rejected, (state, { payload }) => {
                console.log('busca de categorias rejeitada!')
            })
    },
})

export default categoriasSlice.reducer
