import { useState } from "react";
import { Products } from "..//..//data"
import { Filters } from "../filters/Filters";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { ProductCard } from "../productCard/ProductCard";
import { ContainerProducts, NotProduct } from "./Style";

export const Home = ({addToCart}) => {
    const [query, setQuery] = useState("")
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
    const [sortingParameter, setSortingParameter] = useState("title")
    const [order, setOrder] = useState("asc")

    const componentProduct = Products
    .filter((product) => {
        return product.name.toLowerCase().includes(query.toLowerCase()) 
    })
    .filter((product) => {
        return product.price >= minPrice || minPrice === ""
     })
    .filter((product) => {
        return product.price <= maxPrice || maxPrice === ""
    })
    .sort((currentProduct, nextProduct) => {
        if (sortingParameter === "price") {
            return currentProduct.price - nextProduct.price
        } else {
            return currentProduct.name.localeCompare(nextProduct.name)
        } 
    })
    .sort(() => {
        if (order === "asc") {
            return 0
        } else {
            return -1
        }
    })
    .map((product) => {
    	return (
			<ProductCard key={product.id}
                product={product}
                addToCart={addToCart}
            />
		)
  	})

    return (
        <div>
            <Header />
            <Filters
                query={query}
                minPrice={minPrice}
                maxPrice={maxPrice}
                sortingParameter={sortingParameter}
                order={order}
                setQuery={setQuery}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                setSortingParameter={setSortingParameter}
                setOrder={setOrder}
            />
            <ContainerProducts>
                {componentProduct}
            </ContainerProducts>
            {componentProduct.length <1 && <NotProduct><h2>Produto não Encontrado :(</h2></NotProduct>}   
            <Footer/>
        </div>
    )
}
