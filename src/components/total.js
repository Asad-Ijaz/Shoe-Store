import React,{useContext} from 'react';
import {useParams} from 'react-router-dom';
import {shoeStoreContext} from '../storeConfig/store';
import Shoes from '../shoes.json';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import {Button,Typography,Container,Grid,Paper,Divider} from '@mui/material';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
import AddSharpIcon from '@mui/icons-material/AddSharp';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'left',
    boxShadow:'0 0 0 0' ,
    // color: theme.palette.text.secondary,
  }));

function ProductItems(){
const [size,setSize]= React.useState();
let [ivalue, setIvalue] = React.useState(0);
   
    let { id } = useParams();
    
    const [state, dispatch] = useContext(shoeStoreContext);
    function addToCart(e){
        e.preventDefault();
        let data ={
                pic:Shoes[id].img,
                fname:Shoes[id].fname,
                color:Shoes[id].color,
                price:Shoes[id].price,
                size:size,
                quantity:ivalue,
            }
            dispatch({
                type:'CART-DATA',
                payload:data,
            })
            setIvalue(0);
             
    }

   function getSize1(e){
setSize(e.currentTarget.value);
e.currentTarget.style.color = "black";
e.currentTarget.style.border = "2px solid black";
}
function getSize2(e){
  setSize(e.currentTarget.value);
  e.currentTarget.style.color = "black";
  e.currentTarget.style.border = "2px solid black";
  }
  function getSize3(e){
    setSize(e.currentTarget.value);
    e.currentTarget.style.color = "black";
    e.currentTarget.style.border = "2px solid black";
  }
   
    return(
        <div><br/><br/><br/><br/>
             <Container maxWidth="lg">
            <Grid container spacing={2}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
               <Item >
               <img className="singleimg"src={Shoes[id].img}/>
               </Item>
               </Grid>
               <Grid item lg={6}  md={6} sm={12} xs={12} >
               <Item ><br/>
   
<h2>{Shoes[id].fname}</h2>
<div>RS. {Shoes[id].price}</div><br/>
<Divider /><br/>
<h2>Color:</h2>
<div style={{border:"1px solid black", width:"30px",height:"30px" ,backgroundColor:Shoes[id].color }} ></div>
<br/>
<h2>Size:</h2>
<Stack direction="row" spacing={2}>
    <Button   variant="outlined" value ="41"  onClick={getSize1}><Typography>41</Typography></Button>  
    <Button   variant="outlined" value ="42"  onClick={getSize2}><Typography>42</Typography></Button>  
    <Button   variant="outlined" value ="43"  onClick={getSize3}><Typography>43</Typography></Button>
</Stack>
<br/><br/>
<Stack  direction="row"  alignItems="center" spacing={2}>
<Typography variant="h6">Quantity:</Typography>
<div className="Quantity">
 <RemoveSharpIcon onClick={((v)=>{
  ivalue !==0 ? setIvalue(ivalue=ivalue-1) : console.log('....')})}/> 
<input className="input" type="text"   value={ivalue} onChange={((e)=>{setIvalue(e.currentTarget.value)})} />
 <AddSharpIcon  onClick={((v)=>{setIvalue(ivalue=parseInt(ivalue) + 1)})}/> 
 </div>
 </Stack>
<br/><br/>
 
<Button variant="contained" onClick={addToCart}><Typography>Add to Cart</Typography></Button>
</Item>
</Grid>




</Grid>
</Container>
        </div>
    )
}
export default ProductItems;