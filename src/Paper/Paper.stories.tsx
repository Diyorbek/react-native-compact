import React from "react";
import { Text, View } from "react-native";
import { Box } from "../StoryBookUtility";
import { Paper } from "./Paper";

const Wrapper = (props: any) => (
  <View style={{ marginTop: 24, width: 100, height: 100 }}>
    {props.children}
  </View>
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
      <Box w={24} h={24} />
      <View
        style={{
          justifyContent: "space-around",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Wrapper>
          <Paper>
            <Box w={100} h={100} />
          </Paper>
        </Wrapper>

        <Wrapper>
          <Paper elevation="low">
            <Box w={100} h={100} />
          </Paper>
        </Wrapper>

        <Wrapper>
          <Paper elevation="medium" borderRadius={6}>
            <Box w={100} h={100} />
          </Paper>
        </Wrapper>

        <Wrapper>
          <Paper elevation="high" borderRadius={6}>
            <Box w={100} h={100} />
          </Paper>
        </Wrapper>
      </View>
    </View>
  );
}
