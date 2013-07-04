sap.ui.controller("testsapui5.resources.pritemdetails", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 */

//	onInit: function(oEvent) {


//	},
	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 */
//	onBeforeRendering: function() {

//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 */
//	onAfterRendering: function() {

//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 */
//	onExit: function() {

//	}

	/**
	 * This method populates the UI with business data according to received context and then opens the UI. 
	 * @param oContext - the OData context of the previous view  
	 */
	loadContent:function(oContext){

		var sFirstDetailContext = this.setHeaderFirstDetails(oContext);
		var oOverlaycontainer = sap.ui.getCore().byId("ID_pritemdetailsOverlay");

		if(!oOverlaycontainer.isOpen()){
			oOverlaycontainer.open();
		}  
	},
	
	/**
	 * Updates the details panel with business data obtained after an OData call to the SAP NetWeaver Gateway system.
	 * @param oContext - the OData context of the previous view 
	 */
	setHeaderFirstDetails:function(oContext){
		var oModel  = sap.ui.getCore().byId("ID_HeaderTable").getModel();
		var sPath = "";
		oModel.read("",oContext,[],false,
				function(oData,response){
						sap.ui.getCore().byId("ID_pritemdetails_Header_AutoSource_1").setText(oData["AutoSource"]);
						sap.ui.getCore().byId("ID_pritemdetails_Header_CreateInd_1").setText(oData["CreateInd"]);
						sap.ui.getCore().byId("ID_pritemdetails_Header_CtrlInd_1").setText(oData["CtrlInd"]);
						sap.ui.getCore().byId("ID_pritemdetails_Header_GeneralRelease_1").setText(oData["GeneralRelease"]);
						sap.ui.getCore().byId("ID_pritemdetails_Header_HoldComplete_1").setText(oData["HoldComplete"]);
						sap.ui.getCore().byId("ID_pritemdetails_Header_HoldUncomplete_1").setText(oData["HoldUncomplete"]);
						sap.ui.getCore().byId("ID_pritemdetails_Header_ItemIntvl_1").setText(oData["ItemIntvl"]);
						sap.ui.getCore().byId("ID_pritemdetails_Header_LastItem_1").setText(oData["LastItem"]);
						sap.ui.getCore().byId("ID_pritemdetails_Header_Memory_1").setText(oData["Memory"]);
						sap.ui.getCore().byId("ID_pritemdetails_Header_Memorytype_1").setText(oData["Memorytype"]);
						sap.ui.getCore().byId("ID_pritemdetails_Header_ParkComplete_1").setText(oData["ParkComplete"]);
						sap.ui.getCore().byId("ID_pritemdetails_Header_ParkUncomplete_1").setText(oData["ParkUncomplete"]);
						sap.ui.getCore().byId("ID_pritemdetails_Header_PreqNo_1").setText(oData["PreqNo"]);
						sap.ui.getCore().byId("ID_pritemdetails_Header_PrType_1").setText(oData["PrType"]);
						sap.ui.getCore().byId("ID_pritemdetails_Header_PrTypeDesc_1").setText(oData["PrTypeDesc"]);
						var sContext = response.data.__metadata.uri;
						sPath = sContext.substring(sContext.lastIndexOf("/"));
				},
				function(error){
					if (error.response != undefined ){
						displayError({message: error.message, statusCode: error.response.statusCode , statusText: error.response.statusText, requestUri: error.response.requestUri});
					}
					else if (error.message != undefined){
						alert(oBundle.getText("MESSAGE") + " " + error.message);
					}
					else{
						alert(oBundle.getText("GENERAL_ERROR_MESSAGE"));
					}
				});
		var oNewContext = new sap.ui.model.Context(oModel, sPath, null);
		return oNewContext;
	},

 	

});