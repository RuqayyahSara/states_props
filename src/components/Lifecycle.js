import React from "react";

class Lifecycle extends React.Component{
    constructor(){
        super();
        this.state={
            time: new Date()
        };
    }
    componentDidMount(){
     this.newTime= setInterval(()=>{
         this.setState({
             time: new Date()
         })
     },1000)    

    }

    componentWillUnmount(){
        clearInterval(this.newTime);

    }

    render(){
        return(
            <div>
                <h1>TIME</h1>
               <p>  {this.state.time.toLocaleTimeString()}</p>
            </div>
        )
    }
}
export default Lifecycle;