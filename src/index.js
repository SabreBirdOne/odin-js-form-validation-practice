import { createForm } from "./formFactories.js";

let body = document.querySelector("body");
const form = createForm();
body.appendChild(form);