exports.run = (client, message, args) => {

    var request = require("request");
  
var options = { method: 'POST',
  url: 'http://app.nanonets.com/api/v2/ImageCategorization/LabelUrls/',
  headers:
  { 'cache-control': 'no-cache',
    Authorization: 'Basic ' + new Buffer('x9rbm4wxpTx0EZv6BC39BEVdetEkO9bH' + ":" + '').toString("base64"),
    'Content-Type': 'application/x-www-form-urlencoded' },
  form:
  { urls: 'https://goo.gl/ICoiHc',
    modelId: '7390a500-9fe1-483b-8123-750b96fc660c' } };

request(options, function (error, response,body) {
  if (error) throw new Error(error);

  console.log(body);
});
    
};