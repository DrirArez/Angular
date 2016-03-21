'use strict';


app.service('categoryProvider', function ($firebase) {

    var ref =  new Firebase("https://popping-inferno-6997.firebaseio.com/categories");

    var sync = $firebase(ref);



    // var itemsRef = ref.child("categories");
    //itemsRef.set(categories);

    //var sync = $firebase(ref);
    //ref.push(categories);
    //sync.$add(categories);

    this.getCategories = function () {

        return sync.$asArray();
    };

    

    this.create = function (category) {
        category['id'] = categories.length + 1;
        categories.push(category);

        return items;
    }
});