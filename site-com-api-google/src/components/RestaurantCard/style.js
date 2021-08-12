import React from "react";
import styled from 'styled-components'


export const Restaurant = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin: 5px;
    padding: 16px;
    background-color: ${(props) => props.theme.colors.backgroundAlternative2};
    border-left: 5px transparent;
    border-radius: 10px;
    :hover{
        border: 1px solid ${(props) => props.theme.colors.primary};
        border-left: 5px solid ${(props) => props.theme.colors.primary};
        background-color: ${(props) => props.theme.colors.backgroundAlternative};
    }
`;
