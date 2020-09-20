import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StoriesHome } from "./StoriesHome";
import ButtonStories from "../src/Button/Button.stories";
import { Stack } from "./navigation";

export function StoriesContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={StoriesHome}
          options={{ headerTitle: "Compact design" }}
        />
        <Stack.Screen name="Button" component={ButtonStories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
