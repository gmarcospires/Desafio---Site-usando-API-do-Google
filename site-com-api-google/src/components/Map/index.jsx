import React, { useState, useEffect } from "react";
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { useDispatch, useSelector } from "react-redux";
import { setRestaurants, setRestaurant } from "../../redux/modules/restaurants";




export const MapContainer = (props) => {

  const [map, setMap] = useState(null);
  const { google, query, placeId } = props;
  const dispatch = useDispatch();
  const { restaurants } = useSelector((state) => state.restaurants);
  const colorScheme = matchMedia('(prefers-color-scheme: dark)');
  

  useEffect(() => {
    if (query) {
      searchByQuery(query);
    }
  },
    [query]);

    useEffect(() => {
      if (placeId) {
        getRestaurantById(placeId);
      }
    },
      [placeId]);


  function getRestaurantById(placeId) {
    const service = new google.maps.places.PlacesService(map);
    dispatch(setRestaurant())
    const request = {
     placeId,
     fields: ['name','opening_hours','formatted_address','formatted_phone_number']
    }

    service.getDetails(request, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurant(place))
      }
    })
  }
  function searchByQuery(query) {
    const service = new google.maps.places.PlacesService(map);
    dispatch(setRestaurants([]))
    const request = {
      location: map.center,
      radius: '200',
      type: ['restaurant'],
      query,
    }

    service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results))
      }
    })
  }




  function searchNearby(map, center) {
    const service = new google.maps.places.PlacesService(map);
    dispatch(setRestaurants([]))
    const request = {
      location: center,
      radius: '20000',
      type: ['restaurant'],
    }

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results))
      }
    })
  }
  const mapStyle = [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#263c3f" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#6b9a76" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#38414e" }],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#212a37" }],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9ca5b3" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#746855" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#1f2835" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#f3d19c" }],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#2f3948" }],
    },
    {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#17263c" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#515c6d" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#17263c" }],
    },
  ]



  function onMapReady(_, map) {
    if (colorScheme.matches) {
      map.setOptions({
        styles: mapStyle
      })
    }
    setMap(map);
    searchNearby(map, map.center);
  }

  return (
    <Map google={google} centerAroundCurrentLocation onReady={onMapReady} onRecenter={onMapReady} zoom={15} {...props}>
      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant.place_id}
          name={restaurant.name}
          position={{
            lat: restaurant.geometry.location.lat(),
            lng: restaurant.geometry.location.lng(),
          }
          } />
      ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer)