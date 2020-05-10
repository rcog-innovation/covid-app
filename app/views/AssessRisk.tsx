import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Card, Button } from "react-native-paper";

const questionTree: Screen = {
  text:
    "Does the woman either have known COVID-19, or symptoms of cough, fever of or above 37.8 degrees?",
  no: {
    text: "No further action - usual care.",
  },
  yes: {
    text:
      "Give the woman surgical (non FFP3) face mask and ask to put on, accompany to designated isolation room or area for initial assessment & use full PPE and infection control measures.",
    ok: {
      text:
        "Does the women have an emergency obstetric issue, or is she in labour?",
      yes: {
        text:
          "Alert designated local team, midwife co-ordinator, obstetric consultant on call and neonatal team. MW and Obstetric Dr review within 30 minutes.",
        ok: {
          text: "Does she require admission to hospital?",
          yes: {
            text:
              "Discuss with local designated COVID-19 team regarding best place of care. Test woman for COVID-19. Treat as though confirmed case until results of swabs available.",
          },
          no: {
            text:
              "Advise to take own personal transport home immediately and self-isolate for seven days, or attend the hospital’s designated containment area for next action. Rebook any appointment after seven days and send by post.",
          },
        },
      },
      no: {
        text:
          "Advise to take own personal transport home immediately and self-isolate for seven days, or attend the hospital’s designated containment area for next action. Rebook any appointment after seven days and send by post.",
      },
    },
  },
};

type Screen = {
  text: string;
  yes?: Screen;
  no?: Screen;
  ok?: Screen;
};

export default function AssessRisk() {
  const [screen, setScreen] = useState(questionTree);

  return (
    <ScrollView
      style={{
        padding: 16,
        flex: 1,
        flexDirection: "column",
      }}
    >
      <View style={{ flex: 1, justifyContent: "center" }}>
        <>
          <Card style={{ padding: 32, marginBottom: 16, marginTop: 32 }}>
            <Text style={{ fontSize: 18 }}>{screen.text}</Text>
            {/* <Card.Actions> */}

            {/* </Card.Actions> */}
          </Card>

          {screen.yes && (
            <Button
              onPress={() => (screen.yes ? setScreen(screen.yes) : null)}
              mode="contained"
              style={{ marginBottom: 8, paddingVertical: 8 }}
            >
              Yes
            </Button>
          )}
          {screen.ok && (
            <Button
              onPress={() => (screen.ok ? setScreen(screen.ok) : null)}
              mode="contained"
              style={{ marginBottom: 8, paddingVertical: 8 }}
            >
              Okay
            </Button>
          )}
          {screen.no && (
            <Button
              onPress={() => (screen.no ? setScreen(screen.no) : null)}
              mode="contained"
              style={{ marginBottom: 8, paddingVertical: 8 }}
            >
              No
            </Button>
          )}
          {screen.text !== questionTree.text && (
            <Button
              color="#B00020"
              onPress={() => setScreen(questionTree)}
              mode="contained"
              style={{ marginBottom: 8, paddingVertical: 8 }}
            >
              Reset
            </Button>
          )}
        </>
      </View>
    </ScrollView>
  );
}
