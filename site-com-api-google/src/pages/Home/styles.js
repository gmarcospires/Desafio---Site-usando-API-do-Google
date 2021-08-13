import styled from 'styled-components'
import Slider from "react-slick";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    // overflow-y: auto;
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
        margin: 0 3px;
    }
    .slick-next{
        right: -15px;
    }
    .slick-prev{
        left: -17px;
    }
`;