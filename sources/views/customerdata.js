// views/customerdata.js
import {JetView} from "webix-jet";
export default class CustomersData extends JetView{
    constructor(app,name,data){
        debugger
        super(app,name);
        this._componentData = data;
    }
    config(){
        return {
            view:"datatable",
            select:true,
            columns:[
                { id:"name", header:["Name", {content:"textFilter"} ], sort:"text", fillspace:true },
                { id:"year", header:"Year", sort:"text", adjust:"data" },
                { id:"votes", header:"Votes", sort:"text", width:120 }
            ]
        };
    }
    init(view){
        view.parse(this._componentData);
    }
}