import React from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Shoes from '../shoes.json';
import {Typography,Container,Grid,Paper  } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function Search(){
    let { id1 } = useParams();
    
    return(
        <div>
            <br/> <br/> <br/> <br/>   
 
<Container maxWidth="lg">
<Grid container spacing={2}>
{
     Object.keys(Shoes).filter(post => {
        if (id1 === '') {
          return  post;
        } else if (Shoes[post].color.toLowerCase().includes(id1.toLowerCase())){
          return   post ;
        }
          else if ( Shoes[post].price.toLowerCase().includes(id1.toLowerCase())) {
            return (post);
          }
          else if ( Shoes[post].fname.toLowerCase().includes( id1.toLowerCase())) {
            return (post);
          }
      }).map((item)=>{
        return(
          
           <Grid item lg={3} >
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
        </div>
    )
}
export default Search;