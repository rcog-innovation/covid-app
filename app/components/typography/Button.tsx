import { Linking } from "react-native";
import React from "react";
import { Button as ButtonReactNativePaper } from "react-native-paper";

export default function Button({ url, title }: LinkProps) {
  return (
    <ButtonReactNativePaper
      onPress={() => {
        Linking.openURL(url);
      }}
      style={{ marginBottom: 8 }}
    >
      {title}
    </ButtonReactNativePaper>
  );
}

type LinkProps = {
  url: string;
  title: string;
};
