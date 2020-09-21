import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StoriesHome } from "./StoriesHome";
import ButtonStories from "../lib/src/Button/Button.stories";
import { Stack } from "./navigation";
import PaperStories from "../lib/src/Paper/Paper.stories";

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
        <Stack.Screen name="Paper" component={PaperStories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
