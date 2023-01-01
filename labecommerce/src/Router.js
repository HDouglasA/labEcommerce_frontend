import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Cart } from "./components/cart/Cart";
import { useState } from "react";

export const Router = () => {
	const [productsOnCart, setProductsOnCart] = useState([])

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route 
						path="/" 
						element={<Home setProductsOnCart={setProductsOnCart} productsOnCart={productsOnCart}/>}
					/>
					<Route 	
						path="/cart" 
						element={<Cart productsOnCart={productsOnCart}/>}
					/>	
				</Routes>
			</BrowserRouter>
		</div>
	)
}
