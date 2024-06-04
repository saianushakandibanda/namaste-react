import RestaurantTile from "./RestaurantTile";

import restauranttList from "../utils/mockData";
import { useState } from "react";

function searchRestaurants(inputRes, restList) {
    console.log(restList,"dfdsfdsfd")
    let filtered = restList.filter(x => 
        x.data.name.toLowerCase() == inputRes.toLowerCase()
    );
   
    return filtered;

}
const Body = () => {

    function btnOnClick() {
        let filtered = resList.filter(x => Number(x.data.avgRating) > 4);
        setResList(filtered);
    }


    const [resList, setResList] = useState(restauranttList);
    const [searchText, setSearchText] = useState('');
    return (
        <div>
            <div className='search-comp'>
                <span className="search-lbl">Search: </span>
                <input type="text" className="search-input" value={searchText} onChange={(e) => { setSearchText(e.target.value) }}></input>
                <button className="search-btn" onClick={() => {
                    const data = searchRestaurants(searchText, resList);
                    setResList(data);
                }}>Search</button>
            </div>
           
            <div className='res-comp'>
                {
                    resList.map(x => <RestaurantTile key={x.data.id} resData={x.data} />)
                }
            </div>
        </div>
    )


}




export default Body;