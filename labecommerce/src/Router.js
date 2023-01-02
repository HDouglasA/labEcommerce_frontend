import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Cart } from "./components/cart/Cart";
import { useState } from "react";
import swal from 'sweetalert';

export const Router = () => {
    const [productsOnCart, setProductsOnCart] = useState([])
	const [totalPrice, setTotalPrice] = useState(0)

    const addTotalPrice = (price) => {
        setTotalPrice(totalPrice + price)
        localStorage.setItem("buyPrice", JSON.stringify(totalPrice + price))
    }

    const removeTotalPrice = (price) => {
        setTotalPrice(totalPrice - price)
        localStorage.setItem("buyPrice", JSON.stringify(totalPrice - price))
    }

    const addToCart = (name, price, imageUrl) => {

        const checkForProductOnCart = productsOnCart.filter((prodCart) => {
            return prodCart.name === name
        })

        let newCart = [...productsOnCart]

        if (checkForProductOnCart.length === 0) {
            newCart = [...newCart, {name:name, price:price, imageUrl:imageUrl, quantity: 1}]

            localStorage.setItem("cart", JSON.stringify(newCart)) 
            setProductsOnCart(newCart) 

        } else {
            const newC = productsOnCart.map((prodCart) =>{
                if(prodCart.name === name){
                    return {...prodCart, quantity: prodCart.quantity + 1}
                } else {
                    return prodCart
                }
            })
         
            localStorage.setItem("cart", JSON.stringify(newC)) 
            setProductsOnCart(newC)
        }

        addTotalPrice(price)

        swal({
            title: "Sucesso!",
            text: "Produto adicionado ao Carrinho!",
            icon: "success",
            button: "Ok!",
        })
    }
    
    const removeProductCart = (product) =>{
        if (product.quantity === 1){
            const newCart = productsOnCart.filter((prod) =>{
                return prod.name !== product.name
            })
            setProductsOnCart(newCart)
            localStorage.setItem("cart", JSON.stringify(newCart)) 
        
        } else {
            const newCart = productsOnCart.map((prod) => {
                if (product.name === prod.name && prod.quantity >=1){
                    return {...prod, quantity: prod.quantity -1}
                } else {
                    return prod
                }
            })

            setProductsOnCart(newCart)
            localStorage.setItem("cart", JSON.stringify(newCart)) 
        }

        removeTotalPrice(product.price)

        swal({
            text: "Produto Removido!",
            icon: "warning",
            button: "Ok!",
        })
    }

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home addToCart={addToCart}/>} />
					<Route path="/cart" element={<Cart removeProductCart={removeProductCart}/>} />	
				</Routes>
			</BrowserRouter>
		</div>
	)
}
