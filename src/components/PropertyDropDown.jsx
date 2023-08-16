

import { useContext, useEffect,useState } from "react";

import {RiHome5Line,RiArrowDownSLine,RiArrowUpSLine} from "react-icons/ri";

import { Menu } from "@headlessui/react";

import { HouseContext } from "./HouseContext.jsx"

import "./Dropdown.css"

function PropertyDropDown() {
  const {property , setProperty , properties }=useContext(HouseContext);


  const [isOpen,setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown">
        <Menu.Button onClick={()=>setIsOpen(!isOpen)} className="dropdown_btn">
          <RiHome5Line className="dropdown_icon_primary"/>
          <div>
            <div className="dropdown_country">{property}</div>
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
        {properties.map((property,index)=>{
          return (
            <Menu.Item className="menu_class" onClick={()=>setProperty(property)} as="li" key={index}>
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  )
}

export default PropertyDropDown
