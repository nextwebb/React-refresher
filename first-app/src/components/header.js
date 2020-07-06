import React from 'react';


function Header(props) {
  return ( 
    <React.Fragment>
        <h1>{props.info}</h1>
        <h2>My number is {props.myNumber}</h2>
    </React.Fragment>
   
  )
}
export default Header ; 
