

import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import {useDispatch} from 'react-redux'
import { setCartItems } from '../../redux/reducers/cartSlice';



function Shop() {
  const nav = useNavigate();

  const [products, setproducts] = useState([]);
  const dispatch = useDispatch()

  useEffect( ()=>{



    fetchData();        
  },[])
  
  async function fetchData(){
    const products =  await  fetch('https://fakestoreapi.com/products');
    const productjson= await products.json();
    setproducts(productjson)
  }

  // Function to add an item to the cart
  const addToCart = (product) => {
    // setCartItems(cartItems + 1);
    dispatch(setCartItems({product,isAdd:true}))
  };

  
  return (
    <div>
      {/* Header */
      
      <Header></Header>
      }
     

      {/* Product List */}
      <div style={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button style={styles.button} onClick={()=>{addToCart(product)}}>
              Add to Cart
            </button>
            <button onClick={()=>{
              nav(`/product/${product.id}`)
            }} style={styles.viewMoreButton}>View More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f8f8f8',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },

  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  viewMoreButton: {
    marginTop: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Shop;
