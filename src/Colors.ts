import { useColorScheme } from "react-native";

export const LightThemeColors = {
  blue: {
    [50]: "#DEEBFF",
    [75]: "#B2D4FF",
    [100]: "#4C9AFF",
    [200]: "#2684FF",
    [300]: "#0065FF",
    [400]: "#0052CC",
    [500]: "#0747A6",
  },
  dark: {
    [50]: "#F5F7FA",
    [100]: "#DDE4EE",
    [200]: "#AFBCCF",
    [250]: "#8B96A7",
    [300]: "#636F82",
    [500]: "#141C29",
  },
  red: {
    [50]: "#FFEBE5",
    [75]: "#FFBDAD",
    [100]: "#FF8F73",
    [200]: "#FF7452",
    [300]: "#FF5630",
    [400]: "#DE350B",
    [500]: "#BF2600",
  },
  white: {
    [80]: "#FFFFFFCC",
    [100]: "#FFFFFF",
  },
};

export const DarkThemeColors = {
  blue: {
    [50]: "#DEEBFF",
    [75]: "#B2D4FF",
    [100]: "#4C9AFF",
    [200]: "#2684FF",
    [300]: "#0065FF",
    [400]: "#0052CC",
    [500]: "#0747A6",
  },
  dark: {
    [50]: "#F5F7FA",
    [100]: "#DDE4EE",
    [200]: "#AFBCCF",
    [250]: "#8B96A7",
    [300]: "#636F82",
    [500]: "#141C29",
  },
  red: {
    [50]: "#FFEBE5",
    [75]: "#FFBDAD",
    [100]: "#FF8F73",
    [200]: "#FF7452",
    [300]: "#FF5630",
    [400]: "#DE350B",
    [500]: "#BF2600",
  },
  white: {
    [80]: "#FFFFFFCC",
    [100]: "#FFFFFF",
  },
};

export function useColors() {
  const colorScheme = useColorScheme();

  if (!colorScheme) {
    return LightThemeColors;
  }

  return colorScheme === "light" ? LightThemeColors : DarkThemeColors;
}
