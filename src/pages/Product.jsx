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
            <main className="product-detail">
            <Link to="/" className="product-back-link">
                <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
                Back to products
            </Link>
            <Row className="align-items-center g-4 g-lg-5">
                <Col xs={12} md={6}>
                    <div className="product-image-wrap">
                    <img src={product.images} alt={product.title} className="product-image" />
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <h2 className='my-5'>{product.title}</h2>
                    <h1 className='product-detail-price'>${product.price}</h1>
                    <p className='product-description my-3'>{product.description}</p>
                    <div className='product-detail-actions d-flex align-items-center mt-5'>
                        <button onClick={handleWishlist} className='btn' aria-label="Add to wishlist" title="Add to wishlist">
                            <i className="fa-solid fa-heart-circle-plus text-danger fs-3" aria-hidden="true"></i>
                            <span>Wishlist</span>
                        </button>
                        <button className='btn' onClick={handleCart} aria-label="Add to cart" title="Add to cart">
                            <i className="fa-solid fa-cart-plus text-success fs-3" aria-hidden="true"></i>
                            <span>Add to cart</span>
                        </button>


                    </div>
                </Col>
            </Row>
            </main>
        </div>
    )
}

export default Product