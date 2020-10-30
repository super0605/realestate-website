// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'babel-polyfill';

configure({ adapter: new Adapter() });

/**
 * Set up DOM in node.js environment for Enzyme to mount to
 */

const fetch = require("node-fetch");

const { JSDOM } = require("jsdom");

const jsdom = new JSDOM(
  '<!doctype html><html><body><div id="app-root"></div></body></html>'
);
const { window } = jsdom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;
global.fetch = fetch;

Object.defineProperty(global.window, "getComputedStyle", {
  value: () => {
    return {
      "padding-left": 20,
      "padding-right": 20,
    };
  },
});

global.navigator = {
  userAgent: "node.js",
};
global.requestAnimationFrame = function(callback) {
  return setTimeout(callback, 0);
};
global.cancelAnimationFrame = function(id) {
  clearTimeout(id);
};

global.matchMedia = global.matchMedia || function() {
  return {
      matches : false,
      addListener : function() {},
      removeListener: function() {}
  }
}
copyProps(window, global);
