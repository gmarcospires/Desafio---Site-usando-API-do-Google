import React, { useState } from "react";
import { Container, Search, Logo, Wrapper, CarrouselTitle, Carrousel, ContainerRestaurantCard, ModalTitle, ModalContent, ContainerLoading } from './styles'
import { TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useSelector } from "react-redux";

// import Slider from "react-slick";
import { Card, RestaurantCard, Modal, Map, Loader, Skeleton } from "../../components";

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png'



const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [modalOpened, setModalOpened] = useState(false);
    const [query, setQuery] = useState(null);
    const [placeId, setPlaceId] = useState(null);

    const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            setQuery(inputValue);
        }
    }
    function handleOpenModal(placeId) {
        setPlaceId(placeId);
        setModalOpened(true);
    }
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
                        onKeyPress={handleKeyPress}
                    />
                    {restaurants.length > 0 ?
                        (
                            <>
                                <CarrouselTitle>Na sua área</CarrouselTitle>
                                <Carrousel {...settings}>
                                    {restaurants.map(
                                        (restaurant) =>
                                            <Card photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} title={restaurant.name} key={restaurant.place_id}></Card>
                                    )}
                                </Carrousel>
                            </>
                        ) : (
                            <ContainerLoading>
                                <Loader></Loader>
                            </ContainerLoading>
                            
                        )}

                </Search>
                <ContainerRestaurantCard>
                    {restaurants.map(
                        (restaurant) =>
                            <RestaurantCard
                                onClick={() => handleOpenModal(restaurant.place_id)}
                                restaurant={restaurant}
                                key={restaurant.place_id}
                            ></RestaurantCard>
                    )}
                </ContainerRestaurantCard>
            </Container>
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
                {restaurantSelected ? (
                    <>
                        <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                        <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
                        <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
                        <ModalContent>{restaurantSelected?.oppening_hours?.open_now ? 'Aberto agora :)' : 'Fechado no momento :('}</ModalContent>
                    </>
                ) : (
                    <>
                        <Skeleton height="10px" width="10px" mode="1"></Skeleton>
                        <Skeleton height="10px" width="10px" mode="1"></Skeleton>
                        <Skeleton height="10px" width="10px" mode="1"></Skeleton>
                        <Skeleton height="10px" width="10px" mode="1"></Skeleton>
                    </>
                )
                }

            </Modal>
            <Map query={query} placeId={placeId} />
        </Wrapper>
    );

};

export default Home;