let app = angular.module("alien",[])

app.controller('Quotes',($scope,$http) => {
    $scope.url = '../assets/quotes.json'
        $scope.quoteInfo = `"Whatever the mind of man can conceive and believe, it can achieve."`
        $scope.quoteAuthor = `Napoleon Hill`
})

// Custom Cursor
var cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('cursorhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('cursorhover')
});

// Preloader
const preloader = document.querySelector('[preloader]')

window.onloadstart = loadPreloader()
window.onload = loadPreloader()

function loadPreloader(){
  preloader.classList.add('active');
  setTimeout(() => {
    preloader.classList.remove('active');
  },1000)
}

// Checkers
const checkers = document.querySelectorAll('[checkers]');
checkers.forEach((index) => {
  index.style.display = 'none'
})