sap.ui.jsview("testsapui5.resources.pritemdetails", {

	getControllerName : function() {
		return "testsapui5.resources.pritemdetails";
	},

	createContent : function(oController) {
		this.createOverlayContainer();
	},
	
	createOverlayContainer:function(){
		
		var oOverlayContainer = new sap.ui.ux3.OverlayContainer("ID_pritemdetailsOverlay",{openButtonVisible:false});
		oOverlayContainer.addContent(this.createFirstDetailHeader());
		return oOverlayContainer;

	},

	/**
	 * Returns a panel with the user-selected name-value properties.  
	 * @returns {sap.ui.commons.Panel}
	 */
	createFirstDetailHeader:function(){
	
		var oPanel = new sap.ui.commons.Panel({
			width: "100%",
			height: "40%",
			text: oBundle.getText("HEADER__DETAILS_TITLE"),
			showCollapseIcon: false,
			areaDesign: sap.ui.commons.enums.AreaDesign.Plain
		});

		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed: true, 
			width: '100%', 
			widths:["10%", "90%"], 
			columns: 2
		});
			
			oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("HEADER_AUTOSOURCE"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_pritemdetails_Header_AutoSource_1",{editable:false })
			);
			oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("HEADER_CREATEIND"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_pritemdetails_Header_CreateInd_1",{editable:false })
			);
			oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("HEADER_CTRLIND"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_pritemdetails_Header_CtrlInd_1",{editable:false })
			);
			oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("HEADER_GENERALRELEASE"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_pritemdetails_Header_GeneralRelease_1",{editable:false })
			);
			oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("HEADER_HOLDCOMPLETE"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_pritemdetails_Header_HoldComplete_1",{editable:false })
			);
			oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("HEADER_HOLDUNCOMPLETE"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_pritemdetails_Header_HoldUncomplete_1",{editable:false })
			);
			oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("HEADER_ITEMINTVL"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_pritemdetails_Header_ItemIntvl_1",{editable:false })
			);
			oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("HEADER_LASTITEM"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_pritemdetails_Header_LastItem_1",{editable:false })
			);
			oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("HEADER_MEMORY"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_pritemdetails_Header_Memory_1",{editable:false })
			);
			oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("HEADER_MEMORYTYPE"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_pritemdetails_Header_Memorytype_1",{editable:false })
			);
			oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("HEADER_PARKCOMPLETE"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_pritemdetails_Header_ParkComplete_1",{editable:false })
			);
			oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("HEADER_PARKUNCOMPLETE"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_pritemdetails_Header_ParkUncomplete_1",{editable:false })
			);
			oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("HEADER_PREQNO"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_pritemdetails_Header_PreqNo_1",{editable:false })
			);
			oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("HEADER_PRTYPE"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_pritemdetails_Header_PrType_1",{editable:false })
			);
			oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("HEADER_PRTYPEDESC"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_pritemdetails_Header_PrTypeDesc_1",{editable:false })
			);

		oPanel.addContent(oMatrix);
		return oPanel;

	},

 
});