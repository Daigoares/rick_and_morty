// import styles from "./NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar"
import { NavLink } from "react-router-dom";

export default function NavBar({onSearch}) {
    return (
       <div>
         <NavLink to ="/about" >
            <button>About</button>
         </NavLink>
         <NavLink to = "/home">
            <button>Home</button>
         </NavLink>
         <SearchBar onSearch={onSearch}/>
       </div>
    );
 }
 