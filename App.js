import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import CollectionImages from './components/CollectionImages';
import Collections from './components/Collections';
import PreviewImage from './components/PreviewImage';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
// or any pure javascript modules available in npm

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={'Collections'} component={Collections} />
          <Stack.Screen name={'PreviewImage'} component={PreviewImage} />
          <Stack.Screen name={'CollectionImages'} component={CollectionImages}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
});
