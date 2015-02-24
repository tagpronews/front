var app = angular.module('addNews', ['ngGrid']);

app.controller('TableCtrl', function($scope) {



    $scope.articles = [

            {headline: "This is a headline. And it is amazing!", category: "Leagues", date: "2 Feb 2015", author: "odog"},

            {headline: "Hopefully this will be a two line headline, but who knows.", category: "News", date: "25 Jan 2015", author: "odog"},

            {headline: "MLTP is disbanding!", category: "Videos", date: "30 Feb 2015", author: "odog"},

            {headline: "Streaming tips and tricks", category: "Mumble", date: "16 Mar 2015", author: "odog"},

            {headline: "Some other headline becuase I can't think of anything.", category: "General", date: "1 Feb 2015", author: "odog"}

        ];

    $scope.gridOptions = { data: 'articles' };

})
