import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import camera from '../../assets/camera.png';

import Header from '../../components/Header';
import Button from '../../components/Button';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

import * as S from './styles';
import Axios from 'axios';
import { URL } from '../Config/Constant';

const AddRider: React.FC = ({ route }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    let path = `rider/` + route.params.rider._id;
    Axios.get(URL.Url + path)
      .then((res) => {
        setEmail(res.data.email);
        setName(res.data.name);
        setNumber(res.data.phoneNumber);
        setAddress(res.data.address);
        setPassword(res.data.password);
      })
      .catch((error) => {
        console.log(error);
        alert('invalid login');
      });
  }, []);

  const submit = () => {
    let path = `rider/` + route.params.rider._id;
    console.log(path);
    if (
      name != '' &&
      email != '' &&
      number != '' &&
      address != '' &&
      password != ''
    ) {
      let rider = {
        name,
        email,
        phoneNumber: number,
        address,
        password,
      };
      Axios.put(URL.Url + path, rider)
        .then((res) => {
          alert('Profile Update Successfully');
          navigation.navigate('CurrentLocation', {
            rider: route.params.rider,
          });
        })
        .catch((error) => {
          alert('user Already Exist');
        });
    } else alert('Enter valid data in Form or fill complete form');
  };

  const navigation = useNavigation();

  return (
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
        {/* <S.Label>Phone Number</S.Label> */}
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

        {/* <S.Label>Address</S.Label> */}
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

        <Button onPress={submit}>Update</Button>
      </S.Inner>
    </S.Container>
  );
};

export default AddRider;
