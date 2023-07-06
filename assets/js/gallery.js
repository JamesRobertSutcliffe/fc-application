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
const openGame = document.getElementById('game-modal-open');
const closeGame = document.getElementById('game-modal-close');
const gameModal = document.getElementById('game-modal');
const openTodo = document.getElementById('todo-modal-open');
const closeTodo = document.getElementById('todo-modal-close');
const todoModal = document.getElementById('todo-modal');
const openWeather = document.getElementById('weather-modal-open');
const closeWeather = document.getElementById('weather-modal-close');
const weatherModal = document.getElementById('weather-modal');

openWeather.addEventListener("click", () => {
    weatherModal.showModal()
})

closeWeather.addEventListener("click", () => {
    weatherModal.close()
})

openTodo.addEventListener("click", () => {
    todoModal.showModal();
})

closeTodo.addEventListener("click", () => {
    todoModal.close();
})

openTeam.addEventListener("click", () => {
    teamModal.showModal();
})

closeTeam.addEventListener("click", () => {
    teamModal.close();
})

openGame.addEventListener("click", () => {
    console.log("rightyoh")
    gameModal.showModal();
})

closeGame.addEventListener("click", () => {
    gameModal.close();
})

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







