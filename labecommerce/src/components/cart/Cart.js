import { Header } from "../header/Header";
import { ContainerProduct, ContainerCart, ContainerMain, SubAndTitle, NotProduct} from "./Style";
import { useEffect } from "react";
import { Footer } from "../footer/Footer";

export const Cart = ({removeProductCart}) => {

    const getTotalPrice =() => {
        return Number(localStorage.getItem("buyPrice"))
    }

    const componentProductsCart = () => {
        const productLS = JSON.parse(localStorage.getItem("cart"))
        
        const productsCartList = productLS && productLS.map((product) =>{
            return (
                <ContainerProduct key={product.name}>
                    
                    <span>
                    <img src={product.imageUrl} alt={product.name}/>
                    <section>
                        <h4> {product.name}</h4>
                        <div>
                            <p>Qtd: {product.quantity}</p>
                            <button onClick={() => removeProductCart(product)}>excluir</button>
                       </div>
                       <h3> R$ {product.price},00</h3>
                       
                    </section>
                    
                    
                    </span>
                    {/* <hr/> */}
                </ContainerProduct>
                
            )
        })
        
        return productsCartList
    }

    useEffect(() =>{
        componentProductsCart()
        getTotalPrice()
    })

    return (
        <div>
            <Header />
            <ContainerMain>
                <SubAndTitle>
                    <h1>Carrinho de Compras</h1>
                    <p>Subtotal: <span>{getTotalPrice()},00</span></p>
                </SubAndTitle>
                    <hr/>
                    <ContainerCart>
                    {componentProductsCart()}
                </ContainerCart>
                {componentProductsCart() <1 && <NotProduct><h2>Carrinho Vazio!</h2></NotProduct>}
            </ContainerMain>
            <Footer/>
        </div>
    )
}
