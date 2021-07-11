// views/some.js
import WindowView from "views/window";
import {JetView} from 'webix-jet';
export default class SomeView extends JetView {
    config(){
        return {
        }
    }
    init(){
        this.win1 = this.ui(WindowView);
        //this.win1.showWin();
    }
}