import { useContext } from "react";

import {HouseContext} from "./HouseContext.jsx";

import House from "./House.jsx"



import "./HouseList.css";

function HouseList() {
  const {houses,loading}=useContext(HouseContext);

// if(loading){
//   return(
//     <div className="text">Loading .....</div>
//   );
// }

if(houses.length < 1){
  return <div className="text">sorry.nothing found</div>
}


  return (
    <section className="houselist">
      <div className="houselist_contain">
        <div className="houselist_map">
            {
              houses.map((house,index)=>{
                return(
                  <House house={house} key={index}/>
                );
              })
            }
        </div>
      </div>
    </section>
  )
}

export default HouseList
