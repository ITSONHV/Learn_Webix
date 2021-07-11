import MenuView from "views/menu";
import WindowView from "views/window";
import { JetView } from "webix-jet";
export default class Test1Vew extends JetView {
    config(){
        return {
            rows:[
                { view:"button" },
                { $subview:MenuView }
            ]
        };
    }
    init(){
        this.win1 = this.ui(WindowView);
        //this.win1.showWin();
    }
}