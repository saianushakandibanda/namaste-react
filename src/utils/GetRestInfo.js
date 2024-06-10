import { useState, useEffect } from "react";
import { API_URL } from "../utils/imgUrls";

const GetResInfo = (id) => {
    const [resInfo, setResInfo] = useState([]);

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        let res = await fetch(API_URL + id);
        let json = await res.json();
        setResInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card.itemCards);
    }

    return resInfo;
}

export default GetResInfo;