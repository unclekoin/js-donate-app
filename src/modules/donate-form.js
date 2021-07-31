import { Settings as set } from "../core/constants/settings";

export default class DonateForm {
  #form;
  #totalAmount;
  #createNewDonate;
  #title;

  constructor(totalAmount, createNewDonate) {
    this.#createNewDonate = createNewDonate;
    this.#totalAmount = totalAmount;
    this.#form = document.createElement('form');
    this.#form.className = 'donate-form';
    this.#title = document.createElement('h1');
    this.#title.className = 'total-amount';

    this.updateTotalAmount(this.#totalAmount);
    this.#donateFormHandler();
  }

  updateTotalAmount(newAmount) {
    this.#title.textContent = `${newAmount}${set.currency}`;
  }

  #donateFormHandler() {
    this.#form.addEventListener('submit', (event) => {
      event.preventDefault();
      const { target } = event;
      const input = target.amount;

      const newDonate = {
        date: new Date(),
        amount: Number(input.value)
      }
      this.#createNewDonate(newDonate)
      input.value = '';
    })

  }

  render() {
    const label = document.createElement('label');
    label.className = 'donate-form__input-label';
    label.textContent = `Enter the amount in ${set.currency}`;

    const input = document.createElement('input');
    input.className = 'donate-form__donate-input';
    input.setAttribute('name', 'amount');
    input.type = 'number';
    input.setAttribute('max', '100');
    input.setAttribute('mim', '0');
    input.setAttribute('required', '');
    label.append(input);

    const button = document.createElement('button');
    button.className = 'donate-form__submit-button'
    button.type = 'submit';
    button.textContent = 'Donate'

    this.#form.append(this.#title, label, button);

    return this.#form
  }
}
