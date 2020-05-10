import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "./components/Header";
import Home from "./views/Home";
import Introduction from "./views/Introduction";
import AdviceToShare from "./views/AdviceToShare";
import MidwiferyObstetricAdvice from "./views/MidwiferyObstetricAdvice";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <Header />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Introduction" component={Introduction} />
          <Stack.Screen name="Advice To Share" component={AdviceToShare} />
          <Stack.Screen
            name="Midwifery & Obstetric Advice"
            component={MidwiferyObstetricAdvice}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export type RootStackParamList = {
  Home: undefined;
  Introduction: undefined;
  ["Advice To Share"]: undefined;
  ["Midwifery & Obstetric Advice"]: undefined;
};
