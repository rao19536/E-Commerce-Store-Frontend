import React from 'react'
import './style.scss'

const Cart = (props) => {
  const {productImage, rating, category, title} = props
  return (
    <>
      <div id="cards_landscape_wrap-2">
        <div className="card-flyer">
          <div className="text-box">
            <div className="image-box">
              <img src={productImage} alt="" />
            </div>
            <div className="text-container">
              <h6>{category}</h6>
              <label>{rating}</label>
              <p>{title}</p>
            </div>
            <div className='add-to-cart'>
              <button className='btn btn-primary mb-4'> Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Cart
