// Declare variable with id in HTML
const userInput = document.getElementById("item");
const submitButton = document.querySelector("input[type='submit'");
const list = document.getElementById("list");
// Create a function for add item in list
const addItemToList = () => {
    const userValue = userInput.value.trim();

    if (userValue !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = userValue;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "delete";
        deleteButton.style.marginLeft = "20px";

        deleteButton.addEventListener("click", () => {
            list.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
        userInput.value = "";
    } else {
        alert("Please enter an item.");
    }
};

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    addItemToList();
});
