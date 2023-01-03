import { ContainerProduct} from "./Style"

export const ProductCard = ({product, addToCart}) => {
    return (
        <ContainerProduct>
            <img src={product.imageUrl} alt={product.name}/>
            <h3>{product.name}</h3>
            <p>R$ {product.price},00</p>
            <button onClick={() => addToCart(product.name, product.price, product.imageUrl)}>
                Adicionar ao Carrinho
            </button>
        </ContainerProduct>
    )
}
