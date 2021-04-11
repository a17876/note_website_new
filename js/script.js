const darkButton = document.querySelector(".dark");
const cancelButton = document.querySelector(".cancel");
const newButton = document.querySelector(".new");
const saveButton = document.querySelector(".save");
const notesArray = [{title:"note one", body:"this is my first note"}];

function changeBG() {
    document.querySelector(".dark").classList.toggle("dark_mode1");
    document.querySelector(".cancel").classList.toggle("dark_mode1");
    document.querySelector(".save").classList.toggle("dark_mode1");
    document.querySelector(".new").classList.toggle("dark_mode1");
    document.querySelector(".textarea").classList.toggle("dark_mode1");
    document.querySelector(".aside").classList.toggle("dark_mode1");
    document.querySelector(".body").classList.toggle("dark_mode2");
    document.querySelector(".header").classList.toggle("dark_mode2");

    if (darkButton.innerHTML === "Light Theme"){
        darkButton.innerHTML = "Dark Theme"
    } else {
        darkButton.innerHTML = "Light Theme"
    }
}

let textareaVisible = true;
function hide() {
    document.querySelector(".cancel").style.visibility = "hidden";
    document.querySelector(".textarea").style.visibility = "hidden";
    document.querySelector(".save").style.visibility = "hidden";
    textareaVisible = false;
}

function newNote() {
    if (textareaVisible === false)
    {
        document.querySelector(".cancel").style.visibility = "visible";
        document.querySelector(".textarea").style.visibility = "visible";
        document.querySelector(".save").style.visibility = "visible";
    } else
    {
        document.querySelector(".textarea").value="";
    }
}

function addList(){
    userTitle = prompt("Enter the title of your note: ")
    userContent = document.getElementById("content").value;
    notesArray.push({title:`${userTitle}`, body:`${userContent}`})

    const list = document.querySelector(".lst");
    let elem = document.createElement("li");
    let text = document.createTextNode(userTitle);
    elem.appendChild(text);
    list.appendChild(elem);
}


darkButton.addEventListener("click", changeBG);
cancelButton.addEventListener("click", hide);
newButton.addEventListener("click", newNote);
saveButton.addEventListener("click", addList);

const cancelButton = document.querySelector(".cancel");






