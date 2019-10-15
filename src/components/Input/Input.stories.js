import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object } from "@storybook/addon-knobs/react";

import Input from "./Input";

export const input = {
  type: "text",
  placeholder: "placeholder text"
};

storiesOf("Input", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    return <Input input={object("input", { ...input })} />;
  });
