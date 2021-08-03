import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import axios from 'axios';

import Icon from 'react-native-vector-icons/Feather';

import { URL } from '../Config/Constant';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

import camera from '../../assets/camera.png';

import Header from '../../components/Header';
import Button from '../../components/Button';

import * as S from './styles';

const AddRider: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [license, setLicense] = useState('');
  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [Id, setId] = useState('');

  const navigation = useNavigation();

  var radio_props = [
    { label: 'Driver', value: 0 },
    { label: 'Rider', value: 1 },
  ];
  var [selectedUser, setSelectedUser] = useState(0);

  const submit = () => {
    if (
      name != '' &&
      email != '' &&
      number != '' &&
      address != '' &&
      password != '' &&
      license != '' &&
      carName != '' &&
      carModel != '' &&
      Id != ''
    ) {
      let driver = {
        name,
        email,
        phoneNumber: number,
        address,
        password,
        license,
        carName,
        carModel,
        IDcard: Id,
      };
      axios
        .post(URL.Url + 'driver', driver)
        .then((res) => {
          alert('User Successfully Added Go to login page Now');
          navigation.navigate('Login');
        })
        .catch((error) => {
          //console.log(error);
          alert('user Already Exist');
        });
    } else alert('Enter valid data in Form or fill complete form');
  };

  return (
    <ScrollView>
      <S.Container>
        <Header title="Sign Up" boldPosition={1} />
        <S.Inner>
          <ScrollView>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
              buttonColor={'#1FCD6C'}
              animation={true}
              onPress={(value) => {
                setSelectedUser(value);
                if (selectedUser == 1) {
                  navigation.navigate('SignUpRider');
                } else if (selectedUser == 0) {
                  navigation.navigate('DriverSignUp');
                }
              }}
              selectedButtonColor={'#1FCD6C'}
            />
            <S.Input
              placeholder="Full Name"
              value={name}
              onChangeText={setName}
              autoCorrect={false}
              autoCaptalize={false}
            />

            <S.Input
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              //maxLength={9}
              autoCorrect={false}
              autoCaptalize={false}
            />

            <S.Input
              placeholder="Phone Number"
              keyboardType="number-pad"
              value={number}
              onChangeText={setNumber}
              maxLength={12}
              autoCorrect={false}
              autoCaptalize={false}
            />
            <S.Input
              placeholder="Id Card Number"
              value={Id}
              onChangeText={setId}
              autoCorrect={false}
              autoCaptalize={false}
            />

            <S.Input
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
              autoCorrect={false}
              autoCaptalize={false}
            />
            <S.Input
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              autoCorrect={false}
              autoCaptalize={false}
            />
            <S.Input
              placeholder="License Number"
              value={license}
              onChangeText={setLicense}
              autoCorrect={false}
              autoCaptalize={false}
            />
            <S.Input
              placeholder="Car Name"
              value={carName}
              onChangeText={setCarName}
              autoCorrect={false}
              autoCaptalize={false}
            />
            <S.Input
              placeholder="Car Model"
              value={carModel}
              onChangeText={setCarModel}
              autoCorrect={false}
              autoCaptalize={false}
            />
            <Button onPress={submit}>Sign Up</Button>
          </ScrollView>
        </S.Inner>
      </S.Container>
    </ScrollView>
  );
};

export default AddRider;
