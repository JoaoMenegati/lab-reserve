import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//COMPONENTES
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
      <Stack.Navigator
      //Este código abaixo serve para remover o header que está aparecendo acima de tudo,
      //deixei comentado para vocês verem, assim que verificarem o redirecionamento, podemos remover.
      // screenOptions={{
      //   headerShown: false,
      // }}
      >
        {/* Stack.Screen serve para criar os componentes para serem acessados
        posteriomente */}
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
