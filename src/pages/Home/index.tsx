import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { adicionarCategorias } from '@/store/reducers/categoria'
import { RootState } from '@/store'
import { Categoria } from '@/types/Categoria'
import instance from '@/common/config/api'
import Header from '@/components/Header'
import Button from '@/components/Button'
import relogio from '@/assets/inicial.png'
import styles from './Home.module.scss'

const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const categorias = useSelector((state: RootState) => state.categorias)

    const buscarCategorias = useCallback(async () => {
        const resposta = await instance.get<Categoria>('/categorias')

        dispatch(adicionarCategorias(resposta.data))
    }, [dispatch])

    useEffect(() => {
        buscarCategorias()
    }, [buscarCategorias])

    return (
        <div>
            <Header
                titulo="Classificados Tech"
                descricao="Compre diversos tipos de produtos no melhor site do Brasil!"
                imagem={relogio}
                className={styles.header}
            >
                <Button onClick={() => navigate('/anuncie')}>
                    Quero anunciar
                </Button>
            </Header>
            <div className={styles.categorias}>
                <div className={styles['categorias-title']}>
                    <h1>Categorias</h1>
                </div>
                <div className={styles['categorias-container']}>
                    {categorias.map((categoria, index) => (
                        <div
                            key={index}
                            onClick={() =>
                                navigate(`/categoria/${categoria.id}`)
                            }
                        >
                            <img
                                src={categoria.thumbnail}
                                alt={categoria.nome}
                            />
                            <h1>{categoria.nome}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
