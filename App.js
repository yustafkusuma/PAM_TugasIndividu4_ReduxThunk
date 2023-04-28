import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/Home";
import Detail from "./src/Detail";
import UserPage from "./src/UserPage";
import { Provider } from "react-redux";
import store from "./src/redux-thunk/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="UserPage" component={UserPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
