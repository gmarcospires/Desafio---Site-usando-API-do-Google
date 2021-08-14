import React from "react";
import Lottie from "react-lottie";
import animationData from '../../assets/restaurants-loading2.json'

export default () =>{
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
      };

      return <Lottie options={defaultOptions}/>
}