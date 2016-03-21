'use strict';


app.service('itemProvider', function ($firebase) {

    var ref =  new Firebase("https://popping-inferno-6997.firebaseio.com/");

    //var itemsRef = ref.child("items");
    //itemsRef.set(items);

     //ref.push(items);
    //var sync = $firebaseA(ref);
    
    //sync.$add(items);

    this.getItems = function () {
        return items;
    };

    this.create = function (item) {
        items.push(item);

        return items;
    }
});