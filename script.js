const myLibrary = [];


function Book() {

}

function addBookToLibrary() {
    var name = document.getElementById("name").value;
    var author = document.getElementById("author").value;
    var pages = document.getElementById("pages").value;

    const book = [];
    book.push(name);
    book.push(author);
    book.push(pages);
    displayBooks(book);
    myLibrary.push(book);
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





