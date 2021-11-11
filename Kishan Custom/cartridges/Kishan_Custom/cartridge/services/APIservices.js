var LocalServiceRegistry = require('dw/svc/LocalServiceRegistry');

var OMDBservice = LocalServiceRegistry.createService('OMDBservices', {
  createRequest: function (svc, params) {
    svc.setRequestMethod('GET');
    svc.addHeader('Accept', 'application/json');
    return params;
  },
  parseResponse: function (svc, httpClient) {
    var result;

    try {
      result = JSON.parse(httpClient.text);   
    } catch (e) {
      result = httpClient.text;
    }
    return result;
  }
});

module.exports = {
  OMDBservice: OMDBservice
};
