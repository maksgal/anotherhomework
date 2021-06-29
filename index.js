import addAddButton from "./components/Add.js";
import fetchAndShow from "./components/Show.js";
import DB from "./server/DB.js";

const container = document.getElementById("container");

const input = document.createElement("input");
container.appendChild(input);

addAddButton(container, input);

const list = document.createElement("ul");

container.appendChild(list);

fetchAndShow(list, DB, input);
