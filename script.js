const myLibrary = [];
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const formSubmit = document.getElementById("submit");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});


formSubmit.addEventListener("click", addBookToLibrary, true);

function Book() {

}

function addBookToLibrary(event) {
    event.preventDefault(); // Prevents the default form submission behavior
  
    var name = document.getElementById("name").value;
    var author = document.getElementById("author").value;
    var pages = document.getElementById("pages").value;
  
    const book = [];
    book.push(name);
    book.push(author);
    book.push(pages);
    displayBooks(book);
    myLibrary.push(book);

    document.getElementById("name").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";

  }


function displayBooks(array) {
    
        // Get the table body element in which you want to add row
        let table = document.getElementById("tableBody");
    
        // Create row element
        let row = document.createElement("tr")
        
        for (let i=0; i < array.length; i++){
            // Create cells
            let c1 = document.createElement("td")
            
            // Insert data to cells
            c1.innerText = array[i]

            // Append cells to row
            row.appendChild(c1);
        }
        // Append row to table body
        table.appendChild(row)
}





