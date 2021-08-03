import React, { useEffect, useState } from 'react';
import { Alert, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

import MapButton from '../../components/MapButton';
import profile from '../../assets/profile.png';
import iconHome from '../../assets/home.png';
import iconHistory from '../../assets/history.png';
import iconCenter from '../../assets/map_center.png';
import luxury from '../../assets/luxury.png';
import marker from '../../assets/marker.png';
import customMapStyle from '../../mapstyle.json';
import logout from '../../assets/logout.png';
import AutoCompletePlaces from '../../components/AutoCompletePlaces/AutoCompleteSearchBar';

import * as S from './styles';
//import Button from 'components/Button';

interface ILatLng {
  latitude: number;
  longitude: number;
}

const Map: React.FC = ({ route }) => {
  let driver;
  const [latLng, setLatLng] = useState<ILatLng>({
    latitude: -19.916483,
    longitude: -43.935129,
  });
  //console.log("currentLatLng", latLng)
  const currentLatitude = latLng.latitude;
  const currentLongitude = latLng.longitude;
  //console.log("current long:",currentLongitude,"current latitude:",currentLatitude)
  const navigation = useNavigation();
  let mapRef: MapView | null = null;

  useEffect(() => {
    // console.log(route.params.driver, 'driver');
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setLatLng({ latitude, longitude });
      },
      () => {
        Alert.alert('Error', 'Failed to get your current location');
      },
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000,
      }
    );
  }, []);

  function centerMap() {
    mapRef?.animateToRegion(
      {
        ...latLng,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134,
      },
      1000
    );
  }

  function showDriverProfile() {
    navigation.navigate('DriverProfile', { driver: route.params.driver });
  }
  function showMyRides() {
    navigation.navigate('DriverRideHistory', { driver: route.params.driver });
  }
  function showMySecduleRides() {
    navigation.navigate('DriverSecduleRides', { driver: route.params.driver });
  }
  function Llogout() {
    navigation.navigate('Login', { rider: route.params.rider });
  }

  return (
    <S.Container>
      <S.Map
        ref={(map) => {
          mapRef = map;
        }}
        region={{
          ...latLng,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        }}
        loadingEnabled
        showsCompass={false}
        showsPointsOfInterest={false}
        showsBuildings={false}
        customMapStyle={customMapStyle}
      >
        <Marker coordinate={latLng} image={marker} />
      </S.Map>

      <S.OptionsContainer>
        <S.LeftOptions>
          <MapButton icon={profile} onPress={showDriverProfile} />
          <MapButton icon={luxury} onPress={showMySecduleRides} />
          <MapButton icon={iconHistory} onPress={showMyRides} />
          
 <MapButton icon={logout} onPress={Llogout} />
        </S.LeftOptions>
        <MapButton icon={iconCenter} noMargin onPress={centerMap} />
      </S.OptionsContainer>
      <S.WhereToContainer>
        <S.WhereToButton
          onPress={() =>
            navigation.navigate('DriverSelectDestination', {
              driver: route.params.driver,
            })
          }
        >
          {/* <S.From>From: Wilson Terrace 219 W</S.From> */}
          <S.ToContainer>
            <S.GreenDot />
            <S.To>Where to?</S.To>
            {/* <AutoCompletePlaces/> */}
          </S.ToContainer>
        </S.WhereToButton>
      </S.WhereToContainer>
    </S.Container>
  );
};

export default Map;
