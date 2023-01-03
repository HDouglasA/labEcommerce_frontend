import { useNavigate } from "react-router-dom"
import { ComponentHeader, Logo, NameEcommercce } from "./Style"

export const Header = () => {
    const navigate = useNavigate()

    const goToCart = () => {
        navigate("/cart")
    }

    const goToHome = () => {
        navigate("/")
    }

    return (
        <div>
            <ComponentHeader>
                <Logo onClick={goToHome} src="/1f6cd-fe0f.svg" alt="logo"/>
                <NameEcommercce onClick={goToHome}>lab<span>Ecommerce</span></NameEcommercce>            
                <button onClick={goToCart}> 
                    <img src="/shoppingCart.png" alt="Carrinho"/> 
                    <h6>Carrinho</h6>
                </button>
		    </ComponentHeader>
        </div>
    )
}
