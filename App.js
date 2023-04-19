import React, { useState } from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation';
import Welcome from './Views/Welcome';

export default function App() {

  const [isLoading, setIsLoading] = useState()

  setTimeout(() => {
    setIsLoading(true);
  }, 2000);
  

  return (
    <NavigationContainer>
      {/* {isLoading ? <MyStack /> : <Welcome/>} */}
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
