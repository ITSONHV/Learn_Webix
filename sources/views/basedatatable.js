// views/basedatatable.js
import {JetView} from "webix-jet";
export default class BaseDatatable extends JetView {
    constructor(app, name, config){
        super(app, name);
        this.grid_config = config;
    }
    config(){
        return { view:"datatable",select:true, columns: this.grid_config.columns };
    }
}