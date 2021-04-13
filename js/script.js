const darkButton = document.querySelector(".dark");
const cancelButton = document.querySelector(".cancel");
const newButton = document.querySelector(".new");
const saveButton = document.querySelector(".save");
const list = document.querySelector(".lst"); 
  
const notesArray = [{title:"note one", body:"this is my first note"}];

function changeBG() {
    darkButton.classList.toggle("dark_mode4");
    cancelButton.classList.toggle("dark_mode4");
    saveButton.classList.toggle("dark_mode4");
    newButton.classList.toggle("dark_mode4");
    document.querySelector(".textarea").classList.toggle("dark_mode1");
    document.querySelector(".aside").classList.toggle("dark_mode1");
    document.querySelector(".body").classList.toggle("dark_mode2");
    document.querySelector(".header").classList.toggle("dark_mode2");

    if (darkButton.innerHTML === "Light Theme")
    {
        darkButton.innerHTML = "Dark Theme"
    } else {
        darkButton.innerHTML = "Light Theme"
    }
}

let textareaVisible = true;
function hide() {
    cancelButton.style.visibility = "hidden";
    document.querySelector(".textarea").style.visibility = "hidden";
    saveButton.style.visibility = "hidden";
    textareaVisible = false;
}

function newNote() 
{ 
    if (textareaVisible === false)
    {
        cancelButton.style.visibility = "visible";
        document.querySelector(".textarea").style.visibility = "visible";
        saveButton.style.visibility = "visible";
        textareaVisible = true;
    } else
    {
        document.querySelector(".textarea").value="";
    }
}

function addList()
{
    userTitle = prompt("Enter the title of your note: ")
    userContent = document.getElementById("content").value;
    notesArray.push({title:`${userTitle}`, body:`${userContent}`})
    let elem = document.createElement("li");
    let text = document.createTextNode(userTitle);
    elem.appendChild(text);
    list.appendChild(elem);
}
  
function diaplayContent(event)
{
    noteTitle = event.target.textContent;     
    
    for (let i = 0; i < notesArray.length; ++i){
        if (notesArray[i].title === noteTitle) {
            let noteContent = notesArray[i].body;
            const displayArea = document.getElementById("content");
            displayArea.value = noteContent
        }
    }
}

darkButton.addEventListener("click", changeBG);
cancelButton.addEventListener("click", hide);
newButton.addEventListener("click", newNote);
saveButton.addEventListener("click", addList);
list.addEventListener("click", diaplayContent);




