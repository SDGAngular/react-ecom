import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';

import Header from '../../components/header/header';
import { setCartItems } from '../../redux/reducers/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();

  // Access cart items from the Redux store
  const cartSize = useSelector((state) => state.cart.cartSize);
  const cartItems = useSelector((state) => state.cart.cartItems);

 

  // Handler functions for incrementing and decrementing the quantity
  const incrementQuantity = (productId) => {
    // dispatch(addToCart(productId));
  };

  const decrementQuantity = (productId) => {
    // dispatch(removeFromCart(productId));
  };

  const deleteProduct  = (product)=>{

    dispatch(setCartItems({product,isAdd:false}))

  }

  // If the cart is empty, show a "No items in cart" message
  if (cartItems.length === 0) {
    return<>
       <Header></Header>
       <p style={styles.emptyCart}>No items in cart.</p>;
    </>
    
    
  }

  return (
    <>
    <Header></Header>
     <div style={styles.cartContainer}>
      <h2>Shopping Cart</h2>
      {cartItems?.map((eachProduct) => {
      

        return (
          <div key={eachProduct.id} style={styles.cartItem}>
            <img src={eachProduct.image} alt={eachProduct.title} style={styles.productImage} />

            <div style={styles.detailsContainer}>
              <h4 style={styles.productName}>{eachProduct.title}</h4>
              <p style={styles.productPrice}>${eachProduct.price.toFixed(2)}</p>

              <div style={styles.counter}>
                <button
                  style={styles.counterButton}
                  onClick={() => decrementQuantity(eachProduct.id)}
                >
                  -
                </button>
                <span>{eachProduct.quantity}</span>
                <button
                  style={styles.counterButton}
                  onClick={() => incrementQuantity(eachProduct.id)}
                >
                  +
                </button>
              </div>
            </div>

            <button
              style={styles.deleteButton}
              onClick={() => {
                deleteProduct(eachProduct)
              }}
            >
              <FaTrash />
            </button>
          </div>
        );
      })}
    </div>
    
    </>
   
  );
};

// Styles for the Cart component
const styles = {
  cartContainer: {
    padding: '20px',
    maxWidth: '900px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px',
    borderBottom: '1px solid #ddd',
    marginBottom: '10px',
  },
  productImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  detailsContainer: {
    flex: '1',
    marginLeft: '20px',
  },
  productName: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  productPrice: {
    fontSize: '16px',
    color: '#e74c3c',
    marginBottom: '10px',
  },
  counter: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '16px',
  },
  counterButton: {
    backgroundColor: '#ddd',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  deleteButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px',
    color: '#e74c3c',
  },
  emptyCart: {
    textAlign: 'center',
    fontSize: '20px',
    color: '#555',
  },
};

export default Cart;
