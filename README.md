# LazIE

This is a set of web pages that use a variety of implementation styles to lazy-load a single-page app. This demo was originally created for the purpose of testing how different versions of Internet Explorer handle lazy-loaded JavaScript applications (hence the name, LazIE). However, these web pages are just as suitable for testing other browsers as well, and in fact, it was eventually determined that the loading behavior--as represented by the waterfall graphs on WebPagetest.org--varies significantly between all browsers.

## Live Test Pages

This repo is hosted via github pages, and the live test pages can be reached through the following links.

- [Page A](http://darrenslatten.com/lazie/page-a.html)
- [Page B](http://darrenslatten.com/lazie/page-b.html)
- [Page C](http://darrenslatten.com/lazie/page-c.html)
- [Page D](http://darrenslatten.com/lazie/page-d.html)

## 3rd-Party Libs

This demo uses the following libraries. They can be found (with their respective licenses) under `/lib`.

<table>
    <tr>
        <th>Durandal</th>
        <td><a href="http://durandaljs.com/">Home</a></td>
        <td><a href="https://github.com/BlueSpire/Durandal">Git</a></td>
        <td></td>
    </tr>
    <tr>
        <th>Sammy</th>
        <td><a href="http://sammyjs.org/">Home</a></td>
        <td><a href="https://github.com/quirkey/sammy">Git</a></td>
        <td><a href="//cdnjs.cloudflare.com/ajax/libs/sammy.js/0.7.4/sammy.min.js">CDN</a></td>
    </tr>
    <tr>
        <th>RequireJS</th>
        <td><a href="http://requirejs.org/">Home</a></td>
        <td><a href="https://github.com/jrburke/requirejs">Git</a></td>
        <td></td>
    </tr>
    <tr>
        <th>RequireJS Text</th>
        <td></td>
        <td><a href="https://github.com/requirejs/text">Git</a></td>
        <td></td>
    </tr>
    <tr>
        <th>jQuery</th>
        <td><a href="http://jquery.com/">Home</a></td>
        <td><a href="https://github.com/jquery/jquery">Git</a></td>
        <td><a href="//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js">CDN</a></td>
    </tr>
    <tr>
        <th>Knockout</th>
        <td><a href="http://knockoutjs.com/">Home</a></td>
        <td><a href="https://github.com/SteveSanderson/knockout/">Git</a></td>
        <td><a href="//cdnjs.cloudflare.com/ajax/libs/knockout/2.2.1/knockout-min.js">CDN</a></td>
    </tr>
</table>

## SPA Example

This demo uses a slightly-modified version of the [Durandal single-page application framework](http://durandaljs.com/), including the sample app it comes packaged with. The sample app can be found under the directories `app/samples` and `app/views`.