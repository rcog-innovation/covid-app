import React from "react";
import { Text } from "react-native";

export default function H3({ children }: H3Props) {
  return (
    <Text style={{ marginBottom: 16, fontSize: 20, fontWeight: "600" }}>
      {children}
    </Text>
  );
}

type H3Props = {
  children: any;
};
