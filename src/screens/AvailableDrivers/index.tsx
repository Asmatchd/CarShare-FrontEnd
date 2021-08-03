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
  let [availableRide, setRide] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    let path = `rideplan/search`;
    Axios.post(URL.Url + path, route.params.searchRide)
      .then((res) => {
        setRide(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const detailRide = (index) => {
    navigation.navigate('SelectedDriverDetail', {
      bookedSeat: route.params.searchRide.seat,
      rideData: availableRide[index],
      rider: route.params.rider,
    });
  };
  if (!availableRide) {
    return (
      <Text style={{ fontSize: 30 }}>
        No such ride Available yet please try later
      </Text>
    );
  }
  else
    return (
      <ScrollView>
        <S.Container>
          <S.TopArea></S.TopArea>
          <Header title="Available Rides" boldPosition={1} />
          {availableRide.map((ride, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  detailRide(index);
                }}
              >
                <Card style={{ padding: 10, margin: 10 }}>
                  <Text style={{ fontSize: 20 }}>
                    {ride.pickupLocation} to {ride.dropoffLocation}
                  </Text>
                  <Text style={{ fontSize: 20 }}>{ride.date}</Text>

                  
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
