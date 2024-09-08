import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartSize: 0,
  cartItems:[]
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  
  reducers: {

    setCartItems:(state,action)=>{
      const product = action.payload.product;
      const isAdd = action.payload.isAdd;

      const findItems  = state.cartItems.find((eachItem)=>{
        return eachItem.id===product.id
      });

     if(!findItems){
      if(isAdd){
        state.cartItems.push({...product,quantity:1});
        state.cartSize+=1
      }
      
     }
     else{

      if(!isAdd){
      
          state.cartItems=state.cartItems.filter(eachItem=>eachItem.id!==product.id);
          if(state.cartSize>0){
            state.cartSize-=1
          }
          
        
      }

     }

    },
    increment: (state,action) => {
      state.value += 1;

      const prodId = action.payload.productId;
      state.cartItems = state.cartItems.map((eachItem)=>{
        if(eachItem.id===prodId){
          return {...eachItem,quantity:(eachItem.quantity+1)}
        }
        else{
          return eachItem
        }
      })
    },
    decrement: (state,action) => {
      state.value += 1;

      const prodId = action.payload.productId;
      state.cartItems = state.cartItems.map((eachItem)=>{
        if(eachItem.id===prodId){
          return {...eachItem,quantity:(eachItem.quantity>0?eachItem.quantity-1:0)}
        }
        else{
          return eachItem
        }
      })
    },
  },
});

export const { increment, decrement , setCartItems} = cartSlice.actions;
export default cartSlice.reducer;
