var source = JSON.parse(context.getVariable('response.content'));

var newResponse = [];

source.data.forEach(
  function(eap) {
    var obj = {};
    obj.eventApiProductName = eap.name;
    obj.importableApiProducts = [];
    for (i=0; i<eap.plans.length; i++){
      var plan = eap.plans[i];
       var newPlan = {
        apiProductName: eap.name + "-" + plan.name,
        planId: plan.id,
        eventApiProductId: eap.id
      };
      obj.importableApiProducts.push(newPlan);
    }
    newResponse.push(obj);
  }
);


context.setVariable('response.content', JSON.stringify(newResponse));