import { useNavigation } from "@react-navigation/native";
import React, { ReactNode, useEffect } from "react";
import { View } from "react-native";
import { Typography, TypographyProps } from "../lib/src/typography/Typography";
import { StoryComponentName } from "./navigation";

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
  caption?: ReactNode;
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
      <View
        style={{
          marginTop: title ? 5 : undefined,
          marginBottom: caption ? 5 : undefined,
        }}
      >
        {children}
      </View>
      {caption}
    </View>
  );
}

export function Caption(props: TypographyProps) {
  return (
    <Typography
      variant="caption-13"
      color="placeholder"
      fontWeight="semiBold"
      {...props}
    />
  );
}
