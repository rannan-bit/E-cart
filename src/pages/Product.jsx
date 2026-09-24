import React, { useEffect, useState } from 'react'
import Header from './Header'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link, useParams } from 'react-router-dom'
import { addToWishlist } from '../redux/slice/WishlistSlice'
import { useDispatch, useSelector } from 'react-redux'
import Cart from './Cart'
import { addToCart } from '../redux/slice/cartSlice'



function Product() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [product, setProduct] = useState({})
    const wishlist = useSelector(state => state.Wishlist)
    const cart=useSelector(state=>state.cart)


    useEffect(() => {
        if (localStorage.getItem('products')) {
            let allproducts = JSON.parse(localStorage.getItem('products'))
            setProduct(allproducts?.find(pro => pro.id == id))
        }
    },[])
    console.log(product);
    const handleWishlist = () => {
        let existingProduct = wishlist.find(pro => pro.id == product.id)
        if (existingProduct) {
            alert('Product already in your wishlist')
        } else {
            dispatch(addToWishlist(product))
        }
    }
    console.log(wishlist);

    const handleCart=()=>{
        let existingProduct=cart.find(pro=>pro.id==product.id)
        if(existingProduct){
            dispatch(addToCart(product))
            alert("Product Quantity Incremented")
        }else{
            dispatch(addToCart(product))
        }
    }



    return (
        <div>
            <Header />
            <Row>
                <Col>
                    <img src={product.images} alt="" width={'500px'} />
                </Col>
                <Col>
                    <h2 className='my-5'>{product.title}</h2>
                    <h1 className='text-success'>${product.price}</h1>
                    <p style={{ textAlign: 'justify' }} className='my-3'>{product.description}</p>
                    <div className='d-flex align-items-center justify-content-between mt-5'>
                        <button onClick={handleWishlist} className='btn'>
                            <i className="fa-solid fa-heart-circle-plus text-danger fs-3"></i>
                        </button>
                        <button className='btn' onClick={handleCart}>
                            <i className="fa-solid fa-cart-plus text-success fs-3"></i>
                        </button>


                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Product