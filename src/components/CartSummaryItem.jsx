const CartSummaryItem = ({title, value, highlight}) => {
    return (
        <div className="flex justify-between items-center">
            <p>{title}</p>
            <p className={`font-bold ${highlight ? 'text-red-500' : 'text-black'}`}>{value}</p>
        </div>
    )
}

export default CartSummaryItem
