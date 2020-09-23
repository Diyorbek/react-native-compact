import React from "react";
import { StoryContainer } from "../../../storybook/StoryBookUtility";
import { Typography } from "./Typography";

export default function TypographyStories() {
  return (
    <StoryContainer>
      <Typography variant="title">Large Title</Typography>
      <Typography variant="h1">Header 1</Typography>
      <Typography variant="h2">Header 2</Typography>
      <Typography variant="h3">Header 3</Typography>
      <Typography variant="body-20">Body 20</Typography>
      <Typography variant="body-17">Body 17</Typography>
      <Typography variant="body-15">Body 15</Typography>
      <Typography variant="caption-13">Caption 15</Typography>
      <Typography variant="caption-11">Caption 11</Typography>
    </StoryContainer>
  );
}
