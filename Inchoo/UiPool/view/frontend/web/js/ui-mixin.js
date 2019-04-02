define(function () {
    'use strict';
    console.log("Called this Hook.");
    return function(targetModule){
        return targetModule.extend({
            getCat:function()
            {
                var result = this._super();

                console.log(result, 'Extendano');

                return result;
            }
        });
    };
});

