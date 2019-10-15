import { configure as configure1 } from "@storybook/react";
import requireContext from "require-context.macro";

import * as Enzyme from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";

// automatically import all files ending in *.stories.js
const req = requireContext("../src/components", true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure1(loadStories, module);

// configure enzyme with adapter
Enzyme.configure({ adapter: new ReactSixteenAdapter() });
