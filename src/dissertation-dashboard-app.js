import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
 
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

async function mountWithError(props) {
 throw new Error("Dashboard failed to mount");
}

export const bootstrap = lifecycles.bootstrap;
export const mount = mountWithError;
export const unmount = lifecycles.unmount;

