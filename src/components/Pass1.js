import React from 'react';

function Pass1(props){
console.log(props);
return(
<p> Hi. My name is {props.name} and I am {props.age} years old</p>
)
}

export default Pass1;