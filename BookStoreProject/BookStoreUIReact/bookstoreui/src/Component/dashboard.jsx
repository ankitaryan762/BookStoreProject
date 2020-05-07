import React,{Component} from 'react';
import BookDashboard from './bookDashboard';
import Header from './header'

class Dashboard extends Component{
    state={
        books:[
        {
            bookid : 1,
            bookName : "Shero",
            authorName : "shero",
            price : 500,
        },
        {
            bookid : 2,
            bookName : "Jimmy",
            authorName : "jimmy",
            price : 400,

        },{
            bookid : 3,
            bookName : "Sumit",
            authorName : "Sumit",
            price : 550,

        },{
            bookid : 4,
            bookName : "Somya",
            authorName : "Somya",
            price : 400,

        },{
            bookid : 5,
            bookName : "Ankit",
            authorName : "Ankit",
            price : 500,

        },{
            bookid : 6,
            bookName : "Rajat",
            authorName : "Rajat",
            price : 400,

        },{
            bookid : 7,
            bookName : "Anjali",
            authorName : "Anjali",
            price : 450,

        }]
    }
    render(){
        return(
            <div>
                <Header/>
            <BookDashboard books={this.state.books}/>
            </div>
        )

    }
}
export default Dashboard;