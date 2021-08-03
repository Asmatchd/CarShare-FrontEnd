import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { ThemeProps } from '../../theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-bottom: 60px;
`;
export const TopArea = styled.View<ThemeProps>`
  align-items: center;
  top: 0%;
  width: 100%;
  height: 20%;
  background: ${({ theme }) => theme.color.secondary};
  border-bottom-left-radius: 300px;
  border-bottom-right-radius: 300px;
`;

export const Title = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 30px;
  
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 100px;
`;

export const TitleBold = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 30px;
  color: ${({ theme }) => theme.color.primary};
`;
export const BottomArea = styled.View`
  align-items: center;
  
  justify-content: center;
  width: 100%;
  height: 80%;
  padding: ${`${hp('0%')}px ${wp('10%')}px  ${hp('0%')}px ${wp('8%')}px`};
`;