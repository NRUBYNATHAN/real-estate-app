

import { useContext } from "react";
import CountryDropDown from "./CountryDropDown.jsx"
import PriceRangeDropDown from "./PriceRangeDropDown.jsx"
import PropertyDropDown from "./PropertyDropDown.jsx"

import "./Search.css";

import { BiSearch } from "react-icons/bi"
import { HouseContext } from "./HouseContext.jsx";

function Search() {
const {handleClick}= useContext(HouseContext)
  return (
    <div className="search">
   <CountryDropDown/>
   <PropertyDropDown/>
   <PriceRangeDropDown/>
   
   <button onClick={()=>handleClick()} className="search_btn">
    < BiSearch />
   </button>
    </div>
  )
}

export default Search
