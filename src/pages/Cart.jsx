import React from 'react'
import Header from './Header'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, emptyCart, incrementQuantity, removeFromeCart } from '../redux/slice/cartSlice';
import Product from './Product';
import { Link, useNavigate } from 'react-router-dom';









function Cart() {
  const cart = useSelector(state => state.cart)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleCheckout=()=>{
    alert("Order placed successfully")
    dispatch(emptyCart())
    navigate('/')

  }

  
  return (
    <div>
      <Header />
      <main className="store-page cart-page">
        <header className="page-heading">
          <div>
            <p className="page-eyebrow">Your selections</p>
            <h1>Shopping cart</h1>
            <p>Review your items before checkout.</p>
          </div>
          {cart?.length > 0 && <div className="page-count"><strong>{cart.length}</strong> items</div>}
        </header>
      {
        cart?.length > 0 ?
          <div className='cart-layout row g-4'>
            <div className='col-lg-8'>
              <div className='cart-table-wrap'>
              <Table striped hover>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product</th>
                    <th scope="col">Image</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col"><span className="visually-hidden">Actions</span></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cart?.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index+1}</td>
                        <td>{item.title}</td>
                        <td><img src={item.thumbnail} alt={item.title} width={'70px'} /></td>
                        <td>
                          <div className='d-flex align-items-center'>
                            {
                              item.quantity>1 && <button className='btn' aria-label={`Decrease ${item.title} quantity`} onClick={()=>dispatch(decrementQuantity(item?.id))}>-</button>
                            }
                            <input style={{ border: 'none',backgroundColor:'transparent' }} type="text" className='cart-quantity' value={item.quantity} readOnly aria-label={`${item.title} quantity`} />
                            <button className='btn' aria-label={`Increase ${item.title} quantity`} onClick={()=>dispatch(incrementQuantity(item?.id))}>+</button>
                          </div>
                        </td>
                        
                        <td>{item.totalPrice}</td>
                        <td>
                          <button className='btn' aria-label={`Remove ${item.title} from cart`} onClick={()=>dispatch(removeFromeCart(item.id))}>
                            <i className="fa-solid fa-trash text-danger"></i>
                          </button>
                        </td>

                      </tr>

                    ))

                  }

                </tbody>
                
              </Table>
                </div>
                <div className='cart-actions'>
                  <Link to={'/'} className='btn btn-outline-secondary'>Continue shopping</Link>
                  <button className='btn btn-outline-danger' onClick={()=>dispatch(emptyCart())}>Empty cart</button>
                  
                </div>

            </div>
            <div className='col-lg-4'>
              <div className='cart-summary'>
                <h3 className='text-warning'>Total Products: <span className='text-danger'>{cart?.length}</span></h3>
                <h3 className='text-warning'>Total Price: <span className='text-danger'>{cart?.reduce((a,b)=>a+b.totalPrice,0)}</span></h3>
                <button className='btn btn-primary my-5' onClick={handleCheckout}>Checkout</button>

              </div>

            </div>

          </div>
          :
          <div className='cart-empty'>
            <span className="empty-state-icon"><i className="fa-solid fa-basket-shopping" aria-hidden="true"></i></span>
            <h2 className="empty-state-title">Your cart is empty</h2>
            <p className="empty-state-copy">Items you add will be ready for checkout here.</p>
            <Link to="/" className="btn btn-primary empty-state-link">Explore products</Link>

          </div>
      }
      </main>
    </div>
  )
}

export default Cart