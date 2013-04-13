/* ========================================================================== *\
    Execute immediately
\* ========================================================================== */

(function() {

    // Avoid errors in browsers that don't support console.log()
    if ( ! window.console ) console = { log: function() {} };

    console.log('Begin init-b.js IIFE');

    // RequireJS config
    require = {

        enforceDefine: false,

        baseUrl: './',

        paths: {

            // RequireJS loader plugins
            text: [
                'lib/require-text/text'
            ],

            // Durandal modules
            durandal: [
                'lib/durandal'
            ],
            samples: [
                'app/samples'
            ],

            // CDN-hosted 3rd-party libs + local fallbacks
            jquery: [
                '//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min',
                'lib/jquery/jquery'
            ],
            knockout: [
                '//cdnjs.cloudflare.com/ajax/libs/knockout/2.2.1/knockout-min',
                'lib/knockout/knockout'
            ],
            sammy: [
                '//cdnjs.cloudflare.com/ajax/libs/sammy.js/0.7.4/sammy.min',
                'lib/sammy/sammy'
            ]

        },

        shim: {
            'sammy': {
                deps: ['jquery'],
                exports: 'Sammy'
            }
        }

    };

}());

console.log('End init-b.js IIFE');


/* ========================================================================== *\
    Execute on page load
\* ========================================================================== */

var lazyFunction = function() {

    console.log('Begin init-b.js lazyFunction');

    // Load RequireJS
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'lib/require/require.js';
    s.setAttribute('data-main', 'app/main-b');
    document.getElementsByTagName('head')[0].appendChild(s);

    console.log('End init-b.js lazyFunction');

}


/* ========================================================================== *\
    Attach lazyFunction() to onload event
\* ========================================================================== */

var oldOnload = window.onload;
if (typeof window.onload != 'function') {
    window.onload = function() {
        console.log('window.onload');
        lazyFunction();
    }
}
else {
    window.onload = function() {
        console.log('window.onload');
        lazyFunction();
        if (oldOnload) {
            oldOnload();
        }
    }
}