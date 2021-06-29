import DB from "../server/DB.js";

const addAddButton = (parent, input) => {
  const addButton = document.createElement("button");
  addButton.innerText = "Добавить";
  addButton.onclick = async () => {
    if (input.value) {
      await fetch(DB, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: input.value }),
      });
    }
  };
  parent.appendChild(addButton);
};

export default addAddButton;
