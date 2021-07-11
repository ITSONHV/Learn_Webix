// views/form.js
import {JetView} from "webix-jet";

export default class FormView extends JetView {
    config() {
        return {
            view: "form",
            elements: [
                { view: "text", name: "email", required: true, label: "Email" },
                { view: "button", value: "save", click: () => this.show("details") }
            ]
        };
    }
}

// view/details.js
export default DetailsView = () => ({
    template: "Data saved"
});