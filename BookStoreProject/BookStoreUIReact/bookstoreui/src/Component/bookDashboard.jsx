import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import dragon from '../assets/dragon.jpg'

class BookDashboard extends Component {
    render() {
        return (
            <div>
                <div className='title-div'>
                    <Typography variant='h6'>
                        Books
                        </Typography>
                    <div>
                        <select name="Sort By Relevance" className='sort' >
                            <option selected>Sort By Relevance</option>
                            <option>Price:low to high</option>
                            <option>Price:high to low</option>
                            <option>Newest Arrivals</option>
                        </select>
                    </div>
                </div>
                <div className='display-books'>
                {
                    this.props.books.map((data)=>{
                        return(
                            <Card className='note-card' >
                                <div className="image-div">
                                <img src={dragon} style={styles.imgStyle} />
                                </div>
                        
                            <CardContent id='card-detail'>
                                <Typography  variant="h7" component="h4">
                                    {data.bookName}
                                            </Typography>
                                <Typography>
                                    {data.authorName}
                                            </Typography>
                                <Typography>
                                    {data.price}
                                            </Typography>
                            </CardContent>
                        <CardActions className="buttons">
                            <Button 
                            variant='outlined'
                                color='default'
                            > Add to cart</Button>

                            <Button
                                variant='outlined'
                                color='default'
                            > Wishlist</Button>
                        </CardActions>
                    </Card>

                        );
                    })
                }
                    
                </div>
                {/* <div className='pagination-div'>
                    <Pagination  count={10} color="primary" />
                </div> */}
            </div>
        )

    }

}
const styles = {
    imgStyle:{
        height:170,
        width:170,
    }
}
export default BookDashboard;