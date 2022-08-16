import React from 'react'
import Product from '../../components/products/productComponent'
import { useGetAllproductsQuery } from '../../services/endPoints/products/products'
import CircularProgress from '@mui/material/CircularProgress'
import './style.scss'

const ProductContainer = () => {
  
  const { data, error, isLoading } = useGetAllproductsQuery()
  return (
    <>
      <div className='my-container'>
        <div className='container' id="users">
          <div className='row'>
            <h2 className='mb-0 pt-4 main-title'>Shopping Store</h2>
            {!isLoading ? !error ? data && data.map((product, index) => (
              <div className='col-md-3 mb-4' key={index}>
              <Product
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

export default ProductContainer
