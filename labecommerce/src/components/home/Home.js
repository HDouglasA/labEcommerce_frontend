import { Products } from "..//..//data"
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { ProductCard } from "../productCard/ProductCard";
import { ContainerProducts } from "./Style";

export const Home = () => {
    const componentProduct = Products.map((product) => {
    	return (
			<ProductCard key={product.id}
                name={product.name}
                price={product.price}
                image={product.imageUrl}
            />
		)
  	})

    return (
        <div>
            <Header/>
            <ContainerProducts> 
                {componentProduct}
            </ContainerProducts>
            <Footer/>
        </div>
    )
}
