export const jsonp = {
  currentScript: null,
  get: function(url, data, callback) {
    var src = url + (url.indexOf('?') + 1 ? '&' : '?');
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    var params = [];
    var paramName = '';

    this.success = callback;

    data.callback = 'jsonp.success';
    for (paramName in data) {
      if (data.hasOwnProperty(paramName)) {
        params.push(paramName + '=' + encodeURIComponent(data[paramName]));
      }
    }
    script.type = 'text/javascript';
    script.src = src + params.join('&');

    if (this.currentScript) head.removeChild(this.currentScript);
    head.appendChild(script);
  },
  success: null
};
global.jsonp = jsonp;
