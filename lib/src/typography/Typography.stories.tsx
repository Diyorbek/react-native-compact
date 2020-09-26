import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  Presentation,
  StoryContainer,
} from "../../../storybook/StoryBookUtility";
import { Typography } from "./Typography";

export default function TypographyStories() {
  return (
    <StoryContainer>
      <ScrollView>
        <Presentation caption='variant="title"'>
          <Typography variant="title">Large Title</Typography>
        </Presentation>
        <Presentation caption='variant="h1"'>
          <Typography variant="h1">Header 1</Typography>
        </Presentation>
        <Presentation caption='variant="h2"'>
          <Typography variant="h2">Header 2</Typography>
        </Presentation>
        <Presentation caption='variant="h3"'>
          <Typography variant="h3">Header 3</Typography>
        </Presentation>
        <Presentation caption='variant="body-20"'>
          <Typography variant="body-20">Body 20</Typography>
        </Presentation>
        <Presentation caption='variant="body-17"'>
          <Typography variant="body-17">Body 17</Typography>
        </Presentation>
        <Presentation caption='variant="body-15"'>
          <Typography variant="body-15">Body 15</Typography>
        </Presentation>
        <Presentation caption='variant="caption-13"'>
          <Typography variant="caption-13">Caption 13</Typography>
        </Presentation>
        <Presentation caption='variant="caption-11"'>
          <Typography variant="caption-11">Caption 11</Typography>
        </Presentation>
        <Presentation caption='variant="body-15" color="primary" transform="uppercase" fontWeight="semiBold"'>
          <Typography
            variant="body-15"
            color="primary"
            transform="uppercase"
            fontWeight="semiBold"
          >
            Tagline 15
          </Typography>
        </Presentation>
        <Presentation caption='variant="caption-13" color="primary" transform="uppercase" fontWeight="semiBold"'>
          <Typography
            variant="caption-13"
            color="primary"
            transform="uppercase"
            fontWeight="semiBold"
          >
            Tagline 12
          </Typography>
        </Presentation>
        <Presentation caption='variant="caption-11" color="primary" transform="uppercase" fontWeight="semiBold"'>
          <Typography
            variant="caption-11"
            color="primary"
            transform="uppercase"
            fontWeight="semiBold"
          >
            Tagline 11
          </Typography>
        </Presentation>
      </ScrollView>
    </StoryContainer>
  );
}
