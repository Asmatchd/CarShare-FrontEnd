import React, { useState,useEffect } from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Polyline, Marker, Callout } from 'react-native-maps';
import Polylinee from '@mapbox/polyline';

import homeMarker from '../../assets/home_marker.png';
import destMarker from '../../assets/dest_marker.png';
import visa from '../../assets/visa.png';
import customMapStyle from '../../mapstyle.json';

import Header from '../../components/Header';
import CarButton from '../../components/CarButton';
import Button from '../../components/Button';
import theme from '../../theme';

import * as S from './styles';

const Request: React.FC = ({route}) => {
  const [cords, setCords] = useState();
  const navigation = useNavigation();
  
  //  console.log("Getting params in other screen ", route.params)
 
  // let Source_coords = {
  //    Id: route.params.paramKey1.Id,
  //   text:route.params.paramKey1.text,
  //   longitude:route.params.paramKey1.longitude,
  // latitude:route.params.paramKey1.latitude,

  // }

  // let Destination_coords = {
  //   Id: route.params.paramKey2.Id,
  //   text:route.params.paramKey2.text,
  //   longitude:route.params.paramKey2.longitude,
  // latitude:route.params.paramKey2.latitude,

  // }
  let source_lat = 31.582045;
  let source_lng = 74.329376;
  let Destination_lng =73.084488 ;
  let Destination_lat = 33.738045;
  const getDirection = async () => {
    let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?mode=driving&key=AIzaSyAkbGuYYI3uPgssjli44egmT6mu1d0fKCM&origin=${source_lat},${source_lng}&destination=${Destination_lat},${Destination_lng}`)
    let respJson = await resp.json();
    const response = respJson.routes[0]
    const distanceTime = response.legs[0]
    const distance = distanceTime.distance.text
    console.log(distance)
    const time = distanceTime.duration.text
    console.log("Time",time)

    const routee = respJson.routes[0].overview_polyline.points;
    
    const points = Polylinee.decode(routee);

    const coords = points.map(point => {
      return {
        latitude: point[0],
        longitude: point[1]
      }
    })
    setCords(coords);
    
  }
  useEffect(() => {  
    if (source_lat && source_lng && Destination_lat && Destination_lng)
    {
      getDirection();
       }
  },[] )

  return (
    <S.Container>
      <S.HeaderContainer>
        <Header transparentButton={false} />
      </S.HeaderContainer>
      <S.Map
        region={{
          latitude: source_lat,
          longitude: source_lng,
          latitudeDelta: 0.143,
          longitudeDelta: 0.134,
        }}
        loadingEnabled
        showsCompass={false}
        showsPointsOfInterest={false}
        showsBuildings={false}
        customMapStyle={customMapStyle}
      >
        <Polyline
          coordinates={ cords } 
          strokeColor={theme.color.secondary} // fallback for when `strokeColors` is not supported by the map-provider
          strokeWidth={4}
        />
        <Marker
          image={homeMarker}
          coordinate={{ latitude: source_lat , longitude: source_lng }}
        >
         
        </Marker>
        <Marker
          image={destMarker}
          coordinate={{ latitude: Destination_lat, longitude: Destination_lng }}
        >
         
        </Marker>
      </S.Map>

      <S.Bottom>
      
        <Button onPress={() => navigation.navigate('CurrentLocation')}>
           Home
        </Button>
      </S.Bottom>
    </S.Container>
  );
};

export default Request;
