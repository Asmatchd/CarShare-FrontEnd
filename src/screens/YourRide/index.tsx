import React, { useState } from 'react';
import StarRating from 'react-native-star-rating';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Header from '../../components/Header';
import Button from '../../components/Button';

import avatar from '../../assets/avatar.png';
import theme from '../../theme';

import * as S from './styles';

const YourRide: React.FC = () => {
  const [rating, setRating] = useState(4);

  return (
    <>
      <Header title="Your Ride" />
      <S.Container>
        <S.InnerContainer>
          <S.InfoContainer>
            <S.Description>Your ride is</S.Description>
            <S.Description value>Rs 500.00</S.Description>
            <S.Description>December 21, 2020</S.Description>
          </S.InfoContainer>
          <S.DriverContainer>
            <S.RatingContainer>
              <S.AvatarContainer>
                <S.Avatar source={avatar} />
              </S.AvatarContainer>
              <S.DriverName>Umair</S.DriverName>
              <S.Description>Rate your driver</S.Description>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={rating}
                selectedStar={setRating}
                fullStarColor={theme.color.secondary}
                emptyStar="star"
                emptyStarColor={theme.color.gray}
                starSize={hp('4%')}
                containerStyle={{ width: '50%', paddingTop: 8 }}
              />

              <S.MessageInput
                multiline
                numberOfLines={3}
                placeholder="Your message..."
              />
            </S.RatingContainer>
            <Button>Done</Button>
          </S.DriverContainer>
        </S.InnerContainer>
      </S.Container>
    </>
  );
};

export default YourRide;
