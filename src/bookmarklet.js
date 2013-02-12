(function bookmarklet() {

    // Insert CSS node
    var cssNode = document.createElement('link'),
        ts = (new Date()).getTime(),
        styles;
    cssNode.href = 'https://raw.github.com/weluse/pivoprox/master/css/print.css?' + ts;
    cssNode.setAttribute('rel', 'stylesheet');

    document.body.appendChild(cssNode);

    // Make all stylesheets print aware
    styles = document.querySelectorAll('link[media=screen]');
    Array.prototype.slice.call(styles).forEach(function (el) {
        el.setAttribute('media', 'screen, print');
    });
}());
