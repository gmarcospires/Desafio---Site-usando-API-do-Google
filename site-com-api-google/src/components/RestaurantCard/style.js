import styled from 'styled-components'


export const Restaurant = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin: 5px;
    padding: 16px;
    background-color: ${(props) => props.theme.colors.backgroundAlternative};
    border: 1px solid transparent;
    border-left: 5px solid transparent;
    border-radius: 10px;
    transition: all 0.5s;
    :hover{
        border: 1px solid ${(props) => props.theme.colors.primary};
        border-left: 5px solid ${(props) => props.theme.colors.primary};
        background-color: ${(props) => props.theme.colors.backgroundAlternative2};
    }
`;

export const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column; 
    padding: 10px; 
`;

export const Title = styled.span`
    font-family: ${(props)=> props.theme.fonts.regular} !important;
    color: ${(props)=> props.theme.colors.text};
    font-size: 20px;
    font-weight: bold;
    line-height: 29px;
    margin-botton: 10px;
`;

export const Address = styled.span`
    font-family: ${(props)=> props.theme.fonts.regular};
    color: ${(props)=> props.theme.colors.text};
    font-size: 16px;
    line-height: 19px;
    margin-botton: 10px;
    margin-top: 10px;
`;

export const RestaurantPhoto = styled.img`
    padding: 2px;
    border-radius: 10px;
    width: 100px;
    object-fit: cover;
    height: 100px;
    margin: auto;
`;