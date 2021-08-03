import React, { useEffect, useState } from 'react';

import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as S from './style';

import Button from '../../components/Button';
import Header from '../../components/Header';
import { Card } from 'react-native-shadow-cards';
import Axios from 'axios';
import { URL } from '../Config/Constant';

const Details = ({ route }) => {
  const navigation = useNavigation();
  let [driver, setDriver] = useState({});

  useEffect(() => {
    let path = `driver/` + route.params.rideData.driver;
    Axios.get(URL.Url + path)
      .then((res) => {
        setDriver(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const booked = () => {
    let bookride = {
      riderId: route.params.rider._id,
      ridePlanId: route.params.rideData._id,
      pickupLocation: route.params.rideData.pickupLocation,
      dropoffLocation: route.params.rideData.dropoffLocation,
      date: route.params.rideData.date,
      seat: route.params.bookedSeat,
    };
    let path = `rideplan/booked`;
    Axios.post(URL.Url + path, bookride)
      .then((res) => {
        alert('Ride is Booked \n Please call the Driver for Pickup Location');
        navigation.navigate('CurrentLocation');
      })
      .catch((error) => {
        alert('Ride already Booked');
        console.log(error);
      });
  };

  return (
    <ScrollView>
      <S.Container>
        <S.TopArea></S.TopArea>
        <Header title="Ride Details" boldPosition={1} />
       <View style={{marginHorizontal:20 , alignItems:'center'}}>
        <Text style={{ fontSize: 20 }}>
          {route.params.rideData.pickupLocation}  {'--> '}
          {route.params.rideData.dropoffLocation}
        </Text>
        <Text style={{ fontSize: 20 }}>Date:{route.params.rideData.date}</Text>
          <Text style={{ fontSize: 20 }}>Rs: {route.params.rideData.fare}</Text>
          </View>
        <Card style={{ padding: 10, margin: 10 }}>
          <Text style={{ fontSize: 20, fontWeight:'bold' }}>Driver Detail:</Text>
          <Text style={{ fontSize: 20 }}>Name: {driver.name}</Text>
          <Text style={{ fontSize: 20 }}>Phone No:{driver.phoneNumber}</Text>

          <Text style={{ fontSize: 20 }}>Car Name: {driver.carName}</Text>
          <Text style={{ fontSize: 20 }}>Car Modal: {driver.carModel}</Text>
          
        </Card>
      </S.Container>
      <View style={{marginHorizontal:20}}>
        <Button onPress={booked}>Book Ride</Button>
        </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  cardStyle: {},
});

export default Details;
