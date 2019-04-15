define(['uiComponent', 'Inchoo_UiPool/js/Primjer3/state'], function (Component, state) {
    'use strict';

    return Component.extend({
        defaults: {},
        increment: function () {
            return state.increment;
        },
        incrementUpdate: function () {
            state.counter = state.counter + state.increment;
        }
    });
});