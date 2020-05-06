import React, { Component } from 'react'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
class Header extends Component {

    render() {
        return (

            <div className='header' >   
                <div className='book-logo-search-div'>
                    <div className='book-logo-div'>
                    <MenuBookIcon/>
                    </div>
                    <div className='search-div'>
                    <TextField
                     className='search-textfield'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }} 
                    id="outlined-basic" 
                    label="Outlined" 
                    variant="outlined" />
                    </div>
                </div> 
                <div className='cart-wishlist-div'>
                <div className='cart-div'>
                <ShoppingCartIcon/> 
                </div>
                <div className='wishlist-div'>
                <FavoriteIcon/>
                </div>
                </div>
            </div>
        )
    }
}
export default Header;