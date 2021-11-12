import React from 'react';
import '../App.css';
import {useHistory} from "react-router-dom";  
import {Link} from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled,alpha  } from '@mui/material/styles';
import { Container,Paper,Button,Typography,TextField,Stack,Divider,Drawer,Toolbar,Box,AppBar,List,ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {shoeStoreContext} from '../storeConfig/store';
import MoreIcon from '@mui/icons-material/MoreVert';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
 
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


export default function Navigation() {
  let history = useHistory();
  const[search,setSearch] = React.useState('');
  const [state1, setState] = React.useState({right: false, });
  const [state,dispatch] = React.useContext(shoeStoreContext)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state1, [anchor]: open });
    
  };

  const list = (anchor) => (
    <div>
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 320 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
       <Typography className="cartHeadings" variant="h4">Cart </Typography><br/>
       <Divider/><br/>
      <List className="lists" >
        {state.cartArray.map((item, index) => (
          <ListItem style={{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"}}className="list" key={item} direction="row" spacing={5}   >
            {console.log('item is ' , item)}
            <img className="cartImg" src={item.img} />
            <Stack direction="column" spacing={1} alignItems="center">
            <Typography>{item.name}</Typography>
            <Stack direction="row" spacing={2} >{item.size} <Typography style={{marginLeft:"8px", border:"1px solid black", width:"20px",height:"20px" ,backgroundColor:item.color }}></Typography> </Stack>
            <Typography>Rs  {item.price}</Typography>
            <Typography>Quantity: {item.quantity}</Typography>
            </Stack>
            <DeleteIcon className="dltItem" onClick={()=>{
              dispatch({
                type:'DELETE-ITEM',
                payload: index,
                priceItem:item.price,
              })
            }}/>
            
          </ListItem>
            
        ))}
        
      </List>
       <Typography className="cartHeadingtotal" style={{marginBottom:"60px"}} variant="h5"> Total:Rs  {state.total}</Typography>
    </Box>
   
    </div>
  );
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
      <Link to= "/" className="linkdrop"  >
      <Typography variant="h6" component="div"  sx={{ flexGrow: 1 }} >Home</Typography>
    </Link>
    </MenuItem>
    <MenuItem>
    <Link to= "/about" className="linkdrop"  variant="h6"  sx={{ flexGrow: 1 }} ><Typography variant="h6" component="div"  sx={{ flexGrow: 1 }} >About</Typography>
     </Link>
     </MenuItem>
     <MenuItem> 
     <Link to= "/product" className="linkdrop"  variant="h6" sx={{ flexGrow: 1 }}>
     <Typography variant="h6" component="div"  sx={{ flexGrow: 1 }} >Products</Typography>
    </Link>
      </MenuItem>
       <MenuItem> 
      <TextField    id="standard-basic" label="Search..." variant="standard" onChange={(e)=>{
      return( 
      setSearch(e.currentTarget.value) !==""  ?  history.push(`/search/${e.currentTarget.value}`) :console.log('hello hi')
          )
    
              
            }}/>
            </MenuItem>
    </Menu>
  );

  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Container maxWidth="lg"> 
        <Toolbar>
        
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'none', md: 'flex',lg:'flex' } }}
          >
             <Link to= "/" className="Link" >
      <Typography variant="h6" component="div"  sx={{ flexGrow: 1 }} >Home</Typography>
    </Link>
    <Link to= "/about" className="Link" variant="h6"  sx={{ flexGrow: 1 }} >   <Typography variant="h6" component="div"  sx={{ flexGrow: 1 }} >About</Typography>
     </Link>
     <Link to= "/product" className="Link" variant="h6" sx={{ flexGrow: 1 }}>
     <Typography variant="h6" component="div"  sx={{ flexGrow: 1 }} >Products</Typography>
    </Link>
          </Typography>
           
          <Box sx={{ flexGrow: 1 }} />
          <Box className="search" sx={{ display: { xs: 'none', md: 'flex' } }}>
          <TextField  id="standard-basic" InputLabelProps={{style : {color : 'white'} }} label="Search..." variant="standard" onChange={(e)=>{
      return( 
      setSearch(e.currentTarget.value) !==""  ?  history.push(`/search/${e.currentTarget.value}`) :console.log('hello hi')
          )
    
              
            }}/>
             </Box>
             <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
              
    {[ 'right'].map((anchor) => (
        <React.Fragment key={anchor}>
         { console.log('anchor is',anchor)}
          <Button style={{color:"white"}} onClick={toggleDrawer(anchor, true)}>
          <Badge color="error" badgeContent={state.cartCounter}>
          <ShoppingCartIcon color="white" />
          </Badge> 
          </Button>
          <Drawer
            anchor={anchor}
             open={state1[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
             
            {list()}
               
              
          </Drawer>
         
        </React.Fragment>
      ))} 
             
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
          
        </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    
  );
}




