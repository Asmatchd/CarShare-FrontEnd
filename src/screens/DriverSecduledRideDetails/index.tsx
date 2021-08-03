import React, { useEffect, useState } from 'react';

import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as S from './style';
import Header from '../../components/Header';
import { Card } from 'react-native-shadow-cards';
import Button from '../../components/Button';
import Axios from 'axios';
import { URL } from '../Config/Constant';
const Details = ({ route }) => {
  const navigation = useNavigation();
  let [rider, setRider] = useState([]);

  useEffect(() => {
    let path = `rider/ridePlan/` + route.params.rideData._id;
    Axios.get(URL.Url + path)
      .then((res) => {
        setRider(res.data.rider);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deletePlan = () => {
    let path = `rideplan/` + route.params.rideData._id;
    Axios.delete(URL.Url + path)
      .then((res) => {
        alert('ride cancel successfully');
        navigation.navigate('DriverCurrentLocation');
      })
      .catch((error) => {
        console.log(error);
        alert(
          'Ride can not be canceled as it is booked by the Rider' 
        );
      });
  };

  const startRide = () => {
    let ride = {
      ridePlanId: route.params.rideData._id,
      driverId: route.params.rideData.driver,
    };
    let path = `ride`;
    Axios.post(URL.Url + path, ride)
      .then((res) => {
        alert('Enjoy your ride');
        navigation.navigate('DriverCurrentLocation');
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <ScrollView>
      <S.Container>
      <S.TopArea></S.TopArea>
        <Header title="Ride Detail" boldPosition={1} />
        <S.location>{route.params.rideData.pickupLocation}</S.location>
        <Text style={{fontSize:20}}>To</Text>
        <S.location>{route.params.rideData.dropoffLocation}</S.location>
        <S.location>{route.params.rideData.date}</S.location>
        <Text style={{ fontSize: 25, fontWeight:'bold' }}>Companions:</Text>
        {rider.map((rider, index) => {
          return (
            <Card style={{ padding: 10, margin: 10 }}>
              <Text style={{ fontSize: 20 }}>{rider.name}</Text>
              <Text style={{ fontSize: 20 }}>{rider.phoneNumber}</Text>
            </Card>
          );
        })}
      </S.Container>

      <S.ButtonContainer>
        <View style={{marginVertical:5}}>
          <Button onPress={startRide}>Start Ride</Button>
          </View>
          <Button onPress={deletePlan}>Cancel Ride</Button>
         
      </S.ButtonContainer>
     
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  cardStyle: {},
});

export default Details;
