// views/customers.js
import {JetView} from "webix-jet";
import {getRecords} from "models/orders";
import {getClients} from "models/customers";
import CustomersData from "./customerdata"
export default class CustomerView extends JetView{
    config(){
        return {
            rows:[
                new CustomersData(this.app,"",getRecords),
                new CustomersData(this.app,"",getClients)
            ]
        };
    }
}