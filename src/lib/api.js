export const jsonp = {
  currentScript: null,
  get: function(url, data, callback) {
    var src = url + (url.indexOf("?") + 1 ? "&" : "?");
    var head = document.getElementsByTagName("head")[0];
    var newScript = document.createElement("script");
    var params = [];
    var param_name = "";

    this.success = callback;

    data["callback"] = "jsonp.success";
    for (param_name in data) {
      if (data.hasOwnProperty(param_name)) {
        params.push(param_name + "=" + encodeURIComponent(data[param_name]));
      }
    }
    src += params.join("&");

    newScript.type = "text/javascript";
    newScript.src = src;

    if (this.currentScript) head.removeChild(this.currentScript);
    head.appendChild(newScript);
  },
  success: null
};
global.jsonp = jsonp;
