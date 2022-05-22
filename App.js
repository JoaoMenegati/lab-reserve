import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./components/screens/login";
import MainTeacher from "./components/screens/main-teacher";
import MainAdmin from "./components/screens/main-admin";
import ReserveRegistration from "./components/screens/reserve-registration";
import ReserveView from "./components/screens/reserve-view";
import LaboratoryRegistration from "./components/screens/laboratory-registration";
import ReserveSolicitation from "./components/screens/reserve-solicitation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainAdmin" component={MainAdmin} />
        <Stack.Screen name="MainTeacher" component={MainTeacher} />
        <Stack.Screen
          name="ReserveRegistration"
          component={ReserveRegistration}
        />
        <Stack.Screen name="ReserveView" component={ReserveView} />
        <Stack.Screen
          name="LaboratoryRegistration"
          component={LaboratoryRegistration}
        />
        <Stack.Screen
          name="ReserveSolicitation"
          component={ReserveSolicitation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
