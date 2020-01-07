import React from 'react';

class Pass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:{
                firstName:"Ruqayyah",
                lastName:"Sara"
            },
            age:19,
            job:"Coder"
        }
    }
    fullName(){
    return (this.state.name.firstName + this.state.name.lastName);
    }
    
    render(){
        return(
<div>
<h1> Adding 2 numbers:{Number(this.props.a) + Number(this.props.b)} </h1>
    <p>{console.log(this.props)}</p>
        <p>{this.fullName()}</p>
        <p>{this.state.age}</p>
        <p>{this.state.job}</p>
        
</div>
        )
    }
}

export default Pass;