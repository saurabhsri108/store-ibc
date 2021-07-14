export const gettotalPrices = (totalPrice) => {
  let deliveryPrice = totalPrice > 40 ? "FREE" : 10
  const finalPrice =
    typeof deliveryPrice === "number" ? totalPrice + deliveryPrice : totalPrice
  deliveryPrice =
    typeof deliveryPrice === "number" ? `$${deliveryPrice}` : "FREE"

  return [deliveryPrice, finalPrice]
}
