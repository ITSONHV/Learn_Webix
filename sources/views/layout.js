// views/bigview.js
import {JetView} from "webix-jet";
import MyView from "./myview";

export default class LayoutView extends JetView{
    config(){
        return{ 
            // Đây là kiểu app.show
            // view:"button", value:"Details", click: () => {
                // nếu có forder mình sẽ thông qua forder gọi đến file như này
            // this.app.show("/top/details.form");
            // this.app.show("/top/details.form?id=2");
        //}
        // Đây là kiểu views.show()
        rows:[
            { view:"button", value:"demo",
                click:()=>{
                    //this.show("/data") nếu xài cái này app sẽ build riêng biệt chỉ chưa mỗi cái url này k có cả sidebar...
                    //this.show("data")
                    //this.show("./data")
                   // this.show("./details.form")
                   // có thể thêm thông số vào URL
                    //this.show("./details.form?id=2&name=son")
                    this.show("details.form")// cai nay chi dung khi click chuot thoi nhe
                }
            },
            { $subview:true }
        ]
    }
    }
}