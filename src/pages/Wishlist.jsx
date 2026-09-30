import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
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
      <main className='store-page'>
      <header className="page-heading">
        <div>
          <p className="page-eyebrow">Saved for later</p>
          <h1>Your wishlist</h1>
          <p>Keep your favorites close.</p>
        </div>
        {wishlist?.length > 0 && <div className="page-count"><strong>{wishlist.length}</strong> saved</div>}
      </header>
      {
        wishlist?.length > 0 ?
          <div className='wishlist-grid'>
          {wishlist?.map(pro => (
            
              <Card className='wishlist-card' key={pro.id}>
                <Card.Img variant="top" src={pro.images} alt={pro.title} />
                <Card.Body>
                  <Card.Title>{pro.title}</Card.Title>
                  <Card.Text className="product-price fw-bold">${pro.price}</Card.Text>
                  <div className='wishlist-actions d-flex align-items-center'>
                    <button className='btn' aria-label={`Remove ${pro.title} from wishlist`} title="Remove from wishlist" onClick={()=>dispatch(removeFromeWishlist(pro?.id))}>
                      <i className="fa-solid fa-heart-circle-xmark text-danger fs-3" aria-hidden="true"></i>

                    </button>
                    <button className='btn' aria-label={`Add ${pro.title} to cart`} title="Add to cart" onClick={()=>handleCart(pro)}>
                      <i className="fa-solid fa-cart-plus text-success fs-3" aria-hidden="true"></i>
                    </button>
                  </div>
                </Card.Body>
              </Card>
            
              ))}
              </div>
          :
              <div className='wishlist-empty'>
            <span className="empty-state-icon"><i className="fa-regular fa-heart" aria-hidden="true"></i></span>
            <h2 className="empty-state-title">Your wishlist is waiting</h2>
            <p className="empty-state-copy">Save products you love and come back to them anytime.</p>
            <Link to="/" className="btn btn-primary empty-state-link">Browse products</Link>
          </div>
      }
      </main>
    </div>
  )
}

export default Wishlist