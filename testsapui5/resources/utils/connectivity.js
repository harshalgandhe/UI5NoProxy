
//Root URL for the service

function getUrl(sUrl){
	
	if(sUrl=="")
		return sUrl;
	if(window.location.hostname =="localhost" || window.location.hostname=="10.100.10.241:8005")
		{return sUrl;
		}
	else
		{
		return sUrl;
		}
}
//
var serviceUrl = getUrl('/sap/opu/odata/sap/ZPURCHASE_REQUISITION1_SRV/');
//var serviceUrl = 'http/10.100.10.241:8005/sap/opu/odata/sap/ZPURCHASE_REQUISITION1_SRV/?sap-client=120';
