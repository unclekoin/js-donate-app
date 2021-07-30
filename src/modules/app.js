import DonateForm from "./donate-form";
import DonateList from "./donate-list";

export default class App {
  #form;
  #list;
  #state;

  constructor(donates) {
    this.#state = {
      donates: donates,
      totalAmount: 0,
    }
    this.#form = new DonateForm(this.#state.totalAmount, this.createNewDonate.bind(this));
    this.#list = new DonateList(this.#state.donates);
  }

  createNewDonate(newDonate) {
    this.#state.donates = [newDonate, ...this.#state.donates];
    this.#state.totalAmount += newDonate.amount;
    this.#list.updateDonates(this.#state.donates);
    this.#form.updateTotalAmount(this.#state.totalAmount);
  }

  run() {
    const form = this.#form.render();
    const list = this.#list.render();

    document.body.append(form, list);
  }
}
