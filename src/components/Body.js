import RestaurantTile from "./RestaurantTile";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function searchRestaurants(inputRes, restList) {
    let filtered = restList.filter(x =>
        x.info.name.toLowerCase().includes(inputRes.toLowerCase()));
    return filtered;
}

const Body = () => {

    const [resList, setResList] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    function btnOnClick() {
        let filtered = resList.filter(x => Number(x.data.avgRating) > 4);
        setResList(filtered);
    }

    async function getAllRestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants);
    }

    useEffect(() => { getAllRestaurants() }, [])

    if (resList.length == 0) {
        return <Shimmer />
    }

    return (
        <div>
            <div className='search-comp'>
                <span className="search-lbl">Search: </span>
                <input type="text" className="search-input" value={searchText} onChange={(e) => { setSearchText(e.target.value) }}></input>
                <button className="search-btn" onClick={() => {
                    const data = searchRestaurants(searchText, resList);
                    setFilteredRestaurant(data);
                }}>Search</button>
            </div>

            <div className='res-comp'>
                {
                    filteredRestaurant.map(x => <Link className="link-tile" key={x.info.id} to={"resinfo/" + x.info.id}> <RestaurantTile resData={x.info} /></Link>)
                }
            </div>
        </div>
    )


}




export default Body;