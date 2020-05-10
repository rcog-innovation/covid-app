import React from "react";
import { ScrollView } from "react-native";
import Navigation from "../components/Navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

/**
 * Provides shared styling (e.g. AppBar) and the router
 */
export default function Home({ navigation }: Props) {
  return (
    <ScrollView style={{ margin: 16 }}>
      <Navigation navigation={navigation} />
    </ScrollView>
  );
}

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};
