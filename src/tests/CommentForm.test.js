// hello.test.js

import React from "react";
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import 'regenerator-runtime/runtime';
import axios from 'axios'
import { shallow, mount } from 'enzyme';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import CommentForm from '../components/CommentForm';

jest.mock('axios');
Enzyme.configure({adapter: new Adapter() });

let container = null;
let taskId = null;
let groupId = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);

});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  taskId = null;
  groupId = null;
});

describe('CommentForm', () => {
  it("test render", () => {
    render(<CommentForm taskId="1" groupId="1" />, container );
    expect(document.getElementsByTagName("BUTTON")).toBeDefined();
    expect(document.getElementsByTagName("FORM")).toBeDefined();
    expect(document.getElementsByTagName("INPUT")).toBeDefined();
  })
  it("test submit form", async () => {
    const button = shallow(<CommentForm groupId="1" taskId="1"/>);
    button.update();
    console.log(button.html());
    button.find('#submit').simulate('click');
  })
});



