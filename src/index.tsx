import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import theme from './theme';

import Home from './screens/Home';
import Verification from './screens/Verification';
import SignUpRider from './screens/SignUpRider';
import CurrentLocation from './screens/CurrentLocation';
import SelectDestination from './screens/SelectDestination';
import Request from './screens/Request';
import YourRide from './screens/YourRide';
import Login from './screens/Login/Login';
import DriverSignUp from './screens/DriverSignUp';

import DriverCurrentLocation from './screens/DriverCurrentLocation/index';
import DriverSelectDestination from './screens/DriverSelectDestination/Index';
import DriverRequest from './screens/DriverRequest/index';
import AvailableDrivers from './screens/AvailableDrivers/index';
import DriverRidesHistory from './screens/DriverSechduleRides';
import RiderRidesHistory from './screens/RiderRidesHistory/index';
import RideDetails from './screens/RideDetail';
import DriverSecduleRides from './screens/DriverSechduleRides'
import DriverProfile from './screens/DriverProfile';
import SelectedDriverDetail from './screens/SelectedDriverDetail';
import RiderProfile from './screens/RiderProfile/index';
import RiderSecduledRides from './screens/RiderSecduledRides/index';
import RiderProfileUpdate from './screens/RiderProfileUpdate/index';
import DriverRideHistory from './screens/DriverRideHistory';
import DriverUpdateProfile from './screens/DriverUpdateProfile';
import DriverRidesHistoryDetail from './screens/DriverRidesHistoryDetail';
import RiderSecduledRidesDetails from './screens/RiderSecduledRidesDetails';
import DriverSecduledRideDetails from './screens/DriverSecduledRideDetails';
import RiderRidesHistoryDetail from './screens/RiderRidesHistoryDetail';
 
//  headerMode={true}
const Stack = createStackNavigator();
// headerMode={true}
const Index: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator headerMode={false}> 
        <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DriverSignUp" component={DriverSignUp} />
          <Stack.Screen name="DriverSelectDestination" component={DriverSelectDestination} />
          <Stack.Screen name="DriverRequest" component={DriverRequest} />
          <Stack.Screen name="AvailableDrivers" component={AvailableDrivers} />
          <Stack.Screen name="RideDetail" component={RideDetails} />
          <Stack.Screen name="DriverSecduleRides" component={DriverSecduleRides} />
          <Stack.Screen name="DriverProfile" component={DriverProfile} />
          <Stack.Screen name="DriverCurrentLocation" component={DriverCurrentLocation} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="SignUpRider" component={SignUpRider} />
          <Stack.Screen name="CurrentLocation" component={CurrentLocation} />
          <Stack.Screen name="SelectDestination" component={SelectDestination}  />
          <Stack.Screen name="Request" component={Request} />
          <Stack.Screen name="YourRide" component={YourRide} />
          <Stack.Screen name="SelectedDriverDetail" component={SelectedDriverDetail} />
          <Stack.Screen name="RiderProfile" component={RiderProfile} />
          <Stack.Screen name="RiderRidesHistory" component={RiderRidesHistory} />
          <Stack.Screen name="DriverRidesHistory" component={DriverRidesHistory} />
          <Stack.Screen name="RiderSecduledRides" component={RiderSecduledRides} />
          <Stack.Screen name="RiderProfileUpdate" component={RiderProfileUpdate} />
          <Stack.Screen name="DriverRideHistory" component={DriverRideHistory} />
          <Stack.Screen name="DriverUpdateProfile" component={DriverUpdateProfile} />
          <Stack.Screen name="DriverRidesHistoryDetail" component={DriverRidesHistoryDetail} />
          <Stack.Screen name="RiderSecduledRidesDetails" component={RiderSecduledRidesDetails} />
          <Stack.Screen name="DriverSecduledRideDetails" component={DriverSecduledRideDetails} />
          <Stack.Screen name="RiderRidesHistoryDetail" component={RiderRidesHistoryDetail} />
         
         
        </Stack.Navigator>
        
        
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Index;
