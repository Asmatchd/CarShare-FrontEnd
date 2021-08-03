import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { IItemProps } from './index';
import { ThemeProps } from '../../theme';

interface IItemText extends ThemeProps {
  small?: boolean;
}
interface IDot extends ThemeProps {
  secondary?: boolean;
}

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

export const BottomContainer = styled.View`
  width: 100%;
  padding: 10%;
`;
export const Title = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 30px;
  
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 50px;
`;
export const TopArea = styled.View<ThemeProps>`
  align-items: center;
  top: -5%;
  width: 100%;
  height: 20%;
  background: ${({ theme }) => theme.color.secondary};
  border-bottom-left-radius: 300px;
  border-bottom-right-radius: 300px;
`;

export const TitleBold = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 30px;
  color: ${({ theme }) => theme.color.primary};
`;
export const Container = styled.SafeAreaView`
  flex: 1;
  justifyContent: "center";
  alignself: "center";
`;
