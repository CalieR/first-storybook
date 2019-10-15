import React from "react";
import { shallow } from "enzyme";
// import ReactDOM from "react-dom";
import Input from "./Input";
import { placeholder } from "./Input.stories";

it("renders an input with placeholder text", () => {
  const wrapper = shallow(<Input placeholder={placeholder} />);
  expect(wrapper.prop("placeholder")).to.equal("placeholder text");
});
