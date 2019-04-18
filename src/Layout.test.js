import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import sinon from "sinon";
import ReactDOM from "react-dom";
import Layout from "./Layout";
import Button from "./Button";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/* it("renders without crashing", () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper).toBeTruthy();
}); */

it("state.loggedIn should be true after logIn button is clicked", () => {
    const wrapper = mount(<Layout />);
    const mockEvt = { target: { id: "logIn" } };

    const btn = wrapper
        .find(Button)
        .find('[id="logIn"]')
        .first();
    btn.simulate("click", mockEvt);

    expect(wrapper.state().loggedIn).toBe(true);
});

it("state.loggedIn should be false after logOut button is clicked", () => {
    const wrapper = mount(<Layout />);
    const mockEvt = { target: { id: "logOut" } };

    const btn = wrapper
        .find(Button)
        .find('[id="logOut"]')
        .first();
    btn.simulate("click", mockEvt);

    expect(wrapper.state().loggedIn).toBe(false);
});
