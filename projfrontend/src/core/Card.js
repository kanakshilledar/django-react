import React from 'react'
import ImageHelper from "./helper/ImageHelper"
import {Redirect} from "react-router-dom"
import { addItemToCart, removeItemFromCart } from './helper/cartHelper'


// deal with later
const isAuthenticated = true

const Card = ({
    product,
    addToCart = true,
    removeFromCart = true
}) => {
    const cartTitle = product ? product.name : "A Photo from Google"
    const cartDescription = product ? product.description : "Defauld Description"
    const cartPrice = product ? product.price : "Default"

    const addtoCart = () => {
      if (isAuthenticated) {
        addItemToCart(product, () => {})
        console.log('Added to cart')
      } else {
        console.log('Please Login!!!')
      }
    }

    const getAredirect = redirect => {
      if (redirect) {
        return <Redirect to="/cart" />;
      }
    }

    const showAddToCart = addToCart => {
      return(
        addToCart && (
          <button
            onClick={addToCart}
            className="btn btn-block btn-outline-success mt-2 mb-2"
          >
            Add to Cart
          </button>
        )
      )
    }

    const showRemoveFromCart = removeFromCart => {
      return(
        removeFromCart && (
          <button
            onClick={() => {
              removeItemFromCart(product._id)
              console.log("Product removed from cart!")
            }}
            className="btn btn-block btn-outline-danger mt-2 mb-2"
          >
            Remove from cart
          </button>
        )
      )
    }
    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead">{cartTitle}</div>
        <div className="card-body">
          <ImageHelper product={product} />
          <p className="lead bg-success font-weight-normal text-wrap">
            {cartDescription}
          </p>
          <p className="btn btn-success rounded  btn-sm px-4">$ {cartPrice}</p>
          <div className="row">
            <div className="col-12">
              {showAddToCart(addtoCart)}
            </div>
            <div className="col-12">
              {showRemoveFromCart(removeFromCart)}
            </div>
          </div>
        </div>
      </div>
    );
  };


export default Card;