import React from "react";
import { Address, Restaurant, RestaurantInfo, Title, RestaurantPhoto } from "./style";
import ReactStars from "react-rating-stars-component";
import restaurante from '../../assets/restaurante-fake.png'

const RestaurantCard = () =>{
    return(
        <Restaurant>
            <RestaurantInfo>
               <Title> Pé de Fava</Title>
                <ReactStars
                    count={5}
                    isHalf
                    edit={false}
                    value={4}
                ></ReactStars>
               <Address>Rua dos Bobos, 0 - Guarulhos</Address>
            </RestaurantInfo>
            <RestaurantPhoto src={restaurante} alt='Foto do Restaurante'/>
        </Restaurant>
    )
}

export default RestaurantCard;