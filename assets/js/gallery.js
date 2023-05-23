console.log("Chips")

// MODAL LOGIC

const openMovie = document.getElementById('movie-modal-open');
const closeMovie = document.getElementById('movie-modal-close');
const movieModal = document.getElementById('movie-modal');

openMovie.addEventListener("click", () => {
    movieModal.showModal();
})

closeMovie.addEventListener("click", () => {
    movieModal.close();
})