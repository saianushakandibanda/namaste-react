import {RES_TILE_URL} from '../utils/imgUrls'

const RestaurantTile = (props) => {
    const { resData } = props;
    return (
        <div className="res-tile">
            <img className='res-img' src={RES_TILE_URL}/>
            <h4>{resData.name}</h4>
            <h4>{resData.cuisines.join(',')}</h4>
            <h4>Rating:{"  "+resData.avgRating}</h4>
            <h4>{resData.lastMileTravelString} minutes</h4>
        </div>
    )
}

export default RestaurantTile;