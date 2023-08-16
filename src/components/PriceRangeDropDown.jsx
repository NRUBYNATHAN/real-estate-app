
import { useContext, useEffect,useState } from "react";

import {RiWallet3Line,RiArrowDownSLine,RiArrowUpSLine} from "react-icons/ri";

import { Menu } from "@headlessui/react";

import { HouseContext } from "./HouseContext.jsx"

import "./Dropdown.css"

function PriceRangeDropDown() {
  const {price , setPrice }=useContext(HouseContext);

 

  const [isOpen,setIsOpen] = useState(false);

  const prices = [
    {
      value :"Price range (any)"
    },
    {
      value :"100000 - 130000"
    },
    {
      value :"130000 - 160000"
    },
    {
      value :"160000 - 190000"
    },
    {
      value :"190000 - 220000"
    },
    {
      value :"10000 - 30000"
    },
    {
      value :"30000 - 40000"
    },
  ]

  return (
    <Menu as="div" className="dropdown">
        <Menu.Button onClick={()=>setIsOpen(!isOpen)} className="dropdown_btn">
          <RiWallet3Line className="dropdown_icon_primary"/>
          <div>
            <div className="dropdown_country">{price}</div>
            <div className="dropdown_text">Choose Price Range</div>
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
        {prices.map((price,index)=>{
          return (
            <Menu.Item className="menu_class" onClick={()=>setPrice(price.value)} as="li" key={index}>
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  )
}

export default PriceRangeDropDown
