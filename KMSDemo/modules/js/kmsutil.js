function subscribeKMS(regId,ostype)
{
	var isGCM = false;
	if(ostype == "android")
		isGCM = true;
		
    var sub = {"sid":regId,"appId":KMSPROP.appID,"ufid":KMSPROP.ufID,"osType":ostype,"deviceId": KMSPROP.deviceID, "isGCM": isGCM };
	var inp = {"subscriptionService":{"subscribe":sub}};
	var myhttpheaders={"Content-Type":"application/json"};
	var paramTab = {postdata:JSON.stringify(inp),httpheaders:myhttpheaders};
	var url = KMSPROP.kmsserverurl+"/subscription";
    kony.net.invokeServiceAsync (url,paramTab,KMSregCallback);
}


function KMSregCallback(status,result){

	 if(status==400){
	 kony.print("$#."+JSON.stringify(result));
	 //alert("result:" + result);
	 var tmp = result["subscriptionResponse"];
	 ksid = tmp["ksid"];
		if(tmp["statusCode"] == 200){
			alert("Device subscribed to Kony Messaging service sucessfully..");
			
		}	
		else
			alert("Failed to subscribe to Kony Messaging Service!!" + tmp["message"]);
	}		
	
}


function unsubscribeKMS()
{
    var sub = {"appId":KMSPROP.appID,"ksid":ksid,"deviceId":KMSPROP.deviceID};
	var inp = {"subscriptionService":{"unsubscribe":sub}};
	var myhttpheaders={"Content-Type":"application/json"};
	var paramTab = {postdata:JSON.stringify(inp),httpheaders:myhttpheaders};
	var url = KMSPROP.kmsserverurl+"/subscription";
	kony.net.invokeServiceAsync(url,paramTab,KMSunregCallback);

}
function KMSunregCallback(status,result){
     if(status==400){
	 kony.print("$#."+JSON.stringify(result));
	// alert("result:"+result);
	 var tmp = result["subscriptionResponse"];
	 ksid = tmp["ksid"];
		if((tmp["statusCode"] == 200)){
			alert("Device unsubscribed from Kony Messaging Service sucessfully..");
		}	
		else
			alert("Failed to unsubscribe from Kony Messaging Service!!"+tmp["message"]);
	}		
	
}

 function pushdeRegister()
{
		kony.print("************ JS unregisterFromAPNS() called *********");
		kony.push.deRegister({});
		alert("DeRegistration Done !!!");
			
}

function pushRegister()
{
	var devName = kony.os.deviceInfo().name;
//	alert("devName" + devName);
	if(devName=="android")
	{
		callbackAndroidSetCallbacks();
		callbackAndroidRegister();
	}else if((devName=="iPhone")||(devName=="iPhone Simulator"))
	{
		callbackiPhoneSetCallbacks();
		callbackiPhoneRegister();
	}
}

function How_To_KMS()
{

}
