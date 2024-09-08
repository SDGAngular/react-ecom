
import { FaStar } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import './product.css'; // For styling
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/reducers/cartSlice';

function ProductPage() {
 

  const [product,setProduct]= useState({
    
  });

  const [cartQuantity, setCartQuantity] = useState(0);
  const { productId } = useParams();
  const dispatch = useDispatch()

  async function fetchData (){
    const data = await fetch('https://fakestoreapi.com/products/'+productId);
    const product = await data.json();
    setProduct(product)

  }


  useEffect(()=>{fetchData()},[])

  // Functions to handle increment and decrement of cart quantity
  const incrementQuantity = () => {

  
    if(cartQuantity===0){
      dispatch(setProduct())
    }
    else{
      dispatch(increment({productId}))
    }
    
    setCartQuantity(cartQuantity + 1);
  };

  const decrementQuantity = () => {
    if (cartQuantity > 0) {

      dispatch(decrement({productId}))


      setCartQuantity(cartQuantity - 1);
    }
  };

  return (

  <>
    <Header></Header>
    <div style={styles.container}>
      {/* Product Image */}
      <div style={styles.imageContainer}>
        <img src={product.image} alt={product.title} style={styles.image} />
      </div>

      {/* Product Details */}
      <div style={styles.detailsContainer}>
        <h1 style={styles.title}>{product?.title}</h1>
        <p style={styles.category}>Category: {product?.category}</p>
        <p style={styles.description}>{product?.description}</p>

        {/* Rating and Customer Count */}
        <div style={styles.ratingContainer}>
          <div style={styles.stars}>
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                color={index < Math.floor(product?.rating?.rating) ? '#ffc107' : '#e4e5e9'}
                size={30}
                

              />
            ))}
          </div>
          <p style={styles.customerCount}>
            {product?.rating?.rating} ({product?.rating?.count} customer reviews)
          </p>
        </div>

        {/* Pricing */}
        <div style={styles.priceContainer}>
          <p style={styles.actualPrice}>${product.price?.toFixed(2)}</p>
          <p style={styles.discountedPrice}>${product.price?.toFixed(2)}</p>
        </div>

        {/* Add to Cart Button and Counter */}
        {cartQuantity === 0 ? (
          <button style={styles.addToCartButton} onClick={incrementQuantity}>
            Add to Cart
          </button>
        ) : (
          <div style={styles.counter}>
            <button style={styles.counterButton} onClick={decrementQuantity}>
              -
            </button>
            <span>{cartQuantity}</span>
            <button style={styles.counterButton} onClick={incrementQuantity}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    gap: '40px',
    padding: '40px',
    maxWidth: '1200px',
    margin: 'auto',
  },
  imageContainer: {
    flex: '1',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
    objectFit: 'cover',
  },
  detailsContainer: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  category: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '20px',
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  stars: {
    display: 'flex',
    marginRight: '10px',
  },
  customerCount: {
    fontSize: '16px',
    color: '#555',
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '30px',
  },
  actualPrice: {
    fontSize: '20px',
    color: '#999',
    textDecoration: 'line-through',
  },
  discountedPrice: {
    fontSize: '24px',
    color: '#e74c3c',
    fontWeight: 'bold',
  },
  addToCartButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
  },
  counter: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '18px',
  },
  counterButton: {
    backgroundColor: '#ddd',
    border: 'none',
    padding: '5px 15px',
    cursor: 'pointer',
    fontSize: '18px',
  },
};

export default ProductPage;
