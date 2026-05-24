import { Link } from "react-router-dom";
import { getProducts } from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {

    const products = getProducts();

    return (
        <div className="home-page">

            <div className="home-page-h1">
                <h1 className="welcome-line">Welcome to ShopHub</h1>
            </div>

            <div className="home-page-para">
                <p className="para-line">Discover amazing products at great prices</p>
            </div>

            <div className="our-products">
                <h2 className="our-products-line">Our Products</h2>
            </div>

            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard product={product}/>
                ))}
            </div>
        </div>
    )
}

export default Home;