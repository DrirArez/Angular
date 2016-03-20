'use strict';

var items = [
    {'name': 'Django Unchained', 'category_id': 1},
    {'name': 'Forrest Gump', 'category_id': 1}
];

app.service('itemProvider', function ($firebase) {

    var ref =  new Firebase("https://popping-inferno-6997.firebaseio.com/");

    var sync = $firebase(ref).$asObject;

    sync.$set('items', items);

    this.getItems = function () {
        return items;
    };

    this.create = function (item) {
        items.push(item);

        return items;
    }
});