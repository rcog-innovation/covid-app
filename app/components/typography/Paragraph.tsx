import React from "react";
import { Text, StyleProp, TextStyle } from "react-native";

export default function Paragraph({ children, style = {} }: ParagraphProps) {
  return (
    <Text style={{ marginBottom: 8, ...(style as Object) }}>{children}</Text>
  );
}

type ParagraphProps = {
  children: any;
  style?: StyleProp<TextStyle>;
};
