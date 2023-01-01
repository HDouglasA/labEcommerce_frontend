import { ContainerProduct} from "./style"

export const ProductCard = ({product}) => {
    return (
        <ContainerProduct>
            <img src={product.imageUrl} alt={product.name}/>
            <h3>{product.name}</h3>
            <p>R$ {product.price},00</p>
            <button>Adicionar ao Carrinho</button>
        </ContainerProduct>
    )
}