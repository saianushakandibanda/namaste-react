import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_URL, RES_TILE_URL } from "../utils/imgUrls";

const RestaurantInfo = () => {

    const [resInfo, setResInfo] = useState([]);
    const { id } = useParams();


    async function getRestaurantInfo() {
        let resInfo = await fetch(API_URL + id);
        let json = await resInfo.json();
        setResInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card.itemCards);
    }

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    return (
        <div className="menu-container">
            {resInfo.map(x =>
                <div key="x.card.info.id"  className="list-items">
                    <div  className="menu-item">
                        <div>  {x.card.info.name} </div>
                        <div> Rs. {x.card.info.defaultPrice / 100 || x.card.info.price / 100} </div>
                        <div> Rating: {x.card.info.ratings.aggregatedRating.rating} </div>
                    </div>
                    <div className="img-item">
                        <img className="menu-img" src={RES_TILE_URL + x.card.info.imageId} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default RestaurantInfo;