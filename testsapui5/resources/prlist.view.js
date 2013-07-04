jQuery.sap.require("testsapui5.resources.utils.utility");

/**
 * First Application View - this is the application's starting point. It builds the application window.   
 */
sap.ui.jsview("testsapui5.resources.prlist", {

      getControllerName : function() {
         return "testsapui5.resources.prlist";
    	 
      },
      
      createContent : function(oController) {
		var oShell = this.createShell();
       	oShell.addContent(this.createHeaderTable());	
       	return oShell;
       	
      },

      createShell:function(oController){
      
    	  var oShell = sap.ui.ux3.Shell("ID_HeaderShell",{
    	      appIcon: "images/SAPLogo.gif",
    		  appTitle: oBundle.getText("APP_TITLE"),
    		  showLogoutButton:false,
    		  showSearchTool: false,
    		  showFeederTool: false,
    		  worksetItems: [new sap.ui.ux3.NavigationItem("navItemList",{key: "HeaderList",text:oBundle.getText("WORKSET_TITLE")})]
    	  });
    	  return oShell;
      },
      
      /**
	 * Returns a table with the required columns, each column is bound for a specific odata service property   
	 * @returns {sap.ui.table.Table}
	 */
      createHeaderTable:function(){
      
    	var oTable = new sap.ui.table.Table("ID_HeaderTable", {
    		visibleRowCount  : 20,
  			selectionMode: sap.ui.table.SelectionMode.None
  		});
    	
 

    	  oTable.addColumn(new sap.ui.table.Column({
    	  	label: new sap.ui.commons.Label({text:oBundle.getText("HEADER_PREQNO")}),
			template:new sap.ui.commons.Link().bindProperty("text", "PreqNo")
											  .attachPress(this.getController().onPressGetPritemdetails),
		}));
			

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("HEADER_PRTYPE")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "PrType"),
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("HEADER_PRTYPEDESC")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "PrTypeDesc"),
 		}));
 		return oTable;   		
      }
      
});
