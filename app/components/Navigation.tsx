import * as React from "react";
import { Drawer } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

export default function Navigation({ navigation }: Props) {
  const active = "first";

  return (
    <>
      <Drawer.Section>
        <Drawer.Item
          label="Introduction"
          onPress={() => {
            navigation.navigate("Introduction");
          }}
        />
      </Drawer.Section>
      <Drawer.Section title="General Advice">
        <Drawer.Item
          label="To share with pregnant women"
          onPress={() => {
            navigation.navigate("Advice To Share");
          }}
        />
        <Drawer.Item
          label="For midwifery and obstetric services"
          onPress={() => {
            navigation.navigate("Midwifery & Obstetric Advice");
          }}
        />
      </Drawer.Section>
      <Drawer.Section title="Care Advice">
        <Drawer.Item
          label="Pregnant with suspected/confirmed Covid-19"
          onPress={() => {
            navigation.navigate("Advice For Care");
          }}
        />
        <Drawer.Item
          label="Pregnant women recovering from Covid-19"
          onPress={() => {
            navigation.navigate("Advice For Recovery");
          }}
        />
      </Drawer.Section>
      <Drawer.Section title="Interactive">
        <Drawer.Item
          label="Asses Covid-19 risk with maternity attendees"
          onPress={() => {
            navigation.navigate("Assess Risk");
          }}
        />
      </Drawer.Section>
    </>
  );
}

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};
