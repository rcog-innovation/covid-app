import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Header from "../components/structure/Header";
import { Asset } from "expo-asset";

/**
 * Provides shared styling (e.g. AppBar) and the router
 */
export default function Main() {
  const [text, setText] = useState("");

  useEffect(() => {
    async function read() {
      const markdownAsset = await Asset.fromModule(
        require(`../assets/markdown/introduction.md`)
      );
      const markdownFile = await fetch(markdownAsset.uri);
      const text = await markdownFile.text();
      setText(text);
    }
    read();
  }, []);

  return (
    <View>
      <Header />
      <Text>{text}</Text>
    </View>
  );
}
