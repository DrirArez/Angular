/**
 * Created by Don_kiki on 12/03/2016.
 */
'use strict';

var categories = [
    { 'id': '1' , 'name' : 'films'},
    { 'id': '2' , 'name' : 'musique'}
];

app.service('categoryProvider', function(){
    this.getCategories = function(){
        return categories;
    }
});