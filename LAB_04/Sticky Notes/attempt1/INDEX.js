//**************************************************************/
    // Creating the note input text field
const addNewNote = document.querySelector(".Add-new-note-btn");

addNewNote.addEventListener("click",function (event){
    event.preventDefault();
    displayForm()
})

function displayForm(){
    const form = document.createElement("form");
    form.setAttribute("id", "note-form");
    // creating text area
    const textArea = document.createElement("textarea");
    textArea.setAttribute("placeholder", "Add note");
    //create add note button
    const button = document.createElement("button")
    button.setAttribute("class", "submit-note btn-state");
    button.setAttribute("id", "add-note");
    button.textContent = "Add note";
    // add textarea and button element to form created
    form.append(textArea, button);
    document.body.appendChild(form);
}
//**************************************************************/


//**************************************************************/
const postNoteBtn = document.querySelector("#add=note");
prostNoteBtn.addEventListener("click", function (x){
    x.preventDefault();
    postNoteBtn("")
})


//**************************************************************/