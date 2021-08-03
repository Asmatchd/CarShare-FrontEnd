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
  const navigation = useNavigation();
  let [ride, setRide] = useState([]);

  useEffect(() => {
    let path = `ride/driver/` + route.params.driver._id;
    Axios.get(URL.Url + path)
      .then((res) => {
        setRide(res.data.ride);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <ScrollView>
      <S.Container>
      <S.TopArea></S.TopArea>
        <Header title="My Rides" boldPosition={1} />
        {ride.map((ride, index) => {
          return (
            <TouchableOpacity>
              <Card style={{ padding: 10, margin: 10 }}>
                <Text style={{ fontSize: 20 }}>
                  {ride.pickupLocation} --> {ride.dropoffLocation}
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
