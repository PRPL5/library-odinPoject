const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const btn = document.querySelector('#btn');
const bookList = document.querySelector('#book-list')


btn.addEventListener('click', function(e){
    if(titleInput.value === "" , authorInput.value === "" , pagesInput.value === ""){
        alert('Please fill all fields');


    }else{
        const book = document.createElement('tr');

        book.innerHTML = `
        <td>${titleInput.value}</td>
        <td>${authorInput.value}</td>
        <td>${pagesInput.value}</td>
        <td><button onclick="removeRow(this);" class="red">X</button></td>
        <td><input type="radio"></td>
         `

  


        bookList.appendChild(book);
 
    }



e.preventDefault();




});

function removeRow(button) {
    const row = button.closest('tr');
    row.remove();
}


