import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./components/login";
import InicioProfessor from "./components/start-teacher";
import InicioAdministrador from "./components/start-admin";
import CriarReserva from "./components/reserve-registration";
import VerReserva from "./components/reserve-view";
import SolicitacaoReserva from "./components/reserve-solicitation";
import CadastrarLaboratorio from "./components/register-laboratory";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="InicioProfessor" component={InicioProfessor} />
        <Stack.Screen name="CriarReserva" component={CriarReserva} />
        <Stack.Screen
          name="InicioAdministrador"
          component={InicioAdministrador}
        />
        <Stack.Screen name="VerReserva" component={VerReserva} />
        <Stack.Screen
          name="SolicitacaoReserva"
          component={SolicitacaoReserva}
        />
        <Stack.Screen
          name="CadastrarLaboratorio"
          component={CadastrarLaboratorio}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
