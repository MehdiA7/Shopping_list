const username = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    user = username.value.trim();
    pass = password.value.trim();

    if(user.lenght > 8){
        console.log("AMAZING")
    }
})

const checkData = () => {

}