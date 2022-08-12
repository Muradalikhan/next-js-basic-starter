import React from 'react'
import {useRouter} from "next/router"

const ProductDetails = () => {
    const router=useRouter()
    const productID=router.query.productID
  return (
    <h1> product {productID} Details page</h1>
  )
}

export default ProductDetails