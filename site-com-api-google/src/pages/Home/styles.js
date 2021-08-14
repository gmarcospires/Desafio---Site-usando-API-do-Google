import styled from 'styled-components'
import Slider from "react-slick";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width: 360px;
    height: 98.2vh;
    overflow-y: hidden;
`;

export const Search = styled.section`
    font-family: ${(props)=> props.theme.fonts.regular} !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${(props)=> props.theme.colors.backgroundAlternative};
    padding: 16px
`;

export const Logo = styled.img`
    margin-bottom: 15px;
`;

export const Map = styled.div`
    background-color: #A9A9A9;
    width: 100%;
`;

export const CarrouselTitle = styled.h1`
    font-family: ${(props)=> props.theme.fonts.regular};
    color: ${(props)=> props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin: 16px 0;
`;

export const Carrousel = styled(Slider)`
    width: 100%;
    .slick-list{
        width: 100%;
    }
    .slick-slide{
        margin: 0 1px;
    }
    .slick-next{
        right: -17px;
    }
    .slick-prev{
        left: -17px;
    }
`;
export const ContainerRestaurantCard = styled.div`
    background-color: ${(props) => props.theme.colors.background};
    width: 360px;
    height: calc(100% - 360px);
    overflow-y: auto;
`;

export const ModalTitle = styled.p`
    margin: 5px;
    letter-spacing: 0.11px;
    text-transform: none;
    font-family: ${(props)=> props.theme.fonts.regular} !important;
    font-size: 20px;
    line-height: 29px;
    color: ${(props) => props.theme.colors.text};
    font-weight: bold;
`;

export const ModalContent = styled.p`
    margin: 5px;
    letter-spacing: 0.15px;
    text-transform: none;
    font-weight: normal;
    font-family: ${(props)=> props.theme.fonts.regular} !important;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.theme.colors.text};
`;

export const ContainerLoading = styled.div`
    height: 90vh;
    width: 340px;
    z-index: 2;
`;