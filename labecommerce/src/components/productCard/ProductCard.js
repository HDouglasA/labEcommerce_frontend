import { ContainerProduct} from "./style"

export const ProductCard = ({name, price, image}) => {
    return (
        <ContainerProduct>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <p>R$ {price},00</p>
            <button>Adicionar ao Carrinho</button>
        </ContainerProduct>
    )
}