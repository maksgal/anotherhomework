import addUpdateButton from "./Update.js";
import addRemoveButton from "./Remove.js";

const fetchAndShow = async (DB, input) => {
  const list = document.createElement("ul");
  container.appendChild(list);

  const dataList = await (await fetch(DB)).json();
  dataList.map((el, index) => {
    const listItem = document.createElement("li");
    listItem.innerText = `${index + 1}: ${el.text}`;
    list.appendChild(listItem);

    addRemoveButton(el.id, list);

    addUpdateButton(el.id, list, input);
  });
};

export default fetchAndShow;
