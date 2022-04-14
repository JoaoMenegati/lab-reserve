import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//COMPONENTES
import Home from "./components/home";
import ComponentA from "./components/component-a";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      //Este código abaixo serve para remover o header que está aparecendo acima de tudo,
      //deixei comentado para vocês verem, assim que verificarem o redirecionamento, podemos remover.
      // screenOptions={{
      //   headerShown: false,
      // }}
      >
        {/* Stack.Screen serve para criar os componentes para serem acessados
        posteriomente */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ComponentA" component={ComponentA} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
