import { useNavigation } from "@react-navigation/native";
import React, { ReactNode, useEffect } from "react";
import { View } from "react-native";
import { Typography } from "../lib/src/typography/Typography";
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

export function Presentation({
  title,
  caption,
  children,
}: {
  title?: string;
  children: ReactNode;
  caption?: string;
}) {
  return (
    <View style={{ marginVertical: 10 }}>
      {title && (
        <Typography
          variant="caption-13"
          color="textSecondary"
          fontWeight="semiBold"
        >
          {title}
        </Typography>
      )}
      <View style={{ marginTop: title && 5, marginBottom: caption && 5 }}>
        {children}
      </View>
      {caption && (
        <Typography
          variant="caption-13"
          color="placeholder"
          fontWeight="semiBold"
        >
          {caption}
        </Typography>
      )}
    </View>
  );
}
