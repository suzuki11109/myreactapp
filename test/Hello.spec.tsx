import * as React from "react";
import {expect} from "chai";
import {shallow} from "enzyme";

import Hello from "../src/Hello";

describe("Hello", () => {
  it("renders Hello", () => {
    let component = shallow(<Hello />);

    expect(component).to.contain(<h1>Hello</h1>);
  });
});
