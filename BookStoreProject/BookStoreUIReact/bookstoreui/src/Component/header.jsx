  
import React, { Component } from 'react'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

class Header extends Component {
        render() {
            return (
                <div>
                    <div className='header'>
                        <div className='book-logo-search-div'>
                            <div className='book-logo-div'>
                                <MenuBookIcon fontSize='medium' />
                            </div>
                            <div className='book-title'>
                                <Typography variant='h6'>
                                    Book Store
                            </Typography>
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
                                    placeholder='search'
                                  />
                            </div>
                        </div>
                        <div className='cart-wishlist-div'>
                            <div className='cart-div'>
                                <ShoppingCartOutlinedIcon fontSize='medium' />
                            </div>
                            <div className='wishlist-div'>
                                <FavoriteBorderOutlinedIcon fontSize='medium' />
                            </div>
                        </div>
                    </div>
                </div>
            )
    
        }
    }
export default Header