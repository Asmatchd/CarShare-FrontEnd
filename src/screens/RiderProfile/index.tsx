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

  const navigation = useNavigation();

  return (
    <S.Container>
      <Header title="My Profile" boldPosition={1} />
      <S.Inner>
        <S.Input
          placeholder="Full Name"
          value={name}
          autoCorrect={false}
          autoCaptalize={false}
          editable={false}
        />

        <S.Input
          placeholder="Email"
          value={email}
          autoCorrect={false}
          autoCaptalize={false}
          editable={false}
        />

        <S.Input
          placeholder="Phone Number"
          keyboardType="number-pad"
          value={number}
          maxLength={12}
          autoCorrect={false}
          autoCaptalize={false}
          editable={false}
        />

        <S.Input
          placeholder="Address"
          value={address}
          autoCorrect={false}
          autoCaptalize={false}
          editable={false}
        />
        <S.Input
          placeholder="Password"
          value={password}
          autoCorrect={false}
          autoCaptalize={false}
          editable={false}
        />

        <Button
          onPress={() =>
            navigation.navigate('RiderProfileUpdate', {
              rider: route.params.rider,
            })
          }
        >
          {' '}
          Update Profile{' '}
        </Button>
      </S.Inner>
    </S.Container>
  );
};

export default AddRider;
