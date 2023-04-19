import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from '../Views/Screen1';
import Screen2 from '../Views/Screen2';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Screen1} options={{headerShown: false}}/>
      <Stack.Screen name="Stopwatch" component={Screen2} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default MyStack;