
import { products } from '../data/data';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList, removeFromWishList } from '../redux/action/wishListActions';
import toast from 'react-hot-toast';


function HomePage() {
  const dispatch = useDispatch();
  const { wishListedItemId, wishList } = useSelector(state => state.wishListReducer);

  const handleWishList = (item, availabilityCheck) => {
    if (availabilityCheck) {
      dispatch(removeFromWishList(item))
      toast.success("Remove from WishList");
    } else {
      dispatch(addToWishList(item))
      toast.success("Add to WishList");
    }

  }

  const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
  return (
    <div className='m-10 flex gap-3' >
      <div className='w-6/12 bg-white p-4' >
        <p className='border-b font-semibold'>Wishlist({wishList.length})</p>
        {
          wishList.length ?
            <div >
              {
                wishList.map((data, index) => {
                  return (
                    // <Link to={`product/${data.id}`}>
                    <div key={index} className='flex items-center '>
                      <img src={data.url} alt={data.title.shortTitle} className="w-10 my-10 " />
                      <div className="my-2 mx-4">
                        <h2 className="text-lg font-bold">{data.title.shortTitle}</h2>
                        <span className="text-green-600">₹{data.price.cost}</span><span> <strike className='text-md ml-2 text-gray-400'>₹{data.price.mrp}</strike> </span>
                      </div>
                    </div>
                    // </Link>
                  )
                })
              }
            </div>
            :
            <>
              <img src={imgurl} alt="" className='w-28 m-auto' />
              <p className='text-center'>
                wishlist is Empty
              </p>
            </>
        }

      </div>
      <div className=' w-screen bg-white p-10' >
        <div className='grid grid-cols-3 gap-10'>
          {
            products.map((data, index) => {
              return (
                <div className="relative border rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl transition-shadow duration-300" key={index}>
                  <Link to={`product/${data.id}`}>
                    <img src={data.url} alt={data.title.shortTitle} className="w-28 my-10 mx-auto" />
                    <div className="p-4">
                      <h2 className="text-lg font-bold">{data.title.shortTitle}</h2>
                      <span className="text-green-600">₹{data.price.cost}</span><span> <strike className='text-md ml-2 text-gray-400'>₹{data.price.mrp}</strike> </span>
                    </div>
                  </Link>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <button className="bg-white p-2 rounded-full text-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" onClick={() => { handleWishList(data, wishListedItemId.includes(data?.id)) }}>
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill={wishListedItemId.includes(data?.id) ? "red" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21l-8.28-8.28a5 5 0 117.07-7.07l1.21 1.2 1.21-1.2a5 5 0 117.07 7.07L12 21z" />
                      </svg>
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default HomePage