/**
 * Created by Don_kiki on 12/03/2016.
 */
'use strict';

var items  = [
    {'name' : 'Django Unchained', 'category_id' : '1'},
    {'name' : 'Forest Gump', 'category_id' : '1'},
    {'name' : 'Scarface', 'category_id' : '1'},
    {'name' : 'Boulbi', 'category_id' : '2'},
    {'name' : 'Duc de boulogne', 'category_id' : '2'}

];

app.service('itemProvider',function(){
    this.getItems = function(){
        return items ;
    }
    
    this.create = function(item){
        items.push(item);
        
        return items;
    }
});