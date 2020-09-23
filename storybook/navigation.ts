import { createStackNavigator } from "@react-navigation/stack";

export type StoryComponentName = "Button" | "Paper" | "Typography";

export type RootStackParamList = Record<StoryComponentName | "Home", any>;

export const Stack = createStackNavigator<RootStackParamList>();
