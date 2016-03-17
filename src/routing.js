'use strict';

app.config(function($routeProvider){
    $routeProvider
    .when('/items/', {
        controller :'itemList',
        templateUrl : 'src/views/item/list.html',
    })
});