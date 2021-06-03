const message = document.querySelector('#message')

function addMovie(event){
    event.preventDefault();
    let inputField = document.querySelector('input')

    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.addEventListener('click', crossOffMovie);

    movieTitle.textContent = inputField.value;

    movie.appendChild(movieTitle);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);



    const list = document.querySelector('ul');

    list.appendChild(movie);

    inputField.value = "";






}

const form = document.querySelector('form');

form.addEventListener('submit', addMovie);



function deleteMovie(event){
    event.target.parentNode.remove();
    message.textContent = 'Movie deleted!'

}

function crossOffMovie(event){
    event.target.classlist.toggle('checked');
    if (event.target.classlist.contains('checked') === true){
        message.textContent = 'Movie Watched'
    }
    else{
        message.textContent = 'Movie added back'
    }

};
