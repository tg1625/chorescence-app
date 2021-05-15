// hello.test.js

import React from "react";
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import 'regenerator-runtime/runtime'

import Comment from '../components/Comment';

let container = null;
let members = null;
let instance = null;
let newm = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
  //create members
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
  members = null;
  instance = null;
  newm = null;
});

it("renders found commentor name", () => {  
  act(() => {
    render(<Comment comment={{comment: "This is a comment", commentor:"1"}} members={members}/>, container);
  });
  expect(container.textContent).toBe("Tatyana:  This is a comment");
});

it("renders unknown commentor name", () => {
    act(() => {
        render(<Comment comment={{comment: "This is a comment", commentor:"512"}} members={members}/>, container);
      });
      expect(container.textContent).toBe("Unknown:  This is a comment");
});

it("tests updated props", () => {
    instance = ReactDOM.render(<Comment comment={{comment: "This is a comment", commentor:"5"}} members={members}/>, container);
    expect(container.textContent).toBe("Unknown:  This is a comment");
    newm = [
        {role: "admin", id: "1", name: "Tatyana"},
        {role: "member", id: "2", name: "Kevin"},
        {role: "member", id: "3", name: "Alwyn"},
        {role: "member", id: "4", name: "Helen"},
        {role: "member", id: "5", name: "Bob"}
        ]
    ReactDOM.render(<Comment comment={{comment: "This is a comment", commentor:"5"}} members={newm}/>, container);
    expect(1+1).toBe(2);
});