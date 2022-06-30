import React,{useEffect,useState,memo} from 'react'
import {Link,useParams} from 'react-router-dom'
import "./Product.css"
import {useDispatch} from 'react-redux'
import {addItem} from "../../reduxToolKit/createSlice"
function Product() {
    const {id} = useParams();
    const [product,setProduct] = useState("");
    const [loading,setLoading] = useState(false)

    const dispatch = useDispatch();

    useEffect(()=>{
        const getProduct = async()=>{
            setLoading(true)
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await res.json())
            setLoading(false)
        }
        getProduct()
    },[id])

    const addProduct = (product)=>{
        dispatch(addItem(product))
    }

    const ShowProduct = () => {
        return (<div className='prod-cont'>
            <div className='prod-img'>
                <img src={product.image} alt={product.title} />
            </div>
            <div className="prod-body">
                <h1>{product.title}</h1>
                <p className='prod-rate'>
                Rating {product.rating && product.rating.rate}
                <i className="fa fa-start"></i>
                </p>
                <h3 className='prod-price'>${product.price}</h3>
                <p className='prod-desc'>{product.description}</p>
                <div className='prod-btns'>
                <button className='buyBtn' onClick={()=>addProduct(product)}>Add to Cart</button>
                <Link to="/cart">
                <button className='buyBtn'>Go to Cart</button>
                </Link>
                </div>
            </div>
    </div>)
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
    <>
   {loading?<LoadingSpinner/>:<ShowProduct/>}
    </>
  )
}

export default memo(Product)