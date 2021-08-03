import React from 'react';


import { Text, ScrollView, StyleSheet ,View,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as S from './style';
import Header from '../../components/Header';
import {Card} from 'react-native-shadow-cards';
import Button from '../../components/Button';
const Details = () => {
  const PickUplocation = "Lahore ";
  const DropOffLocation = "Islamabad";
  const driverName = "Harry";
  const DriverNumber = "03044790535";
  const card_title = PickUplocation.concat(" -> ",DropOffLocation.toString());
  const Fare = 200;
  const Time = "3 hours";
  const date = "22-12-2020";
  const distance = "33 km";
  const rider1 = "Haroon";
  const rider1Number="03000404043"
  const rider2 = "Haroon";
  const rider3 = "Haroon";
  const passengers = rider1.concat("\n", rider2.toString(), "\n", rider3.toString());
  const navigation = useNavigation();
  return (
    <ScrollView>
        <S.Container>
        <Header title="Details" boldPosition={0} />  
        <S.Title>
          {card_title}
        </S.Title>
        
        <S.SubTitle>
          {driverName}
          
        </S.SubTitle>
        <S.SubTitle>
          {DriverNumber} 
        </S.SubTitle>
        <TouchableOpacity>
        <Card style={{ padding: 10, margin: 10 }}>
           
            <Text>{"Rider: ".concat(rider1.toString())}</Text>
            <Text>{"Phone: ".concat(rider1Number.toString())}</Text>
            <Text>Seats:</Text>
          </Card>
        </TouchableOpacity>
        
       
      </S.Container>
      
      
      </ScrollView>
)

}
const styles = StyleSheet.create({
  cardStyle: {
  }
});

export default Details;