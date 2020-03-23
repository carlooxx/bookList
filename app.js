const modalBtn = document.querySelector(".modal-btn");
const modalBackground = document.querySelector(".modal-bg");
const xClose = document.querySelector(".xClose");
const addBook = document.getElementById("newbook");
const library = [];

modalBtn.addEventListener("click", function() {
  modalBackground.classList.add("bg-active");
});

xClose.addEventListener("click", function() {
  modalBackground.classList.remove("bg-active");
});

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}
document.addEventListener("click", function(event) {
  if (event.target === addBook) {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const status = document.getElementById("status").value;
    const newBook = new Book(title, author, pages, status);

    addBook.addEventListener("click", function() {
      modalBackground.classList.remove("bg-active");
      library.push(newBook);
    });
    const list = document.querySelector("tbody");
    const row = document.createElement("tr");
    document.querySelector("tbody").classList.add("rowstyle");

    row.innerHTML = `
    <th>${newBook.title}</th>
    <th>${newBook.author}</th>
    <th>${newBook.pages}</th>
    <th>${newBook.status}</th>
    <th class='delete'>X</th>
    `;
    list.appendChild(row);
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("status").value = "";
    document.addEventListener("click", function(e) {
      if (e.target.classList.value === "delete") {
        const bookToDelete = e.target.closest("tr");
        bookToDelete.remove();
      }
    });
  }
});
