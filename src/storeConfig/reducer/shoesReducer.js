import React from 'react';
function shoeReducer(state,action){
 state={...state};
    console.log('reducer is ' ,action.payload)
    console.log('reducer is1 ' ,action.payloadbtn)
    switch (action.type) {

        case "CART-DATA":
           
            let data1 ={
                img :action.payload.pic,
                name:action.payload.fname,
                price: action.payload.price,
                size : action.payload.size,
                quantity: action.payload.quantity,
                color:action.payload.color,
               
                
    };console.log('data1 is ',data1)
            state.pic= action.payload.pic;
            state.name=action.payload.fname;
            state.price= action.payload.price;
            state.size = action.payload.size;
            state.cartArray = state.cartArray.concat(data1);
            state.total = parseInt(state.total)+ parseInt(action.payload.price);
            state.cartCounter = parseInt(state.cartCounter)+1;
            
            return state;
           case "DELETE-ITEM" :
              state.cartArray.splice( action.payload,1);
              state.total = parseInt(state.total)- parseInt(action.priceItem);
              state.cartCounter = parseInt(state.cartCounter)-1;
              return state;
              case "search-data":
                  return state;
            default:
    return state;
    }
    
}
 export default shoeReducer;