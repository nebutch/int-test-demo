import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import sinon from "sinon";
import ReactDOM from "react-dom";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/* it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
}); */
it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
});
