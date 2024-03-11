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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
