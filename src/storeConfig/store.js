import { PinDropSharp } from '@mui/icons-material';
import React,{useReducer,createContext} from 'react';
import shoeReducer from './reducer/shoesReducer'
export const shoeStoreContext = createContext();
export default function ShoeStoreProvider(props){
   const initialState = {
        img:"",
        name : "Akbar",
        price : "5000",
        cartArray : [],
        size:"32",
        quantity:"0",
        total:"0.00",
        cartCounter:"0",
    }
     const[state,dispatch] = useReducer(shoeReducer,initialState);
     console.log('state is ',state);
    return(
        <div>
<shoeStoreContext.Provider value={[state,dispatch]}>
{console.log('state is1 ',state)}
    {props.children}
</shoeStoreContext.Provider>
        </div>
    )
}