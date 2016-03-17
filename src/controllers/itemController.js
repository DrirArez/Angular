/**
 * Created by Don_kiki on 11/03/2016.
 */
'use strict';

app.controller('itemList', function($scope, itemProvider){
    $scope.items = itemProvider.getItems() ;
});


app.controller('itemIndex', function($scope){
    $scope.test = 'toto';
});


app.controller('itemCreate', function($scope){

    $scope.test = 'toto';
});

app.controller('itemRemove', function($scope){
    $scope.test = 'toto';
});