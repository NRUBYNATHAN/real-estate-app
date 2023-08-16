
import {BiBed,BiBath,BiArea} from "react-icons/bi";
import "./House.css";

function House({house}) {
  const {image,type,country,address,bedrooms,bathrooms,surface,price}=house;
  return (
    <div className="house">
     <img className="house_img" src={image} alt=""/>
     <div className="house_container">
      <div className="house_type">{type}</div>
      <div className="house_country">{country}</div>
     </div>
     <div className="house_address">{address}</div>

     <div className="house_msg">
      <div className="house_icon">
        <div className="house_icons"><BiBed/></div>
        <div>{bedrooms}</div>
      </div>

      <div className="house_icon">
        <div className="house_icons"><BiBath/></div>
        <div>{bathrooms}</div>
      </div>

      <div className="house_icon">
        <div className="house_icons"><BiArea/></div>
        <div>{surface}</div>
      </div>
     </div>

     <div className="house_price"><span className="sp">PRICE :</span> {price}</div>
    </div>
  )
}

export default House
