define(['durandal/app', 'durandal/viewLocator', 'durandal/system', 'durandal/plugins/router2', 'jquery'],
function (app, viewLocator, system, router, $) {

    system.debug(true);

    app.title = 'Durandal Samples';

    app.start().then(function() {

        viewLocator.useConvention('app/viewmodels', 'app/views');

        router.useConvention();

        app.adaptToDevice();
        app.setRoot('app/samples/shell2');

    });

});