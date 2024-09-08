
import { useEffect, useState } from 'react';
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#f8f8f8',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
      logo: {
        fontSize: '24px',
        fontWeight: 'bold',
      },
      headerIcons: {
        display: 'flex',
        alignItems: 'center',
      },
      cartIcon: {
        position: 'relative',
        marginLeft: '20px',
      },
      cartCount: {
        position: 'absolute',
        top: '-8px',
        right: '-8px',
        backgroundColor: 'red',
        color: '#fff',
        borderRadius: '50%',
        padding: '2px 6px',
        fontSize: '12px',
      },
}

function Header(){
    // const [cartItems, setCartItems] = useState(0);
    
    const cartItems = useSelector((store)=>{
      return store.cart.cartSize
    })

    const navigate = useNavigate();
    return <>
    <header style={styles.header}>
    <div style={styles.logo}>MyShop</div>
    <div style={styles.headerIcons}>
      <FaUserCircle size={24} />
      <div onClick={()=>{navigate('/cart')}} style={styles.cartIcon}>
        <FaShoppingCart size={24} />
        {cartItems > 0 && <span style={styles.cartCount}>{cartItems}</span>}
      </div>
    </div>
  </header>
    </>
    
}

export default Header;