import React, { useState } from "react";
import { Address, Restaurant, RestaurantInfo, Title, RestaurantPhoto } from "./style";
import ReactStars from "react-rating-stars-component";
import restaurante from '../../assets/restaurante-fake.png'
import { Skeleton } from "../../components";
const RestaurantCard = ({ restaurant, onClick }) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    return (
        <Restaurant onClick={onClick}>
            {!imageLoaded &&
                <Skeleton height="100%" width="100%" mode="1"></Skeleton>
            }
            <RestaurantInfo imageLoaded={imageLoaded}>
                <Title> {restaurant.name}</Title>
                <ReactStars
                    count={5}
                    isHalf
                    edit={false}
                    value={restaurant.rating}
                ></ReactStars>
                <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
            </RestaurantInfo>
            <RestaurantPhoto imageLoaded={imageLoaded} onLoad={() => setImageLoaded(true)} src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} />
            {!imageLoaded && <Skeleton height="100px" width="100px" mode="2"></Skeleton>}
        </Restaurant>
    )
};

export default RestaurantCard;