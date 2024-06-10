import RestaurantTile from "./RestaurantTile";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useStatusCheck from "../utils/useStatusCheck";


function searchRestaurants(inputRes, restList) {
    let filtered = restList.filter(x =>
        x.info.name.toLowerCase().includes(inputRes.toLowerCase()));
    return filtered;
}

const Body = () => {

    const [resList, setResList] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const status = useStatusCheck();

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

    if(!status){
        return (
            <h1>No Internet Connection</h1>
        )
    }

    return (
        <div className="bg-green-50">
            <div className='flex justify-center h-30'>
                <span className="my-6">Search: </span>
                <input type="text" className="border border-gray-700 rounded-md mx-2 w-56 px-2 my-4" value={searchText} onChange={(e) => { setSearchText(e.target.value) }}></input>
                <button className="bg-amber-100 hover:bg-amber-300 text-black py-2 px-4 rounded my-4" onClick={() => {
                    const data = searchRestaurants(searchText, resList);
                    setFilteredRestaurant(data);
                }}>Search</button>
            </div>

            <div className='flex flex-wrap'>
                {
                    filteredRestaurant.map(x => <Link className="m-2" key={x.info.id} to={"resinfo/" + x.info.id}> <RestaurantTile resData={x.info} /></Link>)
                }
            </div>
        </div>
    )


}




export default Body;