import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { ThemeProps } from '../../theme';


export const InputContainer = styled.View<ThemeProps>`
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 55px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 45px;
  padding: 0 24px;
  margin-bottom: 24px;
`;

// export const picker = styled.Picker<ThemeProps>`
//   color: ${({ theme }) => theme.color.secondary};
//   font-size: 18px;
//   height:100px ;
//   width : 200px;
// `;

export const Code = styled.Text<ThemeProps>`
  font-size: 18px;
  color: ${({ theme }) => theme.color.primary};
  align-items: center;
  
  justify-content: center;
`;

export const Input = styled.TextInput<ThemeProps>`
  font-size: 18px;
  width: 100%;
  height: 100%;`;



export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-bottom: 60px;
`;

export const TopArea = styled.View<ThemeProps>`
  align-items: center;
  top: -30%;
  width: 100%;
  height: 50%;
  background: ${({ theme }) => theme.color.secondary};
  border-bottom-left-radius: 300px;
  border-bottom-right-radius: 300px;
`;

export const CabImg = styled.Image`
  bottom: -45%;
  height: ${hp('45%')}px;
`;

export const BottomArea = styled.View`
  align-items: center;
  
  justify-content: center;
  width: 100%;
  height: 20%;
  padding: ${`${hp('0%')}px ${wp('8%')}px  ${hp('0%')}px ${wp('8%')}px`};
  marginBottom: 120px
`;

export const Title = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 30px;
  
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 50px;
`;

export const TitleBold = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 30px;
  color: ${({ theme }) => theme.color.primary};
`;
