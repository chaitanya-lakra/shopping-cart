import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { products } from '../data/data';
import { MdOutlineLocalOffer } from "react-icons/md";
import { addToCart, removeFromCart } from '../redux/action/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';



function Product() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.addToCartreducer.Cart);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    toast.success("Added to Cart");
  }
  const { id } = useParams();
  const product = products.find(ele => ele.id === id);



  return (
    <div className='bg-white my-5 p-5 px-20 grid grid-cols-3 gap-1'>
      <div className='cols-span-1'>
        <img src={product.detailUrl} alt="" className='w-10/12 m-auto' />
        {cartItem.find(ele => ele.id === product.id) ?
          <button onClick={() => {toast.success("Removed From Cart");dispatch(removeFromCart(product))}} className='bg-red-500 h-16 w-full mt-8 rounded-md text-white font-semibold' >Remove</button> :
          <button onClick={() => handleAddToCart(product)} className='bg-green-500 h-16 w-full mt-8 rounded-md text-white font-semibold' >Add To Cart</button>
        }
      </div>
      <div className='col-span-2 px-12'>
        <p className='my-2 font-semibold'>{product.title.longTitle}</p>
        <p className='text-gray-500 my-2'>82 Ratings and 2 Reviews</p>
        <span className='my-2 text-4xl font-semibold'>₹{product.price.cost}&nbsp;<strike className='text-lg text-gray-400'>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;<span className='text-green-600'>{product.price.discount}off</span>
        <p className='my-2 font-semibold'>Available Offers</p>
        <p className='my-2 flex'><span><MdOutlineLocalOffer className='text-green-600' /></span>&nbsp;Get extra 20% off upto ₹50 on 1 item(s) T&C</p>
        <p className='my-2 flex'><span><MdOutlineLocalOffer className='text-green-600' /></span>&nbsp;Get extra 30% off (price inclusive of discount) T&C</p>
        <p className='my-2 flex'><span><MdOutlineLocalOffer className='text-green-600' /></span>&nbsp;Sign up for Pay Later and get Gift card worth ₹100* Know more</p>
        <p className='my-2 flex'><span><MdOutlineLocalOffer className='text-green-600' /></span>&nbsp;Buy 2 items save 5% ; Buy 3 items save 10% T&C</p>
        <p className='my-2 flex'><span><MdOutlineLocalOffer className='text-green-600' /></span>&nbsp;5% Cashback on Flipkart Axis bank Credit card</p>
        <p className='my-2 flex'><span><MdOutlineLocalOffer className='text-green-600' /></span>&nbsp;No cost EMI on bajaj Finserv EMI card on cart value above ₹2999 T&C</p>
        <table>
          <tr>
            <th className='text-gray-500 p-3 my-2'>
              Description
            </th>
            <td className='p-3'>{product.description}</td>
          </tr>
        </table>
      </div>
    </div>
    
    
  )
}

export default Product