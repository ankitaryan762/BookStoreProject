import React,{ Component } from "react";
import bookDashboard from '../Component/bookDashboard'
import { withRouter } from "react-router-dom";
class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            books:[
                {
                    bookName:"abc",
                    bookId:123,
                    bookAuthor:"Anjali"
                },
                {
                    bookName:"shero",
                    bookId:123,
                    bookAuthor:"shero"

                },
            ]
        }
    }
    render(){
        return(
<bookDashboard books={this.props.book}/>
        )
    }
} 
export default withRouter(Dashboard)