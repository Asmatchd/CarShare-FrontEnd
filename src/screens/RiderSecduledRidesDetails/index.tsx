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
  const navigation = useNavigation();

  const cancelRide = () => {
    let path = `rideplan/cancel`;
    let ride = {
      riderId: route.params.rider._id,
      ridePlanId: route.params.rideData._id,
    };
    Axios.post(URL.Url + path, ride)
      .then((res) => {
        alert('ride cancel successfully');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <ScrollView>
      <S.Container>
        <S.TopArea></S.TopArea>
        <Header title="Details" boldPosition={0} />
        <View style={{ marginHorizontal: 20 , }}>
          <View style={{alignItems:'center'}}> 
        <Text style={{ fontSize: 25 }}>
          {route.params.rideData.pickupLocation} --> {route.params.rideData.dropoffLocation}
          
        </Text>
        <Text style={{ fontSize: 20 }}>Date: {route.params.rideData.date}</Text>
            <Text style={{ fontSize: 20 }}>Fare: {route.params.rideData.fare}</Text>
            </View>
        
        <Card style={{ padding: 10, marginVertical:10 }}>
          <Text style={{ fontSize: 25 }}>Driver Detail:</Text>
          <Text style={{ fontSize: 20 }}>Name: {driver.name}</Text>
          <Text style={{ fontSize: 20 }}>Phone no: {driver.phoneNumber}</Text>

          <Text style={{ fontSize: 20 }}>Car Name: {driver.carName}</Text>
          <Text style={{ fontSize: 20 }}>Care Model: {driver.carModel}</Text>
          
          </Card>
          </View>
        <View style={{marginHorizontal:20}}>
        <Button onPress={cancelRide}>Cancel Ride</Button>
        </View>
      </S.Container>
      
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  cardStyle: {},
});

export default Details;
