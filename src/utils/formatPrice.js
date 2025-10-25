export default function formatPrice(price) {
    return price && `Rs.${price.toFixed(2)}`
}