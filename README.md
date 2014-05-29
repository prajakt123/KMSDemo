KMSDemo
================

This app showcase features of Kony Messaging Service.

# Purpose
This Application will showcase Kony Messaging Service on Cloud.

# To run the App

 * Download and import project to KonyStudio
 * Navigate to Modules-->JS folder
 * Open configproperties.js file
 * Configure SenderID- the clientID generated in google API console,appID - the ID generated in Kony Messaging service console and ufID- any unique identifier for your app
 
var KMSPROP = 

{
    
    "kmsserverurl" : "< kms cloud console url >",
    
		"senderID" :"<senderID>", // applicable for android only- clientID generated in google console
		
		"appID":"KMSDemo", // appID generated or given in the cloud KMS console
		
		"deviceID" : kony.os.deviceInfo().deviceid,
		
		"ufID":"kmsdemouser@kony.com" // any unique identifier for the app
}

 * Build for Android or iphone and run the app on device.


# Supported platforms:
**Mobile**
 * Android


**NOTE:**
Configure KMS in your cloud instance before running the app
