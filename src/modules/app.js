import DonateForm from "./donate-form";
import { DonateList } from "./donate-list";
import * as utils from '../core/utils/index';

export default class App {
  #form;
  #list;

  constructor(donates) {
    this.state = {
      donates: donates,
      totalAmount: utils.calculateSumOfNumbers(donates.map(({ amount }) => amount)),
    }
    this.#form = new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this));
    this.#list = new DonateList(this.state.donates);
  }

  createNewDonate(newDonate) {
    this.state.donates = [newDonate, ...this.state.donates];
    this.state.totalAmount += newDonate.amount;
    this.#list.updateDonates(this.state.donates);
    this.#form.updateTotalAmount(this.state.totalAmount);
  }

  run() {
    const form = this.#form.render();
    const list = this.#list.render();

    document.body.append(form, list);
  }
}
