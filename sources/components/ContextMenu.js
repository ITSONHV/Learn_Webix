import { JetView } from "webix-jet";
import { JetApp } from "webix-jet";

export default class ContextMenuBar extends JetView{
    config(){
        return {
            view:"contextmenu",
            id:"cmenuMain",
            data:["Add","Rename","Delete",{ $template:"Separator" },"Info"],  
            on:{
                onItemClick:function(id){
                webix.message(this.getItem(id).value);
                }
            }
        }
    }
}