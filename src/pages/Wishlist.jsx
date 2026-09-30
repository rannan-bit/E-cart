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
      <div className='store-page'>
      {
        wishlist?.length > 0 ?
          <div className='wishlist-grid'>
          {wishlist?.map(pro => (
            
              <Card className='wishlist-card' key={pro.id}>
                <Card.Img variant="top" src={pro.images} alt={pro.title} />
                <Card.Body>
                  <Card.Title>{pro.title.slice(0, 10)}</Card.Title>
                  <div className='wishlist-actions d-flex align-items-center'>
                    <button className='btn' aria-label={`Remove ${pro.title} from wishlist`} title="Remove from wishlist" onClick={()=>dispatch(removeFromeWishlist(pro?.id))}>
                      <i class="fa-solid fa-heart-circle-xmark text-danger fs-3"></i>

                    </button>
                    <button className='btn' aria-label={`Add ${pro.title} to cart`} title="Add to cart" onClick={()=>handleCart(pro)}>
                      <i class="fa-solid fa-cart-plus text-success fs-3"></i>
                    </button>
                  </div>
                </Card.Body>
              </Card>
            
              ))}
              </div>
          :
              <div className='wishlist-empty'>
            <img src="https://static.vecteezy.com/system/resources/previews/019/174/358/non_2x/plan-strategic-strategy-tactics-economics-market-abstract-flat-color-icon-template-free-vector.jpg" alt="" width={'40%'} />
          </div>
      }
      </div>
    </div>
  )
}

export default Wishlist