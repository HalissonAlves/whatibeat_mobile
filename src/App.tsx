import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
