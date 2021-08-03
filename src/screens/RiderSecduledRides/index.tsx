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
  let [ride, setRide] = useState([]);

  useEffect(() => {
    let path = `rideplan/rider/` + route.params.rider._id;
    
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
    
    navigation.navigate('RiderSecduledRidesDetails', {
      rideData: ride[index],
      rider: route.params.rider,
    });
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
              <Card style={{ padding: 10, margin: 10 }}>
                <Text style={{ fontSize: 20 }}>
                  To: {ride.pickupLocation} From {ride.dropoffLocation}
                </Text>
                <Text style={{ fontSize: 20 }}>
                  From {ride.dropoffLocation}
                </Text>
                <Text style={{ fontSize: 20 }}>Date: {ride.date}</Text>

               
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
