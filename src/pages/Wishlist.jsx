import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from './Header';


function Wishlist() {
  return (
    <div>
      <Header/>
      <div className='my-5 mx-5'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://th.bing.com/th/id/OPAC.WHqh7UcRVufs5Q474C474?w=658&h=658&qlt=100&o=5&dpr=1.3&pid=21.1" />
          <Card.Body>
            <Card.Title>GUESS Men Chrono Watch - GW0637G3 For Men (Blue, FS)</Card.Title>
            {/* <Card.Text>
              Blue, Men Chrono Watch - GW0637G3 ,Analogue Watches perfect for Casual occasion.
            </Card.Text> */}
            {/* <Button variant="primary">View more...</Button> */}
            <div className='d-flex align-items-center justify-content-between'>
              <button className='btn'>
              <i class="fa-solid fa-heart-circle-xmark text-danger fs-3"></i>

            </button>
            <button className='btn'>
              <i class="fa-solid fa-cart-plus text-success fs-3"></i>
            </button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Wishlist