import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RES_TILE_URL } from "../utils/imgUrls";
import GetResInfo from "../utils/GetRestInfo";

const RestaurantInfo = () => {
    const { id } = useParams();
    let resInfo = GetResInfo(id);
    
    return (
        <div className="h-full flex items-center justify-center">
            <div className="divide-y divide-gray-200 w-full max-w-md">
                {resInfo.map(x =>
                    <div key={x.card.info.id} className="py-4 flex items-center">
                        <img className="w-24 h-24 object-cover object-center mr-4" src={RES_TILE_URL + x.card.info.imageId} alt={x.card.info.name} />
                        <div>
                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{x.card.info.name}</h2>
                            <p className="leading-relaxed mb-1">Price: Rs. {x.card.info.defaultPrice / 100 || x.card.info.price / 100}</p>
                            <p className="leading-relaxed mb-1">Rating: {x.card.info.ratings.aggregatedRating.rating}</p>
                            <p className="leading-relaxed mb-1">Last Mile Travel: {x.card.info.lastMileTravelString} minutes</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default RestaurantInfo;
