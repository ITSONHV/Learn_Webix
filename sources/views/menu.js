import {JetView} from "webix-jet";

export default class MenuView extends JetView{
	config(){
		return { 
            view:"button",
            value:"Click me"
	    };
	}
}