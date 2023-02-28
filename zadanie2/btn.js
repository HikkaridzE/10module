const button = document.querySelector("button");

button.addEventListener('click', () => {
   alert( 'Ваш размер экрана ' + screen.width + 'x' + screen.height);
});