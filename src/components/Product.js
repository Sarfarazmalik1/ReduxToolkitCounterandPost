import {React,useState,useEffect} from 'react'

const Product = () => {

    const [products,getProducts]= useState([ ])
    useEffect = (()=> {
        fetch('https://fakestoreapi.com/products')
        .then(data=> data.json())
        .then(result=>getProducts(result))
    
    }, [])
    console.log(products)

  return (
    <>
          <div>Product</div>
          {JSON.stringify(products)}
    </>
    
  )
}

export default Product