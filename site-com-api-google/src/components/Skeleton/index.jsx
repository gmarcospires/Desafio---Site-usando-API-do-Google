import React from "react";
import styled, {keyframes} from 'styled-components';

const KeyFrameLoading = keyframes`
    0%{
        opacity: 0.5;
    }
    100%{
        opacity: 1;
    }
`;

const LoaddingSkeleton = styled.div`
    background-color: ${(props) => props.mode === "1" ? props.theme.colors.backgroundAlternative : props.theme.colors.backgroundAlternative2};
    border-radius: 10px;
    margin: 10px;
    min-width: ${(props)=>props.width};
    height: ${(props)=>props.height};
    animation: ${KeyFrameLoading} 500ms infinite alternate;
`;

export default ({width,height,mode})=><LoaddingSkeleton width={width} height={height} mode={mode}></LoaddingSkeleton>;