define([
    'ko',
    'uiComponent',
    'mage/url',
    'mage/storage',
], function (ko, Component, urlBuilder,storage) {
    'use strict';

    return Component.extend({

        initialize: function() {
            this._super();
        },

        catList: ko.observableArray([]),

        getCat: function () {
            var self = this;
            console.log(storage);
            var serviceUrl = urlBuilder.build('uipool/index/index');

            return storage.get(
                serviceUrl,
                ''
            ).done(
                function (response) {
                    self.catList.push(JSON.parse(response));
                    console.log(response, 'Success');
                }
            ).fail(
                function (response) {
                    console.log(response, "Fail");
                    console.log(serviceUrl)
                }
            );
        },

        doAfterRender: function (element) {
            console.log(element);
        }

    });
});