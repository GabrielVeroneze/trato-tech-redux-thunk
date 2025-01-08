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
        builder.addCase(buscarCategorias.fulfilled, (state, { payload }) => {
            return payload
        })
    },
})

export default categoriasSlice.reducer
