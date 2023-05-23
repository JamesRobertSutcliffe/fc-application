console.log("Chips")

// MODAL LOGIC

const openMovie = document.getElementById('movie-modal-open');
const closeMovie = document.getElementById('movie-modal-close');
const movieModal = document.getElementById('movie-modal');
const openWordle = document.getElementById('wordle-modal-open');
const closeWorldle = document.getElementById('wordle-modal-close');
const wordleModal = document.getElementById('wordle-modal');
const openPortfolio = document.getElementById('portfolio-modal-open');
const closePortfolio = document.getElementById('portfolio-modal-close');
const portfolioModal = document.getElementById('portfolio-modal');
const openTeam = document.getElementById('team-modal-open');
const closeTeam = document.getElementById('team-modal-close');
const teamModal = document.getElementById('team-modal');

openMovie.addEventListener("click", () => {
    movieModal.showModal();
})

closeMovie.addEventListener("click", () => {
    movieModal.close();
})

openWordle.addEventListener("click", () => {
    wordleModal.showModal();
})

closeWorldle.addEventListener("click", () => {
    wordleModal.close();
})

openPortfolio.addEventListener("click", () => {
    portfolioModal.showModal();
})

closePortfolio.addEventListener("click", () => {
    portfolioModal.close();
})

openTeam.addEventListener("click", () => {
    teamModal.showModal();
})

closeTeam.addEventListener("click", () => {
    teamModal.close();
})