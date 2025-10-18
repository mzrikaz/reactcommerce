

const CheckoutPage = ({cart}) => {
    return (
        <>
            <title>Checkout</title>
            <section className="w-7xl mx-auto my-8">
                <h2 className="text-3xl font-bold mb-4">Checkout</h2>
               <div className={`grid grid-cols-12`}>
                    <div className="col-span-10">
                        {
                            cart.map((item) => <div key={item.id} className="grid grid-cols-6">
                                <div>
                                    <img src={item.product.image} className="h-24 w-24" />
                                </div>
                                <div>
                                    <h2>{item.product.name}</h2>
                                    <p>Qty: {item.quantity}</p>
                                    <p>Rs. {item.quantity * item.product.price}</p>
                                </div>
                            </div>)
                        }
                    </div>
                    <div className="col-span-2">

                    </div>
               </div>
            </section>
        </>
    )
}

export default CheckoutPage
