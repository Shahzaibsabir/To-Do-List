

const ListIteamInput = document.querySelector("#ListIteamInput") //---- Input Value Get

const unOrderList = document.querySelector("ul")

function submitBtn(){

    console.log("Get data From Input Tag", ListIteamInput.value)

    const li =  `<li style="id=" "> ${ListIteamInput.value} <span>edit</span> <span>Delete</span> </li>`
    unOrderList.innerHTML += li; 
    ListIteamInput.value = "";

}