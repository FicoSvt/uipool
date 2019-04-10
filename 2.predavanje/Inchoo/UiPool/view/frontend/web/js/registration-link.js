define([
    'ko',
    'uiComponent',
    'mage/url',
    'Magento_Customer/js/model/customer',
    'Magento_Customer/js/customer-data'
], function (ko, Component, urlBuilder, customer, customerData) {
    'use strict';

    return Component.extend({
        initialize: function() {
            this._super();

            // good practice
            console.log(customer);
            console.log(customer.isLoggedIn());

            //bad practice
            console.log(customerData);
            console.log(customerData.get('customer')().fullname);

            this.registrationUrl = ko.observable();

            if (!customer.isLoggedIn()) {
                this.registrationUrl = urlBuilder.build('customer/account/create');
            }
        }
    });
});