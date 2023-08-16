
import { useContext, useEffect,useState } from "react";

import {RiMapPinLine,RiArrowDownSLine,RiArrowUpSLine} from "react-icons/ri";

import { Menu } from "@headlessui/react";

import { HouseContext } from "./HouseContext.jsx"

import "./Dropdown.css"

function CountryDropDown() {
  const {country , setCountry , countries }=useContext(HouseContext);


  const [isOpen,setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown">
        <Menu.Button onClick={()=>setIsOpen(!isOpen)} className="dropdown_btn">
          <RiMapPinLine className="dropdown_icon_primary"/>
          <div>
            <div className="dropdown_country">{country}</div>
            <div className="dropdown_text">Select Your Place</div>
            </div>
            {
              isOpen ? (
                <RiArrowUpSLine className="dropdown_icon_secondary"/>

              ):(
                <RiArrowDownSLine className="dropdown_icon_secondary"/>
              )
            }
        
        </Menu.Button>
      <Menu.Items className="dropdown_menu">
        {countries.map((country,index)=>{
          return (
            <Menu.Item className="menu_class" onClick={()=>setCountry(country)} as="li" key={index}>
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  )
}

export default CountryDropDown
