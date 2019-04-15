define(['uiComponent', 'Inchoo_UiPool/js/Primjer3/state'], function (Component, state) {
    'use strict';

    return Component.extend({
        defaults: {},
        value: function () {
            return state.counter;
        }
    });
});