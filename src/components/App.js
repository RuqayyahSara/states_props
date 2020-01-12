import React from 'react';
// import Pass from "./Pass";
// import Pass1 from "./Pass1";
// import Lifecycle from "./Lifecycle";
import Form from "./Form";


class App extends React.Component{
constructor(props){
  super(props);
  this.state={
    job:"Cook"
  }
}
render(){
  return (
    <div >
        <Form/>
        {/* <Pass Coder={this.state.job} name="Ruqayyah" age="19" a="2" b="3"/> */}
        {/* <Pass1 name="Cody" age="29" /> */}
        {/* <Lifecycle/> */}
    </div>
  )
}
}
export default App;
