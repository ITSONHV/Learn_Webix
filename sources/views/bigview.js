// views/bigview.js
import {JetView} from "webix-jet";
import MyView from "./myview";

export default class BigView extends JetView{
    config(){
        return{
            rows:[
                //{ $subview: true },
                { template:"BigView text" },
                { $subview:true, name:"left" },
                { $subview:true, name:"right" }
            ]
        }
    }
    
    init(){
        this.show("details1/myview", { target:"left" });
        this.show("details1/myview", { target:"right" });
    }
}