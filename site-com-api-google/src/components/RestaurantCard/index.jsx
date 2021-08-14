import React from "react";
import { Address, Restaurant, RestaurantInfo, Title, RestaurantPhoto } from "./style";
import ReactStars from "react-rating-stars-component";
import restaurante from '../../assets/restaurante-fake.png'

const RestaurantCard = ({restaurant, onClick}) =>{
    return(
        <Restaurant onClick={onClick}>
            <RestaurantInfo>
               <Title> {restaurant.name}</Title>
                <ReactStars
                    count={5}
                    isHalf
                    edit={false}
                    value={restaurant.rating}
                ></ReactStars>
               <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
            </RestaurantInfo>
            <RestaurantPhoto src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} alt='Foto do Restaurante'/>
        </Restaurant>
    )
}

export default RestaurantCard;