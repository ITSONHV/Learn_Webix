// views/myview.js
import {JetView} from "webix-jet";
import Lists from "views/list"
import WindowView from "views/window";
export default class MyView extends JetView{
    config() {
        return { 
            rows:[
                {
                    view:"button", value:"Click me",
                        click:() => this.doClick("Clicked")
                },
                {
                    view:"button", value:"Test API",
                        click:() => this.CallApi()
                },
                {template:"This is myview text"},
                Lists
            ]
     }};
    
    init(){
        
        this._counter = 0;
        this.win1 = this.ui(WindowView);
        this.win1.showWin();
    }
    doBeforeInit(app){
        headers["Authorization"] = "bearer 9791408d-194a-4d7f-98bf-154d9d978d18";
    }
    doClick(message){
        this._counter++;
        webix.message(message+" "+this._counter);
    }
    CallApi(){
        var param = {
            "requestId": "d062b2f8-dc3c-4366-afbe-87aadae8818e",
            "dateTime": "1565667082",
            "data":
              {
                  "id": 97,
                  "reportName":"authority",
                  "form":"authority",
                  "type":"pdf"
                }
          };
        webix.ajax()
          .headers({ 'Content-type': 'application/json' })
          .post("http://localhost:4001/Report/print", param, {
            error: function (text, data, XmlHttpRequest) {
              alert(text);
            },
            success: function (text, data, XmlHttpRequest) {
              this.enable();
              this.hideProgress();
              var blob = new Blob([pdf.toString()], { type: "application/pdf" });
              webix.html.download(blob, "myfile.pdf");

            }
          });

    }
}