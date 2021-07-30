import DonateForm from "./donate-form";

export default class App {
  #form

  constructor() {
    this.#form = new DonateForm();
  }


  run() {
    const form = this.#form.render();

    document.body.append(form);
  }
}
