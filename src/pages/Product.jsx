import React from 'react'
import Header from './Header'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Product() {
  return (
    <div>
        <Header/>
        <Row>
            <Col>
            <img src="https://th.bing.com/th/id/OPAC.WHqh7UcRVufs5Q474C474?w=658&h=658&qlt=100&o=5&dpr=1.3&pid=21.1" alt="" width={'500px'}/>
            </Col>
            <Col>
            <h2 className='my-5'>GUESS Men Chrono Watch - GW0637G3 For Men (Blue, FS)</h2>         
            <h1 className='text-success'>$30</h1>   
            <p style={{textAlign:'justify'}} className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non adipisci animi. Quia voluptates enim similique quasi non aliquam cum doloremque, consequatur fuga illum aspernatur, doloribus quam commodi eum quod.</p>
            <div className='d-flex align-items-center justify-content-between mt-5'>
                <button className='btn'>
                    <i class="fa-solid fa-heart-circle-plus text-danger fs-3"></i>
                </button>
                <button className='btn'>
                    <i class="fa-solid fa-cart-plus text-success fs-3"></i>
                </button>
                
                
            </div>
            </Col>
        </Row>
    </div>
  )
}

export default Product