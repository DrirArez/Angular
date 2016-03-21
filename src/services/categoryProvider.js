'use strict';

var categories = [
        {'id': 1, 'name': 'films'},
        {'id': 2, 'name': 'musiques'}
    ];

app.service('categoryProvider', function ($firebaseArray) {

    var ref =  new Firebase("https://popping-inferno-6997.firebaseio.com/");

    var sync = $firebaseArray(ref);
    //ref.push(categories);
    sync.$add(categories);
    this.getCategories = function () {
        return categories;
    };

    this.create = function (category) {
        category['id'] = categories.length + 1;
        categories.push(category);

        return items;
    }
});