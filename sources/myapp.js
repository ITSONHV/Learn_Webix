import "./styles/app.css";
import {JetApp, EmptyRouter, HashRouter } from "webix-jet";

export default class MyApp extends JetApp{
	constructor(config){
		const defaults = {
			id 		: APPNAME,
			version : VERSION,
			router 	: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
			debug 	: !PRODUCTION,
			start 	: "/top/start",
			name	: "Learn Webix",
			// views	:(name)=>{
			// 	debugger
			// 	if(name==="details.form"){
			// 		var a = import("./views/details/form");
			// 		return import("./views/details/form");
			// 	}
			// 	return name;
			// },
			views: function(url){
				//implement your own logic here
				url = url.replace(/\./g, "/");
				var view = require("jet-views/"+url);
				if (view.__esModule) {
					view = view.default;
				}
				return view;
			},
			routes:{
				"/hi"    : "/top/start",
                "/form"    : "/top/layout/details.form",
                "/list"    : "/top/layout",
			}
		};

		super({ ...defaults, ...config });
	}
}

if (!BUILD_AS_MODULE){
	webix.ready(() => new MyApp().render() );
}