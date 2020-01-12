import React ,{Fragment} from "react";

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password: " "
        }
        // this.submitHandler= this.submitHandler.bind(this);
        // this.changeHandler= this.changetHandler.bind(this);

    }
 changeHandler(e){
     this.setState({
         username: e.target.value 
     })
 }

 submitHandler(e){
     console.log(this.state);
     e.preventDefault();
 }
    render(){
        return(
            <Fragment>
            <form onSubmit={this.submitHandler.bind(this)}>
                <center>
                <label>Enter username</label>
                <input type="text" placeholder="Eg.Sara Rose" value={this.state.username} onChange={this.changeHandler.bind(this)}></input>
                <br/> <label>Enter password</label>
                <input type="text" value={this.state.password} onChange={this.changeHandler.bind(this)}></input>
                <br/><button type="submit">Submit</button>
                </center>
            </form>
            </Fragment>
        )
    }
}

export default Form;