import { RES_TILE_URL } from '../utils/imgUrls'

const RestaurantTile = (props) => {
    const { resData } = props;
    return (
        <div className="p-4 border rounded-lg shadow-md bg-green-50">
            <img className="w-full object-cover mb-4 rounded-t-lg" src={RES_TILE_URL + resData.cloudinaryImageId} alt={resData.name} />
            <div className="text-gray-800">
                <h4 className="text-lg font-semibold mb-2">{resData.name}</h4>
                {/* <p className="text-sm mb-1">{resData.cuisines.join(', ')}</p> */}
                <p className="text-sm mb-1">Rating: {resData.avgRating}</p>
                <p className="text-sm mb-1">{resData.lastMileTravelString} minutes</p>
            </div>
        </div>
    )
}

export default RestaurantTile;