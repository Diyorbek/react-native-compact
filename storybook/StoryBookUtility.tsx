import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View } from "react-native";
import { StoryComponentName } from "./navigation";

export const Box = ({ w, h }: { w: number; h: number }) => (
  <View style={{ height: h, width: w }} />
);

export const StoryContainer = ({ children }: any) => (
  <View style={{ flex: 1, padding: 24, backgroundColor: "white" }}>
    {children}
  </View>
);

export function useOpenStory(name: StoryComponentName) {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate(name);
  }, []);
}
