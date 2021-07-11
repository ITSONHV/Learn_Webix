// views/window.js
import {JetView} from "webix-jet";
export default class WindowView extends JetView{
    config(){
        return { view:"window", position:"center",body:{ template:"Some text"} };
    }
    showWin(target){
        debugger
        this.getRoot().show(target);
    }
}