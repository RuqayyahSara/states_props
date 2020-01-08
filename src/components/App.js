import React from 'react';
import Pass from "./Pass";

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
        <Pass Coder={this.state.job} name="Ruqayyah" age="19" a="2" b="3"/>
    </div>
  )
}
}
export default App;
