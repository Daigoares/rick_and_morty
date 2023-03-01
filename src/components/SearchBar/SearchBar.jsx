import { useState } from "react";

export default function SearchBar({onSearch}) {

   const [character , setCharacter ]= useState("")
   const handleChange = e =>{
      const{value} = e.target;
      // console.log("Value", value)
      setCharacter(value);
   }


   return (
      <div>
        <input 
        type='search' 
        name='search'
        id= 'search'
        onChange={handleChange}
        />
        <button onClick={()=>onSearch(character)}>Agregar</button>
      </div>
   );
}
