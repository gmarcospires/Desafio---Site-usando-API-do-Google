import React from "react";
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    padding: 5px;
    justify-content: center;
    height: 110px;
    width: 90px;
    border-radius: 10px;
    background-image: url(${(props)=>props.photo});
    background-size: cover;
`;

const Title = styled.span`
    font-family: ${(props)=> props.theme.fonts.regular};
    color: ${(props)=> props.theme.colors.textAlternative};
    font-size: 16px;
    margin: 10px;
`;

const ImageCard = ({photo,title}) =>{
    return(
        <Card photo={photo}><Title>{title}</Title></Card>
    )
}

export default ImageCard;