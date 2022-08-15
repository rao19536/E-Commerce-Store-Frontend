import React from 'react'
import Cart from '../../components/cart/cartComponent'
import { useGetAllproductsQuery } from '../../services/endPoints/users/cart'
import CircularProgress from '@mui/material/CircularProgress'
import './style.scss'

const CartContainer = () => {
  
  const { data, error, isLoading } = useGetAllproductsQuery()
  return (
    <>
      <div className='my-container'>
        <div className='container' id="users">
          <div className='row'>
            <h2 className='mb-0 pt-4 main-title'>Shopping Store</h2>
            {!isLoading ? !error ? data && data.map((product, index) => (
              <div className='col-md-3 mb-4'>
              <Cart
                  key={product.id}
                  productImage={product.image}
                  rating={product.rating.rate}
                  category={product.category} 
                  title={product.title}
                  
                />
              </div>
              )) : 'error Found' : (
                <>
                  <CircularProgress className='spinner-class' />
                </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default CartContainer
