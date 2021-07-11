// views/bigview.js
import {JetView} from "webix-jet";

export default class TestView extends JetView{
    config(){
        return{ 
            template:"This is form"
        }
    }
}