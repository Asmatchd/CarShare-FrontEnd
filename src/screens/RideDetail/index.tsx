import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Card} from 'react-native-shadow-cards';
import { Text , Button,ScrollView,StyleSheet} from 'react-native';

import * as S from './style'


const Details = () => {
  const PickUplocation = "Lahore";
  const DropOffLocation = "Islamabad";
  const Fare = 200;
  const Time = "3 hours";
  const s1 = "Ali";
  const s2 = "Ali";
  const s3 = "Ali";
  

    return (
        <S.Container>
            <StatusBar style="light" />
            <S.TopArea></S.TopArea>
           
        
            
       
          <ScrollView>
            <Card>
              <Text>{ PickUplocation}</Text>
              <Text>{ DropOffLocation}</Text>
              <Text>{Fare}</Text>
              <Text>{Time}</Text>
          </Card>
          <Card>
            <Text>Seact 1: {s1 }</Text>
          </Card>
          <Card>
            <Text>Seact 1: {s2 }</Text>
          </Card>
          <Card>
            <Text>Seact 1: {s3 }</Text>
          </Card>
          
            </ScrollView>
      
            

            </S.Container>
)

}
const styles = StyleSheet.create({
  cardStyle: {
    
  }
});

export default Details;