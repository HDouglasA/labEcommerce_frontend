import { ContainerProduct, NameAndImage } from "./style"

export const ProductCard = ({name, price, image}) => {
    return (
        <ContainerProduct>
            <NameAndImage>
                <h3>{name}</h3>
                <p>R${price}</p>
            </NameAndImage>
            <img src={image} alt={name}/>
        </ContainerProduct>
    )
}