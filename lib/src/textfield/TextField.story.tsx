import * as React from "react";
import { Box } from "../box/Box";
import { TextField } from "./TextField";
import { Caption, Presentation } from "../../../storybook/StoryBookUtility";

export default function TextFieldStories() {
  return (
    <Box flex={1} backgroundColor="white" padding={6}>
      <Box maxWidth={360}>
        <Presentation title='variant="outlined" (default)'>
          <TextField />
        </Presentation>
        <Presentation title='variant="filled"'>
          <TextField variant="filled" />
        </Presentation>
        <Presentation title='helperText="Something odd"'>
          <TextField helperText="Something odd" />
        </Presentation>
        <Presentation
          title={
            <>
              <Caption>{`error={true}`}</Caption>
              <Caption>helperText="Something wrong"</Caption>
            </>
          }
        >
          <TextField error={true} helperText="Something wrong" />
        </Presentation>
      </Box>
    </Box>
  );
}
