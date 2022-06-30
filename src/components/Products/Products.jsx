import React, { useEffect, useRef, useState,memo } from 'react'
import "./Products.css"
import {Link} from 'react-router-dom'
function Products() {
    const [data,setData] = useState([])
    const [filter,setFilter] = useState(data)
    const [loding,setLoding] = useState(false)
    const componentMounted = useRef(true)
    useEffect(()=>{
        const getData = async()=>{
            setLoding(true)
            const res = await fetch('https://fakestoreapi.com/products')
            if(componentMounted.current){
                setData(await res.clone().json())
                setFilter(await res.json())
                setLoding(false)
            }
            return ()=>{
                componentMounted.current = false
            }
        }
        getData()
    },[])

    const filterProduct = (cat)=>{
        const updateList = data.filter(x=>x.category === cat);
        setFilter(updateList)
    }

    const ShowProduct = () =>{
        return  <div className='products'>
        <div className='products-nav'>
           <ul>
               <li  onClick={()=>setFilter(data)}>All</li>
               <li onClick={()=>filterProduct("women's clothing")}>Women's Clothing</li>
               <li onClick={()=>filterProduct("men's clothing")}>Men's Clothing</li>
               <li onClick={()=>filterProduct("jewelery")}>Jewelery</li>
               <li onClick={()=>filterProduct("electronics")}>Electronics</li>
           </ul>
        </div>
        <div className='latest-product-box'>
        {filter.map((product,i)=>{
            return (
                    <div key={i} className="product-container">
                        <div className="product-image-container">
                        <img src={product.image} alt={product.title} />
                        </div>
                        <div className="product-body">
                            <h5 className="product-title">
                                {product.title.substring(0,12)}...
                            </h5>
                            <p>${product.price}</p>
                            <Link to={`/products/${product.id}`}>
                            <button className='buyBtn'>Buy Now</button>
                            </Link>
                        </div>
                    </div>
            )
        })}
        </div>
   </div>
    }

    const LoadingSpinner = ()=> {
        return (
          <div className="spinner-container">
            <div className="loading-spinner">
            </div>
          </div>
        );
      }

  return (
    <div className='products-latest'>
    <h1>Latest Products</h1>
        {loding ? <LoadingSpinner/> :<ShowProduct/>}
    </div>
  )
}

export default memo(Products)