import React, { useEffect, useState } from 'react';

import {
  Text,
  Button,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as S from './style';
import Header from '../../components/Header';
import { Card } from 'react-native-shadow-cards';
import Axios from 'axios';
import { URL } from '../Config/Constant';

const Details = ({ route }) => {
  let [ride, setRide] = useState([]);

  useEffect(() => {
    let path = `ridePlan/` + route.params.driver._id;
    Axios.get(URL.Url + path)
      .then((res) => {
        setRide(res.data.ridePlan);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const navigation = useNavigation();

  const detailRide = (index) => {
    //console.log(ride[index]);
    navigation.navigate('DriverSecduledRideDetails', { rideData: ride[index] });
  };

  return (
    <ScrollView>
      <S.Container>
        <S.TopArea></S.TopArea>
        <Header title="My Secdule Rides" boldPosition={1} />

        {ride.map((ride, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                detailRide(index);
              }}
            >
              <Card style={{
                marginHorizontal: 20,
                marginVertical: 10,
                backgroundColor: "#f0fff0",
  
              }}>
                <Text style={{ fontSize: 20, padding:10, fontWeight:'bold' }}>
                  
                {ride.pickupLocation} --> {ride.dropoffLocation}
                </Text>
                <Text style={{ fontSize: 20, paddingLeft:10 }}>Date: {ride.date}</Text>
              </Card>
            </TouchableOpacity>
          );
        })}
      </S.Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardStyle: {},
});

export default Details;
