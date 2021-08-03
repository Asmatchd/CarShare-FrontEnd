import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
// import {Picker} from '@react-native-community/picker';
import Button from '../../components/Button';

import * as S from './styles';
import Axios from 'axios';
import { URL } from '../Config/Constant';

const Login: React.FC = (navigation) => {
  const navigationn = useNavigation();

  var radio_props = [
    { label: 'Driver', value: 0 },
    { label: 'Rider', value: 1 },
  ];

  var [selectedUser, setSelectedUser] = useState();

  const submit = () => {
    if (phoneNumber != '' && password != '') {
      if (selectedUser == 0) {
        Axios.post(URL.Url + `auth/driver`, {
          phoneNumber: phoneNumber,
          password: password,
        })
          .then((res) => {
            let driver = res.data;
            navigationn.navigate('DriverCurrentLocation', { driver: driver });
          })
          .catch((error) => {
            alert('Invalid login');
          });
      }
      if (selectedUser == 1) {
        Axios.post(URL.Url + `auth/rider`, {
          phoneNumber: phoneNumber,
          password: password,
        })
          .then((res) => {
            let rider = res.data;
            navigationn.navigate('CurrentLocation', { rider: rider });
          })
          .catch((error) => {
            console.log(error);
            alert('Invalid login');
          });
      }
    } else alert('Fill login form');
  };
  const [phoneNumber, setphoneNumber] = useState('');
  const [password, setPassword] = useState('');
  return (
    <S.Container>
      <StatusBar style="light" />
      <S.TopArea></S.TopArea>
      <S.BottomArea>
        <S.Title>
          <S.TitleBold>Login</S.TitleBold>
        </S.Title>

        <S.InputContainer>
          <S.Input
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={setphoneNumber}
            autoCaptalize={false}
            keyboardType='numeric'
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            autoCaptalize={false}
            secureTextEntry={true}
          />
        </S.InputContainer>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          formHorizontal={true}
          labelHorizontal={true}
          buttonColor={'#1FCD6C'}
          animation={true}
          onPress={(value) => {
            setSelectedUser(value);
          }}
          selectedButtonColor={'#1FCD6C'}
        />

        <Button onPress={submit}>Login</Button>
        <TouchableOpacity
        onPress={() => navigationn.navigate('SignUpRider')}
        style={{  }}
      >
        <Text>Want to SignUp</Text>
      </TouchableOpacity>
      </S.BottomArea>
     
    </S.Container>
  );
};
const styles = StyleSheet.create({
  driverstyle: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
  },
});
export default Login;
