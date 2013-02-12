(function bookmarklet() {

    // Insert CSS node.
    var cssNode = document.createElement('link'),
        ts = (new Date()).getTime(),
        styles;
    cssNode.href = 'https://weluse.github.com/pivprint/css/print.css?' + ts;
    cssNode.setAttribute('rel', 'stylesheet');
    cssNode.setAttribute('media', 'screen, print');

    document.body.appendChild(cssNode);

    // Make all stylesheets print aware.
    styles = document.querySelectorAll('link[media=screen]');
    Array.prototype.slice.call(styles).forEach(function (el) {
        el.setAttribute('media', 'screen, print');
    });
}());
