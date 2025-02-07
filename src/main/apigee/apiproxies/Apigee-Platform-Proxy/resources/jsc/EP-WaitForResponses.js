var handles = context.getVariable('handles');

if (!handles){
  throw "failed to locate HTTTP request handles";
}

for (i=0; i < handles.length;i++){
  var exchange = handles[i];
	 exchange.waitForComplete();
	 if (exchange.isSuccess()) {
		var resp = exchange.getResponse();
		// check the status code
		if (resp.status<200 && resp.status>288) {
  		throw "Failed to connect to "+JSON.stringify(exchange)+". Status code is " + resp.status;
		}
	 } else {	
	  //throw "Failed to connect to " + JSON.stringify(exchange);
   }
}