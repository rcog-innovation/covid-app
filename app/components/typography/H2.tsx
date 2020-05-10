import React from "react";
import { Text } from "react-native";

export default function H2({ children }: H2Props) {
  return (
    <Text style={{ marginBottom: 16, fontSize: 24, fontWeight: "700" }}>
      {children}
    </Text>
  );
}

type H2Props = {
  children: any;
};
