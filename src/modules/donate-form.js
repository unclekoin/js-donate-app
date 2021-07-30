export default class DonateForm {
  #form;
  #totalAmount;
  #createNewDonate;

  constructor(totalAmount, createNewDonate) {
    this.#createNewDonate = createNewDonate;
    this.#totalAmount = totalAmount;
    this.#form = document.createElement('form');
    this.#form.className = 'donate-form';

    this.#donateFormHandler();
  }

  #updateTotalAmount(newAmount) {
    return `$${newAmount}`;
  }

  #donateFormHandler() {
    this.#form.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log('submit');
    })

  }

  render() {
    const title = document.createElement('h1');
    title.className = 'total-amount';
    title.textContent = this.#updateTotalAmount(this.#totalAmount);

    const label = document.createElement('label');
    label.className = 'donate-form__input-label';
    label.textContent = 'Enter the amount in $';

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

    this.#form.append(title, label, button);

    return this.#form
  }
}
