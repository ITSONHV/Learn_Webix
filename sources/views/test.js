const JetApp = webix.jet.JetApp;
const JetView = webix.jet.JetView;

class ChildView extends JetView {
  config(){
    webix.message("Child config");
    return {
      template:"child"
    };
  }
  init(){
    webix.message("Child init");
  }
  urlChange(){
    webix.message("Child urlChange");
  }
  ready(){
    webix.message("Child ready");
  }
}

class TopView extends JetView {
  config(){
    webix.message("Top config");
    return {
      rows:[
        { template:"Main part"},
        { $subview:true },
      ]
    };
  }
  init(){
    webix.message("Top init");
  }
  urlChange(){
    webix.message("Top urlChange");
  }
  ready(){
    webix.message("Top ready");
  }
}

const app = new JetApp({
  start:"/top/child",
  views:{
    top: TopView,
    child: ChildView
  }
});

app.render();