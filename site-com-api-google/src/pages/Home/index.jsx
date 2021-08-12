import React, { useState } from "react";
import { Container, Search, Logo, Wrapper, Map, CarrouselTitle, Carrousel } from './styles'
import { TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
// import Slider from "react-slick";
import {Card, RestaurantCard} from "../../components";

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png'


const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true
    };

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} 
                        alt="Logo do Restaurante"
                    />
                    <TextField
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        label="Pesquisar"
                        id="outlined-size-small"
                        variant="outlined"
                        size="small"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <CarrouselTitle>Na sua área</CarrouselTitle>
                    <Carrousel {...settings}>
                        <Card photo={restaurante} title="Nome do Restaurante"></Card>
                        <Card photo={restaurante} title="Nome do Restaurante"></Card>
                        <Card photo={restaurante} title="Nome do Restaurante"></Card>
                        <Card photo={restaurante} title="Nome do Restaurante"></Card>
                        <Card photo={restaurante} title="Nome do Restaurante"></Card>
                        <Card photo={restaurante} title="Nome do Restaurante"></Card>
                        <Card photo={restaurante} title="Nome do Restaurante"></Card>
                        <Card photo={restaurante} title="Nome do Restaurante"></Card>
                    </Carrousel>
                </Search>
                <RestaurantCard></RestaurantCard>
            </Container>
            <Map>

            </Map>
        </Wrapper>
    );

};

export default Home;