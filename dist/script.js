let app = angular.module("alien",[])

app.controller('Quotes',($scope,$http) => {
    $scope.url = '../assets/quotes.json'
        $scope.quoteInfo = `"Whatever the mind of man can conceive and believe, it can achieve."`
        $scope.quoteAuthor = `Napoleon Hill`
})