import './App.css'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Pnf from './pages/Pnf'


function App() {
  return (
    <div className="app-shell">
      <div className="app-main">
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/product/:id/view' element={<Product/>}/>
          <Route path='/*' element={<Pnf/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
