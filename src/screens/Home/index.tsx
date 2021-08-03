import React ,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

//import PhoneInput from '../../components/PhoneInput';
import Button from '../../components/Button';

import cabImg from '../../assets/cab.png';
import * as S from './styles';

interface setUp {
  phoneNumber: Number,
  setphoneNumber: Number
}

const Home: React.FC = (navigation) => {
  const navigationn = useNavigation();
  const [phoneNumber, setphoneNumber] = useState<setUp>();
  //console.log(phoneNumber)
  return (
    <S.Container>
      <StatusBar style="light" />
      <S.TopArea>
        <S.CabImg source={cabImg} resizeMode="contain" />
      </S.TopArea>
      <S.BottomArea>
        <S.Title>
          <S.Title>Welcome to </S.Title>
          <S.TitleBold>KAAR SHARE</S.TitleBold>
        </S.Title>
        {/* <S.InputContainer>
          <S.Input
            placeholder="xxxxxxxxxxx"
            value={phoneNumber}
            onChangeText={setphoneNumber}
            keyboardType="numeric"
            maxLength={11}
          />
    </S.InputContainer> */}
        <Button onPress={() => navigationn.navigate('Login')}>
          Get Started
        </Button>
      </S.BottomArea>
    </S.Container>
  );
};

export default Home;
