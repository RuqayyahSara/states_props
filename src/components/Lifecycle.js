import React from "react";

class Lifecycle extends React.Component{
    constructor(){
        super();
        this.state={
            status: "null"
        }
        console.log(this.state.status+"hi");

    }
    // setState() is asynchronous
    componentDidMount(){
        this.setState({
     status: "true"
        },()=>{console.log(this.state.status);})
         

    }

    componentWillMount(){
        this.setState({
            status: "false"
               },()=>{console.log(this.state.status);})
    }
    
    render(){
        return(
            <div>
                <h1>MY STATUS</h1>
        <p> Sleeping - {this.state.status}</p>
            </div>
        )
    }
}
export default Lifecycle;