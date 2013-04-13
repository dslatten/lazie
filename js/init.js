/* ========================================================================== *\
    Execute immediately
\* ========================================================================== */

(function() {

    // Load script that matches current page. Example: /dir/page.html will load /js/page.js
    var pageId = window.location.pathname.split('/').pop().replace(/\..*/, '');
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'js/' + pageId + '.js';
    document.getElementsByTagName('head')[0].appendChild(script);

}());


/* ========================================================================== *\
    Execute on page load
\* ========================================================================== */

var lazyFunction = function() {

    // RequireJS config
    require = {

        enforceDefine: false,

        paths: {

            // RequireJS loader plugins
            text: [
                '/lib/require-text/text'
            ],

            // Durandal modules
            durandal: [
                '/lib/durandal'
            ],

            // CDN-hosted 3rd-party libs + local fallbacks
            jquery: [
                '//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min',
                '/lib/jquery/jquery'
            ],
            knockout: [
                '//cdnjs.cloudflare.com/ajax/libs/knockout/2.2.1/knockout-min',
                '/lib/knockout/knockout'
            ],
            sammy: [
                '//cdnjs.cloudflare.com/ajax/libs/sammy.js/0.7.4/sammy.min',
                '/lib/sammy/sammy'
            ]

        },

        deps: ['jquery', 'knockout'],

        callback: function() {
            require(['require'], function(require) {
                require(['app/main']);
            })
        }

    };


    // Load RequireJS
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.setAttribute('data-main', 'app/main');
    s.src = 'lib/require/require.js';
    document.getElementsByTagName('head')[0].appendChild(s);

}


/* ========================================================================== *\
    Attach lazyFunction() to onload event
\* ========================================================================== */

var oldOnload = window.onload;
if (typeof window.onload != 'function') {
    window.onload = lazyFunction;
}
else {
    window.onload = function() {
        lazyFunction();
        if (oldOnload) {
            oldOnload();
        }
    }
}

