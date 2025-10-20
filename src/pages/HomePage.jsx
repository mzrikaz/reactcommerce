
import ProductCard from "../components/ProductCard"

const HomePage = ({ products, loading }) => {

    return (
        <>
            <title>Home</title>
            <section className="w-7xl mx-auto my-8">
                <h2 className="text-3xl font-bold mb-4">Welcome to ReactCommerce</h2>
                <p className="mb-4">
                    Discover the best products at unbeatable prices. Shop now and enjoy exclusive deals!
                </p>
            </section>
            <section className="w-7xl mx-auto my-8">
                <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                        loading && <p>Loading Products...</p>
                    }
                    {
                        !loading && products.length === 0 ? <p>No Products Available...</p> :
                            products.map((product) =>
                                <ProductCard key={product.id} product={product} />

                            )
                    }
                </div>
            </section>
        </>
    )
}

export default HomePage
