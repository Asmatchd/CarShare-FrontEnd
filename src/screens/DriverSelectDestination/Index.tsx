import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Axios from 'axios';
import SearchableDropdown from 'react-native-searchable-dropdown';
import DatePicker from 'react-native-datepicker';
import Button from '../../components/Button';
import * as S from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { URL } from '../Config/Constant';


const SelectDestination: React.FC = ({ route }) => {
  const navigation = useNavigation();
  
  
  
  let [seat, setSeat] = useState();

  const [pick, setpick] = useState('');
  const [drop, setDrop] = useState('');
  const [sourceLat, setSourceLat] = useState(0);
  const [destLat, setDestLat] = useState(0);
  const [sourceLng, setSourceLng] = useState(0);
  const [destLng, setDestLng] = useState(0);
  const [date, setDate] = useState('');
  
  
  
  const plan = () => {
    let rideplan = {
      pickupLocation: pick,
      dropoffLocation: drop,
      fare: 100,
      date: date,
      sourcelong:sourceLng ,
      destinationlong: destLng,
      sourcelet: sourceLat,
      seat: seat,
      destinationlet: destLat,
      driver: route.params.driver,
    };

    if (
      pick!== '' &&
      drop !== '' &&
      date !== '' &&
      seat !== ''
    ) {
      Axios.post(URL.Url + 'rideplan', rideplan)
        .then((res) => {
          alert('Ride Palnned successfully');
          navigation.navigate('DriverCurrentLocation', {
            driver: route.params.driver,
          });
        })
        .catch((error) => {
          
          alert('Ride already exist');
        });
    } else {
      alert('Fill The Form');
    }
  };

  return (
    
    <View style={{
      flex: 1,
      justifyContent: "center",
     
    }}>
      <S.TopArea></S.TopArea>
      <View style={{ alignItems:'center', marginBottom:0}}>
      <S.Title>
        <S.TitleBold>
          <Text style={styles.title}>Ride Details</Text>
          </S.TitleBold>
        </S.Title>
        </View>
      <View style={{ marginHorizontal:30, flexDirection:'row'}}>
      <DatePicker
        value={date}
        style={{ width: 145}}
        mode="date"
          format="DD-MM-YYYY"
          minDate={new Date()}
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            height: 25,
            width: 24,
            resizeMode: 'contain',
          },
          dateInput: {
            borderColor: '#1FCD6C',
            borderRadius: 6,
            borderWidth:2
          },

          dateText: {
            color: '#9B9B9B',
          },
        }}
        onDateChange={(date) => {
          setDate(date);
        }}
        />
        
        <TextInput
          style={{
            height: 38,
            width: 50,
            alignSelf:'center',
            borderWidth: 2,
            borderColor: "#1FCD6C",
            borderRadius: 6,
            textAlign: 'center',
            marginHorizontal: 20,
            fontSize: 15
            
            
          }}
          value={seat}
          placeholder="Seats"
          onChangeText={(x) => setSeat(x)}
          keyboardType='numeric'
          autoCapitalize='none'
          autoCorrect={false}
          
        />
        </View>

      <GooglePlacesAutocomplete
        styles={{
          textInput: {
            height: 38,
            fontSize: 16,
            width:30,
            marginHorizontal: 30,
            borderWidth: 2,
            borderColor: '#1FCD6C',
          },
          textInputContainer: {
            top: 10,
            marginBottom:20
          },
          listView: {
            marginHorizontal: 30,
            top: -10,
          
            
          },
        }}
        placeholder="Pickup Location"
        // autoFocus={true}
        returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
        keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
        listViewDisplayed="auto" // true/false/undefined
        fetchDetails={true}
        renderDescription={(row) => row.description} // custom description render
        onPress={(data, details) => {
          setSourceLat(details.geometry.location.lat);
          setSourceLng(details.geometry.location.lng);
          setpick(details.formatted_address);
        }}
        onKeyPress={(e) => {
          if (e.nativeEvent.key == 'done') {
          }
        }}
        query={{
          key: 'AIzaSyAkbGuYYI3uPgssjli44egmT6mu1d0fKCM',
          language: 'en', // language of the results
        }}
        // currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
        // currentLocationLabel="Current location"
        nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GoogleReverseGeocodingQuery={
          {
            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
          }
        }
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: 'distance',
          type: 'cities',
        }}
        GooglePlacesDetailsQuery={{
          // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
          fields: ['formatted_address'],
        }}
        filterReverseGeocodingByTypes={[
          'locality',
          'administrative_area_level_3',
        ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
        // predefinedPlaces={[homePlace, workPlace]}
        enablePoweredByContainer={false}
        debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      />

      <GooglePlacesAutocomplete
        styles={{
          loader: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            height: 20,
          },
          textInput: {
            height: 38,
            fontSize: 16,
            
            marginHorizontal: 30,
            borderWidth: 2,
            borderColor: '#1FCD6C',
          },
          textInputContainer: {
            
          },
          listView: {
            marginHorizontal: 30,
            
          },
        }}
        placeholder="Dropoff Location"
        // autoFocus={true}
        returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
        keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
        listViewDisplayed="auto" // true/false/undefined
        fetchDetails={true}
        renderDescription={(row) => row.description} // custom description render
        onPress={(data, details) => {
          
          setDestLat(details.geometry.location.lat);
          setDestLng(details.geometry.location.lng);
          setDrop(details.formatted_address);
          
        }}
        onKeyPress={(e) => {
          if (e.nativeEvent.key == 'done') {
          }
        }}
        query={{
          key: 'AIzaSyAkbGuYYI3uPgssjli44egmT6mu1d0fKCM',
          language: 'en', // language of the results
        }}
        // currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
        // currentLocationLabel="Current location"
        nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GoogleReverseGeocodingQuery={
          {
            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
          }
        }
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: 'distance',
          type: 'cafe',
        }}
        GooglePlacesDetailsQuery={{
          // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
          fields: ['formatted_address'],
        }}
        filterReverseGeocodingByTypes={[
          'locality',
          'administrative_area_level_3',
        ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
        // predefinedPlaces={[homePlace, workPlace]}
        enablePoweredByContainer={false}
        debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      />

      <View style={styles.bottomContainer}>
      
      </View>


      <S.BottomContainer>
     
        <Button onPress={plan}>Post Ride</Button>
      </S.BottomContainer>
      </View>
     
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  seatDesigning: {
    height: 38,
    width: 50,
    borderWidth: 2,
    borderColor: '#1FCD6C',
    borderRadius: 5,
    marginHorizontal: 30,
    fontSize: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    top: -200,
    zIndex: 4,
    marginHorizontal: 30,
  },
  input: {
    flex: 1,
    width: 50,
  },
  title: {
    fontSize: 26,
  },
  titleHead: {
    marginTop: 50,
    height: 30,
    alignSelf: 'center',
    fontFamily: 'OpenSans_400',
  },
});
export default SelectDestination;
