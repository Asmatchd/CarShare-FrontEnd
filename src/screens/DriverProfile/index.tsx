import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import axios from 'axios';

import Icon from 'react-native-vector-icons/Feather';

import Header from '../../components/Header';
import Button from '../../components/Button';

import * as S from './styles';
import Axios from 'axios';
import { URL } from '../Config/Constant';

const AddRider: React.FC = ({ route }) => {
  let [email, setemail] = useState();
  let [name, setname] = useState();
  let [number, setnumber] = useState();
  let [address, setaddress] = useState();
  let [password, setpassword] = useState();
  let [license, setlicense] = useState();
  let [carName, setcarName] = useState();
  let [carModel, setcarModel] = useState();
  let [Id, setId] = useState();
  useEffect(() => {
    let path = `driver/` + route.params.driver._id;
    Axios.get(URL.Url + path)
      .then((res) => {
        setemail(res.data.email);
        setname(res.data.name);
        setnumber(res.data.phoneNumber);
        setaddress(res.data.address);
        setlicense(res.data.license);
        setpassword(res.data.password);
        setcarName(res.data.carName);
        setcarModel(res.data.carModel);
        setId(res.data.IDcard);
      })
      .catch((error) => {
        console.log(error);
        alert('invalid login');
      });
  }, []);

  const navigation = useNavigation();

  return (
    <ScrollView>
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
            editable={false}
            //maxLength={9}
            autoCorrect={false}
            autoCaptalize={false}
          />

          <S.Input
            placeholder="Phone Number"
            keyboardType="number-pad"
            value={number}
            editable={false}
            maxLength={12}
            autoCorrect={false}
            autoCaptalize={false}
          />
          <S.Input
            placeholder="Id Card Number"
            value={Id}
            editable={false}
            autoCorrect={false}
            autoCaptalize={false}
          />

          <S.Input
            placeholder="Address"
            value={address}
            editable={false}
            autoCorrect={false}
            autoCaptalize={false}
          />
          <S.Input
            placeholder="Password"
            value={password}
            editable={false}
            autoCorrect={false}
            autoCaptalize={false}
          />
          <S.Input
            placeholder="License Number"
            value={license}
            editable={false}
            autoCorrect={false}
            autoCaptalize={false}
          />
          <S.Input
            placeholder="Car Name"
            value={carName}
            editable={false}
            autoCorrect={false}
            autoCaptalize={false}
          />
          <S.Input
            placeholder="Car Model"
            value={carModel}
            editable={false}
            autoCorrect={false}
            autoCaptalize={false}
          />
          <Button
            onPress={() =>
              navigation.navigate('DriverUpdateProfile', {
                driver: route.params.driver,
              })
            }
          >
            Profile Update
          </Button>
        </S.Inner>
      </S.Container>
    </ScrollView>
  );
};

export default AddRider;
