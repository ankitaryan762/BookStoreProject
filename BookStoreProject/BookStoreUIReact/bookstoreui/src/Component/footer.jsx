import React, { Component } from "react"
import Pagination from '@material-ui/lab/Pagination';
import { withRouter } from 'react-router-dom';
export class Footer extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div>
                <div className="foot">
                <Pagination count={10} color="primary" />
</div>
            </div>
        )
    }
}
export default withRouter(Footer)