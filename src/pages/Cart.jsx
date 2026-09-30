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
      {
        cart?.length > 0 ?
          <div className='cart-layout row g-4'>
            <div className='col-lg-8'>
              <div className='cart-table-wrap'>
              <Table striped hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>...</th>
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
                              item.quantity>1 && <button className='btn' onClick={()=>dispatch(decrementQuantity(item?.id))}>-</button>
                            }
                            <input style={{ border: 'none',backgroundColor:'transparent' }} type="text" className='cart-quantity' value={item.quantity} readOnly aria-label={`${item.title} quantity`} />
                            <button className='btn' onClick={()=>dispatch(incrementQuantity(item?.id))}>+</button>
                          </div>
                        </td>
                        
                        <td>{item.totalPrice}</td>
                        <td>
                          <button className='btn' onClick={()=>dispatch(removeFromeCart(item.id))}>
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
                  <Link to={'/'} className='btn btn-info'>SHOPE MORE</Link>
                  <button className='btn btn-outline-danger' onClick={()=>dispatch(emptyCart())}>EMPTY CART</button>
                  
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
            <img src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg" alt="" />
            <h3>Empty Cart</h3>

          </div>
      }
    </div>
  )
}

export default Cart