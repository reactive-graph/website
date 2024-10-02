import "../node_modules/@reactive-graph/design/build/css/reactive-graph.css";
import "./base.css"
import "./layout.css"
import "./molecules.css"
import _ from "../node_modules/underscore";

const checkHeader = _.throttle(() => {
  // let scrollPosition = Math.round(window.scrollY);
  if (window.scrollY > 100) {
    document.querySelector("header").classList.add("sticky");
  } else {
    document.querySelector("header").classList.remove("sticky");
  }
}, 300);

window.addEventListener("scroll", checkHeader)
