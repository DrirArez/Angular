/**
 * Created by Don_kiki on 12/03/2016.
 */
'use strict';

app.directive('decorateItem', function(){
        return{
            template: 'Item "{{item.name}}" dans la categroie {{item.category_id}}'
        }
});