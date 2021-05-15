// hello.test.js

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import 'regenerator-runtime/runtime';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import CommentSection from '../components/CommentSection';

Enzyme.configure({adapter: new Adapter() });

let container = null;
let comments = null;
let members = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
  comments = [
    {comment: "This is a comment", commentor:"1"},
    {comment: "This is another comment", commentor:"2"}
  ];
  members = [
    {role: "admin", id: "1", name: "Tatyana"},
    {role: "member", id: "2", name: "Kevin"},
    {role: "member", id: "3", name: "Alwyn"},
    {role: "member", id: "4", name: "Helen"}
    ]
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  comments = null;
  members = null;
});

describe('CommentForm', () => {
  it("test render", () => {
    render(<CommentSection taskId="1" groupId="1" members={members} comments={comments} />, container );
    expect(document.getElementsByClassName("accordion")).toBeDefined();
    expect(document.getElementsByClassName("comment")).toBeDefined();
  })
  // it("test submit form", async () => {
  //   const button = shallow(<CommentForm groupId="1" taskId="1"/>);
  //   button.update();
  //   console.log(button.html());
  //   button.find('#submit').simulate('click');
  // })
});



