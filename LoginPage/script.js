const username = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
// Create a Data Base
let BDD = [];
// Hash function
function stringToHash(string) {

    let hash = 0;

    if (string.length == 0) return hash;

    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }

    return hash;
}
// Submit the result
submit.addEventListener("click", () => {
    // Clean string
    user = username.value.trim();
    pass = password.value.trim();
    // Min 8 character for user & pass
    if(user.length > 8 && pass.length > 8){
        const newItem = {name: user, secretWord: stringToHash(pass)}
        BDD.push(newItem);
        username.value = "";
        password.value = "";
    }
})
