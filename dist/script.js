let app = angular.module("alien",[])

app.controller('Quotes',($scope,$http) => {
    $scope.url = '../assets/quotes.json'
        $scope.quoteInfo = `"Whatever the mind of man can conceive and believe, it can achieve."`
        $scope.quoteAuthor = `Napoleon Hill`
})

// Custom Cursor
var cusor = document.querySelector('.cursor');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cusor.style.left = x + 'px';
  cusor.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cusor.classList.add('cusorhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cusor.classList.remove('cusorhover')
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