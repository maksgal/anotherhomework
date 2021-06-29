import DB from "../server/DB.js";

const addRemoveButton = (elementId, parent) => {
  const removeButton = document.createElement("button");
  removeButton.classList.add("remove");
  removeButton.innerText = "Удалить";
  removeButton.onclick = async () => {
    await fetch(`${DB}/${elementId}`, {
      method: "DELETE",
      mode: "cors",
    });
  };
  parent.appendChild(removeButton);
};

export default addRemoveButton;
