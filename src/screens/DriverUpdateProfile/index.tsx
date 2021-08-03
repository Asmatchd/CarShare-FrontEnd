import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import axios from 'axios';

import Icon from 'react-native-vector-icons/Feather';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

import camera from '../../assets/camera.png';

import Header from '../../components/Header';
import Button from '../../components/Button';

import * as S from './styles';
import Axios from 'axios';
import { URL } from '../Config/Constant';

const AddRider: React.FC = ({ route }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [license, setLicense] = useState('');
  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [Id, setId] = useState('');

  useEffect(() => {
    let path = `driver/` + route.params.driver._id;
    Axios.get(URL.Url + path)
      .then((res) => {
        setEmail(res.data.email);
        setName(res.data.name);
        setNumber(res.data.phoneNumber);
        setAddress(res.data.address);
        setLicense(res.data.license);
        setPassword(res.data.password);
        setCarName(res.data.carName);
        setCarModel(res.data.carModel);
        setId(res.data.IDcard);
      })
      .catch((error) => {
        console.log(error);
        alert('invalid login');
      });
  }, []);

  const submit = () => {
    let path = `driver/` + route.params.driver._id;
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
      Axios.put(URL.Url + path, driver)
        .then((res) => {
          alert('Profile Update Successfully');
          navigation.navigate('DriverCurrentLocation', {
            driver: route.params.driver,
          });
        })
        .catch((error) => {
          alert('user Already Exist');
        });
    } else alert('Enter valid data in Form or fill complete form');
  };

  const navigation = useNavigation();

  return (
    <ScrollView>
      <S.Container>
        <Header title="Profile Update" boldPosition={1} />
        <S.Inner>
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
            //reduce opacity
            placeholder="Phone Number"
            keyboardType="number-pad"
            value={number}
            onChangeText={setNumber}
            maxLength={12}
            autoCorrect={false}
            autoCaptalize={false}
            editable={false}
          />

          <S.Input
            //reduce opacity
            placeholder="Id Card Number"
            value={Id}
            onChangeText={setId}
            autoCorrect={false}
            autoCaptalize={false}
            editable={false}
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
          <Button onPress={submit}>Update</Button>
        </S.Inner>
      </S.Container>
    </ScrollView>
  );
};

export default AddRider;
