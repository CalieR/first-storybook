import React from "react";
import ReactDOM from "react-dom";
import Image from "./Image";
import image from "./Image.stories";

// check it renders an image

it("renders an image", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Image image={image} />, div);

  ReactDOM.unmountComponentAtNode(div);
});
