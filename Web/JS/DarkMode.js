
const titleElement = document.querySelector('title');
const currentTime = new Date().getHours();
const htmlElement = document.querySelector('html');


if (currentTime >= 19) {
    titleElement.classList.add('dark');
    htmlElement.classList.add('dark');
}