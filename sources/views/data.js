import {JetView} from "webix-jet";
import {data} from "models/records";
import ContextMenuBar from "../components/ContextMenu";

export default class DataView extends JetView{
	config(){
		var a = this.app
		debugger
		return { view:"datatable",id:"tableMain", autoConfig:true, css:"webix_shadow_medium",
		on:{
			onAfterContextMenu:function(id,e,node) {
				webix.delay(function(){
				  this.select(id.row);
				}, this);
			  },
		}
	
	};
	}
	init(view){
		view.parse(data);
		var context = this.ui(ContextMenuBar);
		debugger;
		// var context = this.ui({
		// 	view:"contextmenu",
		// 	data:["Add","Rename","Delete",{ $template:"Separator" },"Info"],
		// 	on:{
		// 	  onItemClick:function(id){
		// 		webix.message(this.getItem(id).value);
		// 	  }
		// 	}
		//   });
		context._root.attachTo(this.$$("tableMain").getNode())
	}
}