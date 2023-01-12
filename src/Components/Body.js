import { cardContent } from "../Config";
import RestaurantCard from "./restaurauntCard";
import { useState } from "react";

function filterData(searchText,restaurantList ){
return restaurantList.filter((item)=> item.data.name.includes(searchText))

}

const BodyComponent = () => {
  const [searchText , setSearchText] = useState();
  const [restaurantList ,setRestaurantList] = useState(cardContent)

    return(
        // Before Restaurant List we will have search bar}
        <>
        <div className="container">
        <div className="search_container ">
        <input type="search" className="search_input" autoFocus placeholder="Search" value={searchText} onChange ={(e)=>setSearchText(e.target.value)}  />
        <button className="search_btn" onClick={()=>{
          const searchedData = filterData(searchText, restaurantList)
          // update restaurantList by calling function setRestaurantList
          setRestaurantList(searchedData);
          
          }}>Search </button>
          
        </div>

        {/*maaped restaurant List */}
       <div className="card_group">
       {restaurantList.map((item, index)=>{
        return(
          <RestaurantCard key={item.data.id} {...item.data} />
        )
       })}
       </div>
       </div>
       </>
    )
   };
 export default BodyComponent;  