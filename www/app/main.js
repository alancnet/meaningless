// Load config.json
var config;
$.ajax('config.json', {
    async: false,
    success: function(data, textStatus, jqXHR) {
        config = data;
    }
});
if (!config) throw new Error('config.json failed to load');

// Load livereload
if (config.livereload) {
    var script = document.createElement('script');
    script.setAttribute('src', config.livereload);
    document.head.appendChild(script);
    setTimeout(function() {
        if (!window.LiveReload) {
            alert('Don\'t forget to run \'grunt watch\'!'); 
        }
    }, 5000);
}
