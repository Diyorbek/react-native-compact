import { createStackNavigator } from "@react-navigation/stack";

export type StoryComponentName = "Button" | "Paper";

export type RootStackParamList = Record<StoryComponentName | "Home", any>;

export const Stack = createStackNavigator<RootStackParamList>();
