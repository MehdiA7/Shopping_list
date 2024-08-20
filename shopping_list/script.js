const input = document.getElementById("input");
const saveButton = document.getElementById("saveButton");
const shoppingList = document.getElementById("shoppingList");

const addItemToList = () => {
    const cleanInput = input.value.trim();

    if (cleanInput !== "") {
        // item
        const itemValue = document.createElement("li");
        itemValue.textContent = cleanInput;
        
        // delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.style.marginLeft = "10px";

        deleteButton.addEventListener("click", () => {
            shoppingList.removeChild(itemValue);
            shoppingList.removeChild(deleteButton);
        })
        itemValue.appendChild(deleteButton);
        shoppingList.appendChild(itemValue);
        
        input.value  = ""; 
    }

};

saveButton.addEventListener("click", (event) => {
    event.preventDefault(); 
    addItemToList()
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        addItemToList();    
    }
});