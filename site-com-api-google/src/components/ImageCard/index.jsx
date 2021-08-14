import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Skeleton } from "../../components";

const Card = styled.div`
    display: flex;
    margin: 5px;
    justify-content: center;
    align-items: end;
    height: 110px;
    width: 85px;
    border-radius: 10px;
    background-image: url(${(props) => props.photo});
    background-size: cover;
    object-fit: cover;
`;

const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    background: linear-gradient(rgba(0, 0, 0, 0.7),rgba(0,0,0,.50)100%) !important;
    border-radius: 10px;
    color: ${(props) => props.theme.colors.textAlternative};
    font-size: 16px;
    margin: 1px;
    padding: 5px;
    height: min-content;
    width: 100%;
`;

const ImageCard = ({ photo, title }) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    useEffect(() => {
        const imageLoader = new Image();
        imageLoader.src = photo;
        imageLoader.onload = () => setImageLoaded(true);
    }, [photo])
    return (
        <>
            {imageLoaded ? (
                <Card photo={photo}>
                    <Title id='iii' >{title.length > 25 ? title.substring(0,25)+ ' ...' : title }</Title>
                </Card>) : (
                <Skeleton height="110px" width="85px" mode="2"/>
            )}
        </>

    )
}

export default ImageCard;