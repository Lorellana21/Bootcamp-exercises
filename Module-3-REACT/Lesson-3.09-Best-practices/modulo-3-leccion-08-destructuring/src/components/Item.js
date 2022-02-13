import React from 'react';

const Item=(props)=>{

    const {id, name, email} = props; 

 return (
   <div>
       <p>{id}</p>
       <p>{name}</p>
       <p>{email}</p>

   </div>
 ) 
}

export default Item;
