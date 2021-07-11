// views/details1.js
import {JetView} from "webix-jet";
export default class DetailsView extends JetView {
       config(){
        return {
            rows: [
                { template:"Details", type:"header" },
                { $subview:true }
            ]
        };
    }
    urlChange(){
        debugger
        const url = this.getUrlString();
        // "details/myview"
    }
}