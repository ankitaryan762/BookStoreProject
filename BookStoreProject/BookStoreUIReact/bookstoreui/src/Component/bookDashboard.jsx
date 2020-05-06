import React,{ Component } from "react";
import { Typography, CardActions,Button,Card } from '@material-ui/core';
class BookDashboard extends Component {
    constructor(props) {
        super();
    }
    render() {
        this.props.books.map((data)=>{
        return(
            <div>
                    <Card>
                        <Card id="book-detail">
                            <Typography variant="h1" component="h2">
                                {data.bookName}
                            </Typography>
                            <Typography variant="h1" component="h2">
                                {data.bookId}
                            </Typography>
                            <Typography variant="h1" component="h2">
                                {data.authorName}
                            </Typography>
                        </Card>
                        <CardActions>
                        <Button variant="contained">Add to cart</Button>
                        <Button variant="contained">Wishlist</Button>
                        </CardActions>
                    </Card>
                </div>


            )
        })
    }
}