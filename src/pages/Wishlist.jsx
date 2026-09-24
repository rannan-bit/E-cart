import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromeWishlist } from '../redux/slice/WishlistSlice';
import { addToCart } from '../redux/slice/cartSlice';




function Wishlist() {
  const dispatch=useDispatch()

  const wishlist = useSelector(state => state.Wishlist)
  const cart=useSelector(state=>state.cart)

  const handleCart=(product)=>{
          let existingProduct=cart.find(pro=>pro.id==product.id)
          if(existingProduct){
              dispatch(addToCart(product))
              alert("Product Quantity Incremented")
              dispatch(removeFromeWishlist(product.id))
          }else{
              dispatch(addToCart(product))
              dispatch(removeFromeWishlist(product.id))
          }
      }

  return (
    <div>
      <Header />
      <div className=' d-flex my-5 mx-5'>
      {
        wishlist?.length > 0 ?
          wishlist?.map(pro => (
            
              <Card style={{ width: '18rem' }} className='ms-4'>
                <Card.Img variant="top" src={pro.images} />
                <Card.Body>
                  <Card.Title>{pro.title.slice(0, 10)}</Card.Title>
                  <div className='d-flex align-items-center justify-content-between'>
                    <button className='btn' onClick={()=>dispatch(removeFromeWishlist(pro?.id))}>
                      <i class="fa-solid fa-heart-circle-xmark text-danger fs-3"></i>

                    </button>
                    <button className='btn' onClick={()=>handleCart(pro)}>
                      <i class="fa-solid fa-cart-plus text-success fs-3"></i>
                    </button>
                  </div>
                </Card.Body>
              </Card>
            
          ))
          :
          <div className='d-flex align-items-center justify-content-center' style={{minHeight:'100vh',width:'100%'}}>
            <img src="https://static.vecteezy.com/system/resources/previews/019/174/358/non_2x/plan-strategic-strategy-tactics-economics-market-abstract-flat-color-icon-template-free-vector.jpg" alt="" width={'40%'} />
          </div>
      }
      </div>
    </div>
  )
}

export default Wishlist