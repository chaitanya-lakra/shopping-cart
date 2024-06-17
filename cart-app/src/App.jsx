import { useState } from 'react';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Product from './pages/Product';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-200 h-fit'>
      <div><Toaster
        position="top-center"
        reverseOrder={false}
      /></div>
      <Router>
        <Navbar />
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path='/product/:id' element={<Product />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
