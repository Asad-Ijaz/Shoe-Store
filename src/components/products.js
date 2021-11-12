import React from 'react';
import Shoes from '../shoes.json';
import {Typography,Container,Grid,Paper,TextField} from '@mui/material';
import {Link} from 'react-router-dom';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function Product(){
    const[search,setSearch] = React.useState('')
    return(
        <Typography>
            <br/><br/> 
             <Container maxWidth="lg">
            <Grid container spacing={2}>
{
    Object.keys(Shoes).map((item)=>{
        return(
           
           <Grid item lg={3} md={3} sm={12} xs={12} >
               <Item >
                   <Link to={`/total/${item}`} key={item}>
            <img className="img" src={Shoes[item].img}  alt="picture not found"/>
            <Typography variant="h6"> {Shoes[item].fname} </Typography>
            <Typography variant="h6">Price = {Shoes[item].price} Pkr</Typography>
</Link>
            </Item>
            
            </Grid>
            
        )
    })
}
</Grid>

            </Container>
            <br/><br/>
        </Typography>
    )
}
export default Product;