const myLibrary = [];

document.querySelector("#add_book").addEventListener("click", addBookToLibrary);


function Book() {

}

function addBookToLibrary() {
    var name = prompt("Please Enter the name of the book: ");
    var author = prompt("Please Enter the author of the book: ");
    var pages = prompt("Please enter the number of pages of the book: ");

    const book = [];
    book.push(name);
    book.push(author);
    book.push(pages);
    displayBooks(book);
    myLibrary.push(book);


}

function displayBooks(array) {
    for (let i=0; i < array.length; i++){
        document.getElementById('first').innerHTML = array[0];
        document.getElementById('second').innerHTML = array[1];
        document.getElementById('third').innerHTML = array[2];
    }
}