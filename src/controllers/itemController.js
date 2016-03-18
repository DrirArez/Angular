/**
 * Created by Don_kiki on 11/03/2016.
 */
'use strict';
app
.controller('itemList', function($scope, itemProvider){
    $scope.items = itemProvider.getItems() ;
})

.controller('itemCreate', function($scope, categoryProvider, itemProvider){
   
    $scope.categories = categoryProvider.getCategories();
    $scope.items = itemProvider.getItems();
    $scope.createItem = function (item) {
         $scope.items = itemProvider.create(item);
    }
})


.controller('itemIndex', function($scope){

})

.controller('itemRemove', function($scope){

});