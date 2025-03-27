var requestBody = JSON.parse(context.getVariable('request.content'));
var requestScheme = context.getVariable('client.scheme');
var requestHost = context.getVariable('clientRequest.header.host');

var requestBasePath = requestScheme + "://" + requestHost;

var apiProducts = requestBody.apiProducts;
var handles=[];

for (i = 0; i < apiProducts.length; i++) {
  const currentProduct = apiProducts[i];
  const epAppPostRequestBody = {};
  epAppPostRequestBody.name=requestBody.name;
  epAppPostRequestBody.apiproduct=currentProduct;
  var req = JSON.stringify(epAppPostRequestBody);
  var url = requestBasePath + "/ep-bootstrap/accessrequests";
  var operation = "POST";
  var headers = {};
  var request = new Request(url, operation, headers, req);
  var handle = httpClient.send(request);
  handles.push(handle);
}
context.setVariable('handles', handles);