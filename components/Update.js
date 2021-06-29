import DB from "../server/DB.js";

const addUpdateButton = (elementId, parent, input) => {
  const updateButton = document.createElement("button");

  updateButton.innerText = "Изменить";
  updateButton.onclick = async () => {
    if (input.value) {
      await fetch(`${DB}/${elementId}`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: input.value }),
      });
    }
  };
  parent.appendChild(updateButton);
};

export default addUpdateButton;
