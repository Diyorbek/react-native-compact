import React from "react";
import { Text, View } from "react-native";
import { Box } from "../box/Box";
import { Typography } from "../typography/Typography";

import { Paper } from "./Paper";

const Wrapper = (props: any) => (
  <Box marginTop={6} width={100} height={100}>
    {props.children}
  </Box>
);

export default function PaperStories() {
  return (
    <View
      style={{
        flex: 1,
        padding: 24,
        backgroundColor: "white",
      }}
    >
      <Text>Paper component</Text>

      <View
        style={{
          justifyContent: "space-around",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Wrapper>
          <Paper>
            <Box width={100} height={100} />
          </Paper>
        </Wrapper>

        <Wrapper>
          <Paper elevation="low">
            <Box width={100} height={100} />
          </Paper>
        </Wrapper>

        <Wrapper>
          <Paper elevation="medium" borderRadius={6}>
            <Box width={100} height={100} />
          </Paper>
        </Wrapper>

        <Wrapper>
          <Paper elevation="high" borderRadius={6}>
            <Box width={100} height={100} />
          </Paper>
        </Wrapper>
      </View>
    </View>
  );
}
