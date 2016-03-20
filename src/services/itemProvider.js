'use strict';

app.service('itemProvider', function ($firebaseArray) {

    var ref =  new Firebase("https://popping-inferno-6997.firebaseio.com/");

    var sync = $firebaseArray(ref);

    //sync.$add('items' : items);

    this.getItems = function () {
        return items;
    };

    this.create = function (item) {
        items.push(item);

        return items;
    }
});