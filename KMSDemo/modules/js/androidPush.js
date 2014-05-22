function callbackAndroidRegister()
{
  alert("senid:"+KMSPROP.senderID)
		var configToRegister = {senderid:KMSPROP.senderID};
		kony.push.register(configToRegister);
		alert("Registration Done !!!");
}

function callbackAndroidSetCallbacks()
{
 	kony.push.setCallbacks({onsuccessfulregistration: regSuccessAndroidCallback, onfailureregistration: regFailureAndroidCallback,
 						    onlinenotification: onlinePushNotificationAndroidCallback, offlinenotification: offlinePushNotificationAndroidCallback,
 						    onsuccessfulderegistration: unregSuccessAndroidCallback, onfailurederegistration:unregFailureAndroidCallback });
 	alert("setCallBack Done !!!");
}

function regSuccessAndroidCallback(regId)
{
	alert("calling subscribe kms");
	subscribeKMS(regId,"android");
}

function regFailureAndroidCallback(errormsg)
{
	kony.print(errormsg);
	alert("Registration Failed ");
}

function onlinePushNotificationAndroidCallback(msg)
{
	kony.print("************ JS onlinePushNotificationCallback() called *********");
	kony.print(JSON.stringify(msg));
	alert("Message Received : "+ msg["content"]+"\nFetchid: "+msg["mid"]);
}

function offlinePushNotificationAndroidCallback(msg)
{
	kony.print("************ JS offlinePushNotificationCallback() called *********");
	kony.print(msg);
	alert("Message Received..\n "+msg["content"]);
}


function unregSuccessAndroidCallback()
{
	alert("Unregisterd Succesfully!!");
	unsubscribeKMS();
}

function unregFailureAndroidCallback(errormsg)
{
	alert(" Unregistration Failed!!");
	alert("Error message: "+JSON.stringify(errormsg));
}

