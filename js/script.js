const darkButton = document.querySelector(".dark");

function darkTheme(){
    document.body.style.backgroundColor = "#191724";
    document.querySelector('header').style.backgroundColor = "#191724";
    document.querySelector('header').style.color = "#e0def4";
    document.querySelector('footer').style.color = "#e0def4";
    document.querySelector('aside').style.backgroundColor = "#1f1d2e";
    document.querySelector('textarea').style.backgroundColor = "#1f1d2e";
    document.querySelector('textarea').style.color = "#e0def4";
}

darkButton.addEventListener("click", darkTheme);









// //- Button click function
// function button(){
//     using toggle, 
//     return true when the button is clicked 
// }

// //- Dark Theme
// function darkTheme(){
//     if (dark_theme button function === True){
//         when Button function return true, 
//         change main background color, 
//         change main color, 
//         change sidebar background color, 
//         change sidebar color, 
//         change buttons background color, 
//         change buttons color, 
//         change buttons value to "Light Theme",
// }

// // - Cancel
// function cancel(){
//     if (cancel button function === True){
//         hide textarea 
//         hide save button
//         hide cancel button 
//     }
// }

// // - declare array
// let noteArray = {title:"note one", body:"this is my first note"}

// // - Save
// function save(){
//     if (save button function === True){
//         alert - ask the title of the note
//         add the title and contents to the note Array
//         add a list item to the sidebar
//     }
// }
// // - New Note
// function newNote(){
//     make visible - hidden textarea 
//     make visible - buttons 
//     if (click again){
//         clear the textarea
//     }
// }

// // - list of sidebar
// function display(){
//     if (a list of title in the side bar is clicked){
//         search the title in the Array of "title"(using loop)
//         display the title
//         display the text contents
//     }
// }