import React, { Fragment } from "react";
import { View, Text } from "react-native";

export default function BulletPoints({ children }: BulletPointProps) {
  const bullets = Array.isArray(children) ? children : [children];

  return (
    <Fragment>
      {bullets.map((bullet, key) => (
        <View style={{ flexDirection: "row", marginBottom: 4 }} key={key}>
          <Fragment>
            <View style={{ marginLeft: 16 }}>
              <Text>&#x2022;{"  "}</Text>
            </View>
            <View style={{ flex: 1 }}>{bullet}</View>
          </Fragment>
        </View>
      ))}
    </Fragment>
  );
}

type BulletPointProps = {
  children: any;
};
