
function callbackiPhoneRegister()
{
	var notificationTypes = [0, 1, 2];
	kony.push.register(notificationTypes);
	alert("Registration Done !!!");
}

function callbackiPhoneSetCallbacks()
{
		var callbacksTable = {onsuccessfulregistration: regSuccessiPhoneCallback, onfailureregistration: regFailureiPhoneCallback, onlinenotification: onlinePushNotificationiPhoneCallback, offlinenotification: offlinePushNotificationiPhoneCallback, onsuccessfulderegistration: unregSuccessiPhoneCallback, onfailurederegistration: unregFailureiPhoneCallback}; 
		kony.push.setCallbacks(callbacksTable);
	//	alert("setCallBack Done !!!");
}

function regSuccessiPhoneCallback(regId)
{
	
//	alert(" Registerd to iPhone push server : "+ regId);
    subscribeKMS(regId,"iphone");
}

function regFailureiPhoneCallback(errormsg)
{
	kony.print("************ JS regFailureCallback() called *********");
	kony.print(errormsg);
	alert("Registration Failed ");
	alert("Error message: "+JSON.stringify(errormsg));
}

function onlinePushNotificationiPhoneCallback(msg)
{
	kony.print("************ JS onlinePushNotificationCallback() called *********");
	kony.print(msg);
	/* var fetchid = msg["mid"];
	var msgs = new Array();
	for(var key in msg)
		msgs.push({"lblkey":key,"lblval":msg[key]});
	sendViewMsgStatus(fetchid);
	alert("Message: "+msg["content"]);*/
}

function offlinePushNotificationiPhoneCallback(msg)
{
	kony.print("************ JS offlinePushNotificationCallback() called *********");
	alert("Offline Push Notification called ");
	/*var msgs = new Array();
	for(var key in msg)
		msgs.push({"lblkey":key,"lblval":msg[key]});
	alert("Message: "+msg["content"]);*/
	kony.print(msg);
}

function unregSuccessiPhoneCallback()
{
    alert("Unregisterd Sucesfully!!");
	unsubscribeKPNS();
}

function unregFailureiPhoneCallback(errormsg)
{
	alert(" Unregistration Failed!!");
	alert("Error message: "+JSON.stringify(errormsg));
	kony.print(errormsg);
	
}

