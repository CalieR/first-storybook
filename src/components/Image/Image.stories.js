import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object } from "@storybook/addon-knobs/react";

import Image from "./Image";

export const image = {
  url:
    "https://cdn2.f-cdn.com/contestentries/1194974/25654594/5a1e2cf9b0f8b_thumb900.jpg",
  title: "logo"
};

storiesOf("Image", module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div style={{ border: "3px solid black" }}>{story()}</div>
  ))
  .add("default", () => {
    return <Image image={object("image", { ...image })} />;
  });
