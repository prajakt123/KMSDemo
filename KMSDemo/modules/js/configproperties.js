// put in the Kony Messagign server details here
// if using diff server from ur cloud input here else get teh url from appconfig
var KMSPROP = {

		"kmsserverurl" : "<kms cloud console url>",
		"senderID" :"<senderID>", // applicable for android only- clientID generated in google console
		"appID":"KMSDemo", // appID generated or given in the cloud KMS console
		"deviceID" : kony.os.deviceInfo().deviceid,
		"ufID":"kmsdemouser@kony.com" // any unique identifier for the app
		
}
