import { createForm } from "./formFactories.js";
import "./form.css"
let body = document.querySelector("body");
const form = createForm();
body.appendChild(form);