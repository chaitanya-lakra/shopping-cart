import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { removeFromCart } from '../redux/action/cartActions';
import { useDispatch } from 'react-redux';
import { Order } from '../service/api';
import toast from 'react-hot-toast';
import { EmptyCart } from '../redux/action/cartActions';


function CartPage() {
  const dispatch = useDispatch();
  const cartitem = useSelector((state) => state.addToCartreducer.Cart);


  const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

  const Api = async () => {
    let response = await Order(cartitem);
    console.log(response);
    toast.success(response.data);
    dispatch(EmptyCart());
  }

  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const Calculation = () => {
    let price = 0, discount = 0;
    cartitem.map(items => {
      price += items.price.mrp;
      discount += (items.price.mrp - items.price.cost);
      return 0;

    });
    setPrice(price);
    setDiscount(discount);
  }
  useEffect(() => {
    Calculation();
  }, [cartitem]);


  return (
    <div className='bg-grey-300 h-screen w-full' >
        {
          cartitem.length ?
              <div className='flex ml-28'>
                <div className='bg-white m-5 w-8/12'>

                  <p className='p-4 border-b'>My Cart({cartitem.length})</p>

                  {
                    cartitem.map(data => {
                      return (
                          <div className='p-6 border-b flex' >
                              <img src={data.detailUrl} alt="" className='w-28' />
                            <div className='mx-8'>
                              <p>{data.title.longTitle}</p>
                              <p p className='my-2'><span className='font-semibold text-lg' >₹{data.price.cost}</span>&nbsp;&nbsp;<span><strike>₹{data.price.mrp}</strike></span>&nbsp;&nbsp;<span className='text-green-500'>{data.discount}</span></p>
                              <button className='mt-6 font-semibold' onClick={() => dispatch(removeFromCart(data))}>REMOVE</button>
                            </div>
                          </div>
                      )
                    })
                  }


                  <div style={{ boxShadow: '0 -2px 10px 0 rgb(0 0 0/10%' }} className='pr-6 pb-2 border-t'>
                    <button onClick={() => { Api() }} style={{ background: '#fb641b' }} className=' my-2 p-2 float-right px-28 text-white rounded-sm'>PLACE ORDER</button>
                  </div>
                </div>
                <div className='bg-white my-5 w-2/6 mr-28 h-72'>
                  <p className='p-4 border-b text-gray-400'>PRICE DETAILS</p>
                  <div className='p-4'>
                      <p className='mb-4'>Price( {cartitem.length} items)
                        <span className='float-right'>₹{price}</span>
                      </p>
                      <p className='mb-4'>Discount
                        <span className='float-right'>₹{discount}</span>
                      </p>
                      <p className='mb-4' >Delivery charges
                        <span className='float-right'>₹40</span>
                      </p>
                      <h1 className='text-2xl mb-7'>Total Amont <span className='float-right'>₹{price - discount + 40}</span></h1>
                      <p className='mb-4 text-green-600'>you will save ₹{discount} on this order</p>
                  </div>
                </div>
              </div>
            : (
              <div className='bg-white text-center m-10 mx-48 h-screen' >
                <img src={imgurl} alt="" className='w-28 m-auto pt-32' />
                <p className='my-4 font-semibold'>Cart is Empty</p>
                <p className='font-semibold'>Add items to it now</p>

              </div>
            )
        }
    </div>
  )
}

export default CartPage