import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

// import Button from "./Button";

const stories = storiesOf("Button", module);

stories.add("primary", () => (
  <button onClick={action("click")}>{text("Label", "Primary button")}</button>
));
//   .add("with round corners", () => (
//     <Button
//       label="Rounded Button"
//       onClick={action("click")}
//       style={{ borderRadius: "15px" }}
//     />
//   ));
