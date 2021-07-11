import { JetView, plugins } from "webix-jet";



export default class TopView extends JetView {
	config() {
		var header = {
			type: "header", template: this.app.config.name, css: "webix_header app_header"
		};

		var topmenu = {
			view:"menu",
			id:"testmenu",
			autowidth:true,
			data:[
			  { id:"1",value:"Translate", submenu:[
				{value:"English",id:"start"}, 
				{ value:"Slavic...", submenu:[
				  "Belarusian", "Russian", "Ukrainian"
				]},
				"German"
			  ]},
			  { id:"2", value:"Post", submenu:[ "Facebook", "Google+", "Twitter" ]},    
			  { id:"3",value:"Info" }
			],
			openAction:"click",
			on:{
			  onMenuItemClick:function(id){
				webix.message("Click: "+this.getMenuItem(id).value);     
				this.show("top/"+id);
			  }
			},
			type:{
			  subsign:true
			}
		  };	
		  
		var menu = {
			view: "menu", id: "top:menu",
			css: "app_menu",
			width: 180, layout: "y", select: true,
			template: "<span class='webix_icon #icon#'></span> #value# ",
			data: [
				{ value: "Dashboard", id: "start", icon: "fa fa-tachometer" },
				{ value: "Data", id: "data", icon: "wxi-pencil" },
				{ value: "My View", id: "myview", icon:"fa fa-eye" },
				{ value: "Big View", id: "bigview", icon:"fa fa-eye" },
				{ value: "Layout", id: "layout", icon:"fa fa-eye" },
				{ value: "Customers", id: "customers", icon:"fa fa-eye" },
				{ value: "Products", id: "products", icon:"fa fa-eye" },
				{ value: "List", id: "list", icon:"fa fa-eye" },
			]
		};

		var ui = {
			type: "line", paddingX: 5, css: "app_layout", cols: [
				{ paddingX: 5, paddingY: 10, rows: [{ css: "webix_shadow_medium", rows: [header, menu] }] },
				{
					type: "space", paddingY: 10, paddingX: 5, rows: [
						{view:"toolbar",cols:[
							topmenu
						]},
						{ $subview: true }
					]
				}
			]
		};

		return ui;
	}
	init() {
		this.use(plugins.Menu, "top:menu");
	}
}