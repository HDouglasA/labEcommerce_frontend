import { useNavigate } from "react-router-dom"

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
            <header>
                <img onClick={goToHome} src="/1f6cd-fe0f.svg" alt="logo"/>
                <p onClick={goToHome}>lab<span>Ecommerce</span></p>            
                <img onClick={goToCart} src="/shoppingCart.png" alt="Carrinho"/>
		    </header>
        </div>
    )
}
