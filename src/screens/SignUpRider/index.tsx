import React, { useState } from 'react';
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

import { URL } from '../Config/Constant';

import * as S from './styles';

const AddRider: React.FC = () => {
  var radio_props = [
    { label: 'Rider', value: 1 },
    { label: 'Driver', value: 0 },
  ];
  var [selectedUser, setSelectedUser] = useState(0);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const checker = () => {
    if (selectedUser == 0) {
      navigation.navigate('DriverSignUp');
    } else if (selectedUser == 1) {
      navigation.navigate('SignUpRider');
    }
    console.log('Function is accessing');
  };
  //console.log("name:", name, "email:", email, "number:", number, "address:", address, "password:", password);

  //   const createRider = () => {
  //     console.log(name, number, exp);
  //     const rider = {
  //       name,
  //       email: exp,
  //       password: number,
  //       address: cvv
  //     };
  //     axios
  //           .post("http://localhost:4000/rider", rider)
  //           .then((res) => {
  //             alert("User Successfully Added Go to login page Now");
  //           })
  //           .catch((error) => {
  //             alert(error);
  //             console.log(error)
  //           });
  // }

  const submit = () => {
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
      axios
        .post(URL.Url + 'rider', rider)
        .then((res) => {
          alert('User Successfully Added');
          navigation.navigate('Login');
        })
        .catch((error) => {
          alert('user Already Exist');
        });
    } else alert('Enter valid data in Form or fill complete form');
  };
  return (
    <S.Container>
      <Header title="Sign Up" boldPosition={1} />
      <S.Inner>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          formHorizontal={true}
          labelHorizontal={true}
          buttonColor={'#1FCD6C'}
          animation={true}
          onPress={(value) => {
            setSelectedUser(value);

            if (selectedUser == 0) {
              navigation.navigate('DriverSignUp');
            } else if (selectedUser == 1) {
              navigation.navigate('RiderSignUp');
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
        {/* <S.Label>Phone Number</S.Label> */}
        <S.Input
          placeholder="Phone Number"
          keyboardType="number-pad"
          value={number}
          onChangeText={setNumber}
          maxLength={12}
          autoCorrect={false}
          autoCaptalize={false}
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

        <Button
          onPress={
            submit
            //() => { navigation.navigate ('CurrentLocation')}
          }
        >
          SignUp
        </Button>
      </S.Inner>
    </S.Container>
  );
};

export default AddRider;
