//take form submit
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');


const generateTemplate = todo => {
    html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>`

    return list.innerHTML += html;
}    

const filterTodos = term => {

    // add filtered class
    Array.from(list.children)
        .filter(todo => !todo.textContent.includes(term))
        .forEach(todo => todo.classList.add('filtered'))

    // remove filtered class
    Array.from(list.children)
        .filter(todo => todo.textContent.includes(term))
        .forEach(todo => todo.classList.remove('filtered'))
}

// add todos event
addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const todo = addForm.add.value.trim();

    if(todo.length){
        generateTemplate(todo);
        //clear form from last input
        addForm.reset();
        }

})

// delete todos event
list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }

})

// filter todos event
search.addEventListener('keyup', () => {
    // console.log(search.value);
    filterTodos(search.value)
})
