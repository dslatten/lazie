/* ========================================================================== *\
    Execute immediately
\* ========================================================================== */

(function() {

    console.log('init-a.js is executing...')

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
            samples: [
                '/app/samples'
            ],

            // CDN-hosted 3rd-party libs + local fallbacks
            jQuery: [
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

        callback: function($, ko) {
            require(['jQuery', 'knockout', 'require'],
            function($, ko, require) {
                require(['app/main-a']);
            })
        }

    };

}());

console.log('Immediately-invoked function is finished.');

/* ========================================================================== *\
    Execute on page load
\* ========================================================================== */

var lazyFunction = function() {

    console.log('lazyFunction is executing...');

    // Load RequireJS
    var s = document.createElement('script');
    s.type = 'text/javascript';
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