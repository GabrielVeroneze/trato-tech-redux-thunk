import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createStandaloneToast } from '@chakra-ui/toast'
import { resetarCarrinho } from '@/store/reducers/carrinho'
import { Categoria } from '@/types/Categoria'
import categoriasService from '@/services/categorias'

const { toast } = createStandaloneToast()

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
                toast({
                    title: 'Sucesso!',
                    description: 'Categorias carregadas com sucesso!',
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                })
                return payload
            })
            .addCase(buscarCategorias.pending, (state, { payload }) => {
                toast({
                    title: 'Carregando',
                    description: 'Carregando categorias',
                    status: 'loading',
                    duration: 2000,
                    isClosable: true,
                })
            })
            .addCase(buscarCategorias.rejected, (state, { payload }) => {
                toast({
                    title: 'Erro',
                    description: 'Erro na busca de categorias',
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                })
            })
            .addCase(resetarCarrinho.type, () => {
                toast({
                    title: 'Sucesso!',
                    description: 'Compra completada com sucesso!',
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                })
            })
    },
})

export default categoriasSlice.reducer
