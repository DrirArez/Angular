'use strict';

var items = [
        {'name': 'Django Unchained', 'category_id': 1},
        {'name': 'Forrest Gump', 'category_id': 1}
    ];
app.service('itemProvider', function ($firebaseArray) {

    var ref =  new Firebase("https://popping-inferno-6997.firebaseio.com/");
    // ref.push(items);
    var sync = $firebaseArray(ref);
    
    sync.$add(items);

    this.getItems = function () {
        return items;
    };

    this.create = function (item) {
        items.push(item);

        return items;
    }
});