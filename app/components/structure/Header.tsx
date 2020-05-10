import React from "react";
import { Appbar } from "react-native-paper";

export default function Header() {
  return (
    <Appbar.Header>
      {/* <Appbar.BackAction onPress={this._goBack} /> */}
      <Appbar.Content
        title="Covid Pregnancy App"
        subtitle="Royal College of Obstetricians and Gynaecologists"
      />
      <Appbar.Action icon="dots-vertical" />
    </Appbar.Header>
  );
}
