import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';

//import { Button } from 'react-native';

const GooglePlaces = ({placehoolder}) => {
    let destinationId;
    let destinationText;
    let longitudee;
    let latitudee;
    const navigation = useNavigation;
    
   
    return (
        <GooglePlacesAutocomplete
                 styles={{
                    textInput: {
                    height: 30,
                    color: '#323232',
                         fontSize: 18,
                    top:50
                    
                    },
                }}
                    placeholder = "component imported"
            minLength={1}
                    isRowScrollable={true}
                    // autoFocus={true}
                    returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                    keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
                    listViewDisplayed='auto'    // true/false/undefined
                    fetchDetails={true}
                    renderDescription={row =>  row.description } // custom description render
                    onPress={(data, details) => { // 'details' is provided when fetchDetails = true
                        //console.log(details);
                        longitudee = details.geometry.location.lng;
                        latitudee = details.geometry.location.lat;
                        destinationId = data;
                        destinationText = details;
                        
                    //    console.log("destinationId::::", destinationId,
                    //        "DestinationText", destinationText);
                        
                    }}
                    
                    onKeyPress = {(e) => {
                        if (e.nativeEvent.key == "done") { 
                            
                        }}}
                    query={{
                        key: 'AIzaSyAkbGuYYI3uPgssjli44egmT6mu1d0fKCM',
                        language: 'en', // language of the results
                        components: 'country:us',
                        types:('cities')
                    }}

                    // currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                    // currentLocationLabel="Current location"
                    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                    GoogleReverseGeocodingQuery={{
                        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                    }}
                    GooglePlacesSearchQuery={{
                        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                        rankby: 'distance',
                        type: 'cafe'
                    }}
                    
                    GooglePlacesDetailsQuery={{
                        // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
                        fields: ['formatted_address'],
                        
                    }}

                    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                    // predefinedPlaces={[homePlace, workPlace]}
                    enablePoweredByContainer={false}
                    debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                    // renderLeftButton={()  =>  <Text>Custom text after the input</Text>}
                    // renderRightButton={() => <Text>Custom text after the input</Text>}
        />

        
        
    );
    
}
                
export default GooglePlaces;
