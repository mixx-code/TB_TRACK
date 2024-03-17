/* eslint-disable prettier/prettier */
// import {Platform} from 'react-native';
import React from 'react';
// import PushNotification from 'react-native-push-notification';
import configureStore from './store';
import {Provider} from 'react-redux';
import Remainder from './screens/Remainder';
// import PushNotificationIOS from '@react-native-community/push-notification-ios';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import LandingScreen from './screens/LandingScreen';
import HomeScreen from './screens/HomeScreen';
import InfoTBC from './screens/InfoTBC';
import ArtikelTBC from './screens/ArtikelTBC';
import DetailArtikel from './screens/DetailArtikel';
import LembarPersetujuan from './screens/LemberPersetujuan';
import Skrining from './screens/Skrining';
import SkriningUmum from './screens/SkriningUmum';
import InfoPKM from './screens/InfoPKM';
import PolaMakan from './screens/PolaMakan';
import VideoEdukasi from './screens/VideoEdukasi';
const Stack = createNativeStackNavigator();
const store = configureStore();
const App = () => {
  // PushNotification.configure({
  //   onRegister: function (token) {
  //     //console.log("TOKEN:", token);
  //   },

  //   onNotification: function (notification) {
  //     console.log('NOTIFICATION:', notification);
  //     notification.finish(PushNotificationIOS.FetchResult.NoData);
  //   },

  //   onAction: function (notification) {
  //     console.log('ACTION:', notification.action);
  //     console.log('NOTIFICATION:', notification);

  //     // process the action
  //   },

  //   onRegistrationError: function (err) {
  //     console.error(err.message, err);
  //   },

  //   permissions: {
  //     alert: true,
  //     badge: true,
  //     sound: true,
  //   },
  //   popInitialNotification: true,
  //   requestPermissions: Platform.OS === 'ios',
  // });
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
            animation: 'fade',
          }}>
          <Stack.Screen name="Remainder" component={Remainder} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="LandingScreen" component={LandingScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="MenuInfo" component={InfoTBC} />
          <Stack.Screen name="MenuPKM" component={InfoPKM} />
          <Stack.Screen name="MenuMakanSehat" component={PolaMakan} />
          <Stack.Screen name="MenuVideoEdukasi" component={VideoEdukasi} />
          <Stack.Screen name="MenuArtikel" component={ArtikelTBC} />
          <Stack.Screen name="DetailArtikel" component={DetailArtikel} />
          <Stack.Screen
            name="LembarPersetujuan"
            component={LembarPersetujuan}
          />
          <Stack.Screen name="Skrining" component={Skrining} />
          <Stack.Screen name="SkriningUmum" component={SkriningUmum} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
