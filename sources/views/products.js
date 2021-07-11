// views/products.js
import BaseDatatable from "views/basedatatable";
import {products} from "models/products"; //data collection
import ContextMenuBar from "../components/ContextMenu";
export default class ProductsView extends BaseDatatable {
    constructor(app, name){
        super(app, name, {
            columns:[
                {id:"id",header:""},
                {id:"product",header:"Product",width:200},
                {id:"stock",header:"In stock"}
            ]
        });
    }
    init(view){
        view.parse(products);
        var context = this.ui(ContextMenuBar);
		context._root.attachTo(view.getNode())
    }
}