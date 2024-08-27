// Prochaine feature : Doublons et supprimer toute la liste
// Prochaine amélioration : Esthétique

const input = document.getElementById("input");
const saveButton = document.getElementById("saveButton");
const shoppingList = document.getElementById("shoppingList");
const clearAll = document.getElementById("clearAll");
// create an object array
let itemObject = [];

const addItemToList = () => {
    // hide useless space
    const cleanInput = input.value.trim();

    if (cleanInput !== "") {
        // verfication
        let itemExist = itemObject.find((item) => item.name === cleanInput);
        // add if the input exist
        if (itemExist) {
            itemExist.quantity++;
            const getCount = document.getElementById(`count_${cleanInput}`);
            getCount.textContent = itemExist.quantity;
            // create item
        } else {
            const newItem = { name: cleanInput, quantity: 1 };
            itemObject.push(newItem);
            // create item
            const itemValue = document.createElement("li");
            itemValue.textContent = cleanInput;
            // create delete button
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.id = "deleteButton";
            deleteButton.classList.add("deleteButton");
            deleteButton.style.marginLeft = "10px";
            // add event
            deleteButton.addEventListener("click", () => {
                shoppingList.removeChild(itemValue);
                itemObject = itemObject.filter(
                    (item) => item.name !== cleanInput
                );
            });
            // create - button
            const removeButton = document.createElement("button");
            removeButton.textContent = "-";
            removeButton.id = "removeButton";
            removeButton.style.marginLeft = "10px";
            // add event
            removeButton.addEventListener("click", () => {
                if (newItem.quantity > 1) {
                    newItem.quantity--;
                    count.textContent = newItem.quantity;
                } else {
                    shoppingList.removeChild(itemValue);
                    itemObject = itemObject.filter(
                        (item) => item.name !== cleanInput
                    );
                }
            });
            // create + button
            const addButton = document.createElement("button");
            addButton.textContent = "+";
            addButton.id = "addButton";
            addButton.style.marginLeft = "10px";
            // add event
            addButton.addEventListener("click", () => {
                newItem.quantity++;
                count.textContent = newItem.quantity;
            });
            // create count
            const count = document.createElement("p");
            count.textContent = newItem.quantity;
            count.id = `count_${cleanInput}`;
            count.style.marginLeft = "10px";
            // add in html
            itemValue.appendChild(removeButton);
            itemValue.appendChild(count);
            itemValue.appendChild(addButton);
            itemValue.appendChild(deleteButton);
            shoppingList.appendChild(itemValue);
        }
        // reset the input field
        input.value = "";
    }
};

saveButton.addEventListener("click", (event) => {
    event.preventDefault();
    addItemToList();
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        addItemToList();
    }
});

clearAll.addEventListener("click", () => {
    shoppingList.innerHTML = "";
    itemObject = [];
});
