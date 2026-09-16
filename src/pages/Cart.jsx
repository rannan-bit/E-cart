import React from 'react'
import Header from './Header'
import Table from 'react-bootstrap/Table';



function Cart() {
  return (
    <div>
      <Header />
      <div className='row'>
        <div className='col-lg-8'>
          <Table striped bordered hover>
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
              <tr>
                <td>1</td>
                <td>GUESS Men Chrono Watch - GW0637G3 For Men (Blue, FS)</td>
                <td><img src="https://th.bing.com/th/id/OPAC.WHqh7UcRVufs5Q474C474?w=658&h=658&qlt=100&o=5&dpr=1.3&pid=21.1" alt="" width={'70px'} /></td>
                <td>
                  <div className='d-flex align-items-center'>
                    <button className='btn'>-</button>
                    <input style={{ width: '10px', border: 'none' }} type="text" className='border-none' value={1} />
                    <button className='btn'>+</button>
                  </div>
                </td>
                <td>$30</td>
                <td>
                  <button className='btn'>
                    <i class="fa-solid fa-trash text-danger"></i>
                  </button>
                </td>

              </tr>
            </tbody>
          </Table>

        </div>
        <div className='col-lg-4'>
          
        </div>

      </div>
    </div>
  )
}

export default Cart