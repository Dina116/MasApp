import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../../screens/LoginScreen/LoginScreen';
import HomeScreen from '../../../screens/HomeScreen/HomeScreen';
import SettingScreen from '../../../screens/SettingScreen/SettingScreen';
import RegisterDeviceScreen from '../../../screens/RegisterDevice/RegisterDeviceScreen';

export default function MainStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
<Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen name="RegisterDeviceScreen" component={RegisterDeviceScreen} />
    </Stack.Navigator>
  );
}
